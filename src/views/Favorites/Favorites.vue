<template>
  <div class="favorites-page">
    <div class="favorites-page__header">
      <h1 class="favorites-page__title">Favorites List</h1>
      <Button
          @click="onSortArray"
          class="favorites-page__sort"
      >
        Alphabet Sort
      </Button>
    </div>
    <BreedsGrid
        :is-loading="isLoading"
        :breeds-list="breedsList"
        @breed-click="onBreedClick"
    />
  </div>
</template>

<script>
import { useActions, useGetters, useMutations } from '@/plugins/vuex'
import { alphabetSortArray } from '@/utils/sortArray'
import { computed, ref } from 'vue'
import { DOGS } from '@/store/modulesNames'
import BreedsGrid from '@/components/BreedsGrid'
import Button from '@/components/UIKit/Button'
import { ROUTES_NAMES } from '@/router/routesNames'
import { useRouter } from 'vue-router'

export default {
  name: 'Favorites',
  components: {
    Button,
    BreedsGrid
  },
  setup () {
    const router = useRouter()
    const {
      fetchFavorites
    } = useActions(DOGS)
    const {
      SET_OFFSET: setOffset
    } = useMutations(DOGS)
    const {
      getFavoritesBreedsList,
      getOffset: offset
    } = useGetters(DOGS)

    const isSorted = ref(false)
    const isLoading = ref(false)

    const breedsList = computed(() => {
      return isSorted.value
        ? alphabetSortArray(getFavoritesBreedsList.value)
        : getFavoritesBreedsList.value
    })

    const fetchData = async () => {
      await fetchFavorites()
    }
    const loadMore = async () => {
      isLoading.value = true
      setOffset(offset.value + 20)
      await fetchData()
      isLoading.value = false
    }
    const onSortArray = () => {
      isSorted.value = !isSorted.value
    }
    const onBreedClick = breed => {
      router.push({
        name: ROUTES_NAMES.BREED,
        params: {
          key: breed.key
        }
      })
    }

    loadMore()

    return {
      isLoading,
      breedsList,
      loadMore,
      fetchData,
      onSortArray,
      onBreedClick
    }
  }
}
</script>

<style lang="scss">
.favorites-page {
  padding-top: 50px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }
  &__sort {

  }
  &__title {
    margin-bottom: 30px;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
