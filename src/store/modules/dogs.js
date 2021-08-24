import Dogs from '@/models/Dogs'
import handleError from '@/utils/handleError'
import saveFavorites from '@/utils/saveFavorites'
import { shuffleArray } from '@/utils/sortArray'

export default {
  namespaced: true,
  state: {
    offset: 0,
    breedsList: [],
    favorites: [],
    currentBreed: {
      key: '',
      breedsList: [],
      images: []
    },
    error: null
  },
  mutations: {
    SET_BREEDS_LIST (state, payload) {
      state.breedsList = [
        ...state.breedsList,
        ...payload
      ]
    },
    SET_BREED (state, payload) {
      const index = state.breedsList.findIndex(item => item.key === payload.key)

      if (index !== -1) {
        state.breedsList[index] = payload
        return
      }
      state.breedsList.push(payload)
    },
    SET_CURRENT_BREED (state, payload) {
      state.currentBreed = payload
    },
    SET_ERROR (state, payload) {
      state.error = payload
    },
    SET_FAVORITES (state, payload) {
      state.favorites = payload
      saveFavorites(state.favorites)
    },
    SET_FAVORITE (state, payload) {
      state.favorites.push(payload)
      saveFavorites(state.favorites)
    },
    REMOVE_FAVORITE (state, payload) {
      const index = state.favorites.findIndex(el => el === payload)

      if (index !== -1) {
        state.favorites.splice(index, 1)
        saveFavorites(state.favorites)
      }
    },
    SET_OFFSET (state, payload) {
      state.offset = payload
    }
  },
  actions: {
    async fetchBreedsList ({ commit, getters }) {
      try {
        const offset = getters.getOffset
        const breedsList = getters.getBreedsList
        const keysList = (await Dogs.getBreeds()).data.message

        const list = shuffleArray(
          Object
            .keys(keysList)
            .slice(breedsList.length, offset)
        )
          .filter(item => !breedsList.find(breed => breed.key === item))
          .map(item => ({
            key: item,
            breedsList: keysList[item],
            image: ''
          }))

        commit('SET_BREEDS_LIST', list)
      } catch (e) {
        handleError(e, commit)
      }
    },
    async fetchFavorites ({ dispatch, getters }) {
      const favorites = getters.getFavorites

      await Promise.all(favorites.map(async item => {
        await dispatch('fetchBreedInfo', item)
      }))
    },
    async fetchBreedInfo ({ commit, dispatch, getters }, payload) {
      const breedInfo = getters.getBreedByKey(payload) || {
        key: payload
      }
      try {
        if (!breedInfo.breedsList) {
          breedInfo.breedsList = await dispatch('fetchSubBreeds', breedInfo.key)
        }
        if (!breedInfo.image) {
          breedInfo.image = await dispatch('fetchBreedImage', breedInfo.key)
        }
        commit('SET_BREED', breedInfo)
      } catch (e) {
        handleError(e, commit)
      }
    },
    fetchBreedsListInfo ({ dispatch, getters }) {
      const breedsList = getters
        .getBreedsList

      breedsList.forEach(breed => {
        dispatch('fetchBreedInfo', breed.key)
      })
    },
    async fetchBreedImage ({ commit, getters }, payload) {
      if (getters.getBreedByKey(payload)?.image) return

      let image = ''
      try {
        image = (await Dogs.getBreedImage(payload))
          .data
          .message
      } catch (e) {
        handleError(e, commit)
        image = require('@/assets/dog.png')
      }
      return image
    },
    async fetchSubBreeds ({ commit, getters }, payload) {
      const breed = getters.getBreedByKey(payload)?.key || payload
      if (breed.breedsList) {
        return
      }
      try {
        return (await Dogs.getSubBreeds(breed)).data.message
      } catch (e) {
        handleError(e, commit)
        throw e
      }
    },
    async fetchCurrentBreed ({ commit, getters, dispatch }, payload) {
      const breed = getters.getBreedByKey(payload)
      const currentBreed = {
        key: payload
      }
      try {
        if (!breed) {
          currentBreed.breedsList = await dispatch('fetchSubBreeds', currentBreed.key)
        } else {
          currentBreed.breedsList = breed.breedsList
        }
        currentBreed.images = (await Dogs.getBreedImages(currentBreed.key, 5)).data.message

        commit('SET_CURRENT_BREED', currentBreed)
      } catch (e) {
        handleError(e, commit)
      }
    }
  },
  getters: {
    getError (state) {
      return state.error
    },
    getCurrentBreed (state) {
      return state.currentBreed
    },
    getFavorites (state) {
      return state.favorites
    },
    getFavoritesBreedsList (state, getters) {
      return getters.getBreedsList.filter(el => {
        return getters.getFavorites.includes(el.key)
      })
    },
    getOffset (state) {
      return state.offset
    },
    getBreedsList (state) {
      return state.breedsList
    },
    getBreedByKey (state) {
      return key => state
        .breedsList
        .find(bread => bread.key === key)
    }
  }
}
