<template>
  <button
      v-bind="$attrs"
      class="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: true,
  name: 'Button'
}
</script>

<style lang="scss">
.button {
  appearance: none;
  border: none;
  background-color: #e09a1d;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #e38504;
  }
}
</style>
