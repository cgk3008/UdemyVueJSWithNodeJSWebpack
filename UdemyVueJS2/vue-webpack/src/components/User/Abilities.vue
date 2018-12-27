<!--Everytime we add a component such as this file, we need to render it in the App.vue file-->

<template>
  <div class="user_profile">
    <h3>User Profile:</h3>
    <!--add the slot below to render-->
    <div>
      <slot name="main_ab"></slot>
    </div>
    <div>
      <slot name="notes"></slot>
    </div>
    <hr />
    <slot></slot>
    <hr />

    <!--If you don't have a slot name in the App.vue, you will still get the content between the slot sections!   "Loading...."-->
    <slot name="other"> Loading....</slot>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        abilities: ['HTML', 'CSS', 'JS']
      }
    },
  }

</script>

<style scoped>

  li {
    color: red;
  }

  .user_profile {
    border: 1px solid #2196F3;
    padding: 10px 20px;
  }
</style>
