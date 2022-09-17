<template>
  <h1>Пользователи блога</h1>
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
import { fetchData } from "@/options";
export default {
  name: "users-page",
  components: {
    User,
  },
  setup() {
    const router = useRouter();
    const users = ref({});
    const PATH_TO_USERS = "https://jsonplaceholder.typicode.com/users";
    fetchData(PATH_TO_USERS, users);

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
