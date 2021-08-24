<template>
  <div class="loader-card">
    <span class="loader-card__icon" />
  </div>
</template>

<script>
export default {
  name: 'LoaderCard'
}
</script>

<style lang="scss">
.loader-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 black;

  &__icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 10px solid transparent;
    border-top: 10px solid #e09a1c;
    border-bottom: 10px solid #e09a1c;
    animation: rotate 1.8s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
