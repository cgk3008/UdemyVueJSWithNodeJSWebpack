<!--PARENT COMPONENT-->


<template>
  <!--can only return on div, can have multiple divs in the one overall div-->
  <div>
    <app-header></app-header>

    <div class="container">
      <compUserProfile>
        :userName="name"
        :userLastName="lastname"
        :userAge="age"
        :userParents="parents"

        <!--using below to capture the $emit event inert Profile.vue file under methods-->
        :@updateName="name = $event"
        :updateLastName="updateLastName"

      </compUserProfile>

      <compFriends></compFriends>

      <compAbilities>
        <ul slot="main-ab">

          <!--whatever we put here could be rendered inside of the actual component! Abilities.vue -->
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>



          <li v-for="(ab, index) in abilities" : key="index">
            {{ ab }}

          </li>
        </ul>
        <div slot="notes">
          <p>The user also knows PHP</p>
        </div>
        <div>
          <a href="#">See more about user</a>
        </div>

        <div :slot="slotName">Other content</div>
      </compAbilities>
    </div>

    <!--<div class="container">
      <div>  </div>
    </div>-->
  
    <!--<app-footer/>-->
    <compFooter/>
  </div>
</template>
<script>

  //for the import below we can use whatever name for 

  import compFooter from './Components/Header_footer/Footer.vue';
  import compUserProfile from './Components/User/Profile.vue';
  import compFriends from './Components/User/Friends.vue';
  import compAbilities from './Components/User/Abilities.vue';

  export default {

    //can't just return data, it must be a function () and have a return line
    data() {

      return {
        name: "Francis",
        lastname="Jones",
        age: 25,
        parents: {
          mother: "Martha",
          father: "Mario",
        },
        abilities: ['HTML', 'CSS', 'JS'],
        slotName:'',
      }
    },
    methods: {
      updateLastName(value) {
        this.lastname = value
      }
    },
    
    //need to add component code below so that within the div above the footer can be displayed
    //the compFooter is local based on setup, good to use for specific files with different components from rest of application!
    components: {
      //'app-footer':Footer
      compFooter,
      compUserProfile,
      compFriends,
      compAbilities,

    },
    created() {
      setTimeout(() => {
        this.slotName = 'other'
      }, 3000)
    },


  }

</script>

<style>

  /*global tag thead "div" below*/
  /*div {
    color: red;
  }*/

  body {
    padding: 0;
    margin:0;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    min-height: 84vh;
    box-sizing: border-box;
    padding:20px;
  }
</style>
