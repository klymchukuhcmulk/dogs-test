<template>
  <div class="badge">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Badge'
}
</script>

<style lang="scss">
.badge {
  padding: 5px 10px;
  background-color: #e38504;
  border-radius: 15px;
}
</style>
