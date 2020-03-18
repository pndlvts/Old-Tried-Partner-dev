<template>
    <a v-bind:href="btnLink" class="btn">{{btnText}}</a>
</template>

<style lang="scss">
    @import "../assets/styles/helpers/_gui";
    .btn, .btn:visited, .btn:active{
      color: $company;
      font-weight: normal;
      padding: 5px;
      border: 1px solid $company;
      transition: .5s;
    }
    .btn:hover{
      color: $white;
      background-color: $company;
      transition: .5s;
    }
</style>

<script scoped>
export default {
  name: 'btnComponent',
  props: {
    btnText: String,
    btnLink: String
  }
}
</script>

