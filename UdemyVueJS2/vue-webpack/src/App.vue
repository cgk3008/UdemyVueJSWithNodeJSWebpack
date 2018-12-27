<template>
  <!--can only return on div, can have multiple divs in the one overall div-->
  <div>
    <app-header></app-header>

    {{name  }} {{ lastname }}

    <compUserProfile
:userName="name"
                     :userLastName="lastname"
                     :userAge="age"
                     :userParents="parents"

                     <!--using below to capture the $emit event inert Profile.vue file under methods-->
                     @updateName="name = $event"
    :updateLastName="updateLastName"
                     />



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
        }
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
      compUserProfile
    }


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
