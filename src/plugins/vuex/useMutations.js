import { useStore } from 'vuex'

export const useMutations = (moduleName = '') => {
  const store = useStore()
  const mutationsFunc = {}
  const actionsKeys = Object
    .keys(store._mutations)
    .filter(el => el.startsWith(moduleName))
  for (let i = 0; i < actionsKeys.length; i++) {
    const actionName = actionsKeys[i].replace(moduleName + '/', '')
    mutationsFunc[actionName] = (payload) => store.commit(actionsKeys[i], payload)
  }
  return mutationsFunc
}
