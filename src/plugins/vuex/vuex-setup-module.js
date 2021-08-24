import { onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

export const useModule = (name, module) => {
  const store = useStore()

  if (!store.hasModule(name)) {
    store.registerModule(name, module)
  }
  onBeforeUnmount(() => {
    if (store.hasModule(name)) {
      store.unregisterModule(name)
    }
  })
}
