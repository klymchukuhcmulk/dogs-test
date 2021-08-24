import { useStore } from 'vuex'

export const useActions = (moduleName = '') => {
  const store = useStore()
  const actionsFunc = {}
  const actionsKeys = Object
    .keys(store._actions)
    .filter(el => el.startsWith(moduleName))
  for (let i = 0; i < actionsKeys.length; i++) {
    const actionName = actionsKeys[i].replace(moduleName + '/', '')
    actionsFunc[actionName] = async (payload) => await store.dispatch(actionsKeys[i], payload)
  }
  return actionsFunc
}
