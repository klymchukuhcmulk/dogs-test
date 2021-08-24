<template>
  <div class="no-breeds">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'NoBreeds',
  props: {
    text: {
      type: String,
      default: 'NO BREEDS HERE'
    }
  }
}
</script>

<style lang="scss">
.no-breeds {
  font-size: 45px;
  margin-top: 100px;
  text-align: center;
  width: 100%;
  color: #ff5757;
}
</style>
