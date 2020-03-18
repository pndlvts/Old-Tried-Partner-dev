<template>
    <a v-bind:href="link" class="btn">{{text}}</a>
</template>

<style lang="scss">
    @import "../assets/styles/helpers/_gui";
</style>

<script scoped>
export default {
  name: 'phoneButton',
  props: {
    text: String,
    link: String
  }
}
</script>

