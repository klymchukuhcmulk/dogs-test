<template>
  <div class="breed-card__wrap">
    <div
        class="breed-card"
        :style="{
        '--image': 'url(\'' + breed.image + '\')'
      }"
    >
      <div class="breed-card__info">
        <img
            v-if="!isFavorite"
            src="@/assets/favorite.svg"
            alt="heart"
            class="breed-card__info__img-favorite"
            @click.stop="addFavorite"
        >
        <img
            v-else
            src="@/assets/favorite-selected.svg"
            alt="heart selected"
            class="breed-card__info__img-favorite"
            @click.stop="removeFavorite"
        >
        <p class="breed-card__info__title">{{ breed.key }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useGetters, useMutations } from '@/plugins/vuex'
import { DOGS } from '@/store/modulesNames'

export default {
  name: 'DogCard',
  props: {
    breed: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const {
      getFavorites: favorites
    } = useGetters(DOGS)
    const {
      SET_FAVORITE,
      REMOVE_FAVORITE
    } = useMutations(DOGS)

    const isFavorite = computed(() => {
      return favorites.value.includes(props.breed.key)
    })
    const addFavorite = () => {
      SET_FAVORITE(props.breed.key)
    }
    const removeFavorite = () => {
      REMOVE_FAVORITE(props.breed.key)
    }

    return {
      isFavorite,
      addFavorite,
      removeFavorite
    }
  }
}
</script>

<style lang="scss">
.breed-card {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;

  background-image: var(--image);
  background-position: center;
  background-size: cover;
  transition: transform 200ms linear;
  box-shadow: 0 0 15px 0 black;

  &__info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    background-color: rgba(0,0,0,0.3);
    color: white;
    transition: background-color 200ms linear;

    &__title {
      font-size: 21px;
      font-weight: 500;
      margin-left: 10px;
      margin-bottom: 10px;
    }
    &__img-favorite {
      display: none;
      height: 50px;
      width: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    &:hover {
      background-color: rgba(0,0,0,0.7);

      img {
        display: block;
      }
    }
  }
  &__wrap {
    perspective: 1000px;
  }
  &:hover {
    transform: translateZ(20px);
  }
}
</style>
