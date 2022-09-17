<template>
  <h1>Blog users</h1>
  <div class="usersContainer">
    <ol class="userBox">
      <!-- <div class="userBox" > -->
      <User
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        @click="goToPerson(user.id)"
      />
      <!-- </div> -->
    </ol>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import User from "../components/User.vue";
export default {
  name: "users-page",
  components: {
    User,
  },
  setup() {
    const router = useRouter();
    const users = ref({});
    getUsers(users);
    function getUsers(output) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => (output.value = result));
    }

    function goToPerson(id) {
      router.push("/user/" + id);
    }
    return { users, goToPerson };
  },
};
</script>

<style>
.userBox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.usersContainer {
  display: block;
  width: 1140px;
  margin: 0 auto;
}
</style>
