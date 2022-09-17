<template>
  <h1>person info {{ personID }}</h1>
  <div v-for="(post, index) in personPosts" :key="index">
    <Post :postData="post" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Post from "@/components/Post.vue";
export default {
  name: "person-page",
  components: {
    Post,
  },
  setup() {
    const route = useRoute();
    const personID = route.params.id;

    const personPosts = ref({});
    getUserPosts(personID, personPosts);
    function getUserPosts(personID, output) {
      fetch("https://jsonplaceholder.typicode.com/posts?userId=" + personID)
        .then((response) => response.json())
        .then((result) => (output.value = result));
    }

    return {
      personID,
      personPosts,
    };
  },
};
</script>

<style></style>
