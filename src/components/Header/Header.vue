<template>
  <header class="header">
    <DogLogo
        class="header__logo"
        @click="goToHome"
    />
    <Button
        class="header__selected-breeds"
        @click="goToFavorites"
    >
      Selected Breeds
    </Button>
  </header>
</template>

<script>
import DogLogo from '@/components/Header/DogLogo'
import Button from '@/components/UIKit/Button'
import { useRouter } from 'vue-router'
import { ROUTES_NAMES } from '@/router/routesNames'

export default {
  name: 'Header',
  components: {
    Button,
    DogLogo
  },
  setup () {
    const router = useRouter()
    const goToFavorites = () => {
      router.push({
        name: ROUTES_NAMES.FAVORITES
      })
    }
    const goToHome = () => {
      router.push({
        name: ROUTES_NAMES.HOME
      })
    }

    return {
      goToHome,
      goToFavorites
    }
  }
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  height: 100px;
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-shadow: 0 0 15px 0 black;

  &__selected-breeds {
    font-size: 17px;
  }
  &__logo {
    cursor: pointer;
  }
}
</style>
