<template>
  <span
      ref="target"
      class="infinity-trigger"
  />
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue'

export default {
  name: 'InfinityTrigger',
  emits: ['enter'],
  setup (_, { emit }) {
    const target = ref()
    const observer = ref()

    onMounted(() => {
      observer.value = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (isVisible(entry)) {
            onTrigger(entry)
          }
        })
      })

      observer.value.observe(target.value)
    })
    onBeforeUnmount(() => {
      observer.value.disconnect()
    })

    const isVisible = entry => {
      return entry.intersectionRatio > 0
    }
    const onTrigger = e => {
      emit('enter', e)
    }

    return {
      target
    }
  }
}
</script>

<style lang="scss">
.infinity-trigger {
  display: block;
  width: 100%;
  height: 2px;
}
</style>
