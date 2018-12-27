import Vue from 'vue';
import App from '.App.vue';

import Header from './Components/Header_footer/Header.vue';



//this will be global based on current setup, good to use for nav bar and parts of view which will not change for entire application!
Vue.component('app-header',Header)

//https://www.udemy.com/the-complete-vue-js-course/learn/v4/t/lecture/12014742?start=0



//https://www.udemy.com/the-complete-vue-js-course/learn/v4/t/lecture/12014766?start=0
//update BUS

export const bus = new Vue();



//https://www.udemy.com/the-complete-vue-js-course/learn/v4/t/lecture/12014782?start=0
//Using Slots, Slots are for passing content not passing props.


//original Vue instance
new Vue({
  el: '#app',
  render: h => h(App)
})
