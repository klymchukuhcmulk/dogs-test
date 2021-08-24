<template>
  <div class="home-page">
    <div class="home-page__header">
      <h1 class="home-page__title">Breed List</h1>
      <Button
          @click="onSortArray"
          class="home-page__sort"
      >
        Alphabet Sort
      </Button>
    </div>
    <BreedsGrid
        :breeds-list="breedsList"
        @breed-click="onBreedClick"
        @load-more="loadMore"
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
import { useRouter } from 'vue-router'
import { ROUTES_NAMES } from '@/router/routesNames'

export default {
  name: 'Home',
  components: {
    Button,
    BreedsGrid
  },
  setup () {
    const router = useRouter()
    const {
      fetchBreedsList,
      fetchBreedsListInfo
    } = useActions(DOGS)
    const {
      SET_OFFSET: setOffset
    } = useMutations(DOGS)
    const {
      getBreedsList,
      getOffset: offset
    } = useGetters(DOGS)

    const isSorted = ref(false)

    const breedsList = computed(() => {
      return isSorted.value ? alphabetSortArray(getBreedsList.value) : getBreedsList.value
    })

    const fetchData = async () => {
      await fetchBreedsList()
      await fetchBreedsListInfo()
    }
    const loadMore = () => {
      setOffset(offset.value + 20)
      fetchData()
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

    return {
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
.home-page {
  height: 100%;
  overflow: auto;
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
