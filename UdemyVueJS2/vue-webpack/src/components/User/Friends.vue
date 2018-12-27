<tempalte>
  <div class="user_friends">
    <h2>User friends:</h2>
    <ul>
      <li v-for="(friend, index) in friends" :key="index">
        {{ friend }}
      </li>

    </ul>
    

    </div>

</tempalte>

<script>

  import { bus } from '../../main.js';

  export default {
    data() {
      return {
        friends:['Ronnie','Martia']
      }
    },

    //probably won't make an event like this ('bus' with addFriend functions) for evey input and every component, it would be a lot of work!!!
    created() {
      bus.$on('addFriend', (value) => {
        this.freinds.push(value)
      })
    },
  }
</script>

<style>

  .user_friends {
    border: 1px solid #2196F3;
    padding: 10px 20px;
  }
</style>
