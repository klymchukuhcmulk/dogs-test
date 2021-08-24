<template>
  <div class="app">
    <Header class="app__header" />
    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { useModule, useMutations } from '@/plugins/vuex'
import dogsModule from '@/store/modules/dogs'
import { DOGS } from '@/store/modulesNames'
import Header from '@/components/Header/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  setup () {
    useModule(DOGS, dogsModule)
    const {
      SET_FAVORITES: setFavorites
    } = useMutations(DOGS)

    const getFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem('breedFavorites')) || []
      setFavorites(favorites)
    }

    getFavorites()
  }
}
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  &__main {
    padding-top: 100px;
  }
}
</style>
