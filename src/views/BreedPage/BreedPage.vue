<template>
  <div v-if="currentBreed?.key" class="breed-page">
    <div class="breed-page__images">
      <div
          v-for="(item, i) in currentBreed.images"
          :key="item"
          class="breed-page__images__item"
          :class="'col-' + i"
          :style="{
            backgroundImage: 'url(\'' + item + '\')'
          }"
      />
    </div>
    <h1 class="breed-page__title">
      {{ currentBreed.key }}
    </h1>
    <div class="breed-page__sub-breeds">
      <Badge
          v-for="item in currentBreed.breedsList"
          :key="item"
          class="breed-page__sub-breeds__item"
      >{{ item }}</Badge>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useActions, useGetters } from '@/plugins/vuex'
import { DOGS } from '@/store/modulesNames'
import Badge from '@/components/UIKit/Badge'

export default {
  name: 'BreedPage',
  components: { Badge },
  setup () {
    const route = useRoute()
    const {
      getCurrentBreed: currentBreed
    } = useGetters(DOGS)
    const {
      fetchCurrentBreed
    } = useActions(DOGS)

    fetchCurrentBreed(route.params.key)

    return {
      currentBreed
    }
  }
}
</script>

<style lang="scss">
.breed-page {
  width: 70%;
  margin: 0 auto;

  &__title {
    margin-bottom: 30px;
    margin-top: 20px;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
  &__images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1.5fr 1fr;
    height: 600px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;

    .col-1 { grid-area: 1 / 1 / 2 / 3; }
    .col-2 { grid-area: 1 / 3 / 2 / 4; }
    .col-3 { grid-area: 2 / 1 / 3 / 2; }
    .col-4 { grid-area: 2 / 2 / 3 / 3; }
    .col-5 { grid-area: 2 / 3 / 3 / 4; }

    &__item {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  &__sub-breeds {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &__item {
      margin: 5px;
      text-transform: uppercase;
    }
  }
}
</style>
