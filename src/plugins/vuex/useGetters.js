import { useStore } from 'vuex'
import { computed } from 'vue'

export const useGetters = (moduleName = '') => {
  const store = useStore()
  const getters = {}
  const gettersKeys = Object
    .keys(store.getters)
    .filter(el => el.startsWith(moduleName))
  for (let i = 0; i < gettersKeys.length; i++) {
    const getterName = gettersKeys[i].replace(moduleName + '/', '')
    getters[getterName] = computed(() => store.getters[gettersKeys[i]])
  }
  return getters
}
