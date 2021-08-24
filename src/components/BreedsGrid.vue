<template>
  <div class="breeds-grid">
    <template v-if="breedsList.length || isLoading">
      <BreedCard
          v-for="item in breedsList"
          :key="item.key"
          :breed="item"
          @click="onBreedClick(item)"
      />
      <LoaderCard v-if="isLoading" />
    </template>
    <NoBreeds v-else />
    <InfinityTrigger @enter="onInfinityScroll" />
  </div>
</template>

<script>
import BreedCard from '@/components/BreedCard'
import InfinityTrigger from '@/components/InfinityTrigger'
import LoaderCard from '@/components/UIKit/LoaderCard'
import NoBreeds from '@/components/NoBreeds'

export default {
  name: 'BreedsGrid',
  components: {
    NoBreeds,
    LoaderCard,
    InfinityTrigger,
    BreedCard
  },
  emits: ['breed-click', 'load-more'],
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    breedsList: {
      type: Array,
      require: true
    }
  },
  setup (_, { emit }) {
    const onBreedClick = item => {
      emit('breed-click', item)
    }
    const onInfinityScroll = entry => {
      emit('load-more', entry)
    }

    return {
      onBreedClick,
      onInfinityScroll
    }
  }
}
</script>

<style lang="scss">
.breeds-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1100px;
  perspective: 1000px;

  .breed-card {
    margin: 10px;
  }
}
</style>
