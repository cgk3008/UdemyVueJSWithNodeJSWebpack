<template>
  <div class="container">
    <div class="user-profile">
      <h3> User information: </h3>
      <ul>
        <li> <span>Name:</span> {{ userName }}</li>
        <li> <span>Last Name:</span> {{ userLastName }}</li>
        <li> <span>Age:</span> {{ userAge }}</li>
      </ul>
      <h3>Parents</h3>
      <ul>
        <li v-for="(key, value, index) in userParents" : accesskey="index">
          <span>{{ key }}</span>
          {{ value }}
      </ul>
    </div>
    <button on-click="updateName"> update name</button>
    <button on-click="updateLastName()"> update last name</button>
    hey
  </div>
</template>

<script>
  export default {

    //can use object or an array for the props
    //props: ['name', 'lastname'],

    props: {
      userName: String,
      userLastName: String,
      age: Number,
      userParents: Object,
      updateLastName: Function,
    },


    methods: {
      updateName() {
        //this.userName = "Francis Dumbledore"
        //"$emit triggers an action to do something
        this.$emit('updateName', 'Francis Steve')
      }
    },

  }
</script>

<style>

  span {
    font-weight: 800
  }

  .user_profile {
    border:1px solid #2196F3;
    padding: 10px 20px;
  }
</style>
