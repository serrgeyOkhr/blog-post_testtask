<template>
  <div class="postContainer">
    <h2>{{ postData.title }}</h2>
    <p>{{ postData.body }}</p>
  </div>
  <hr />
  <div class="commentsContainer">
    <div class="comment" v-for="(comment, index) in postComments" :key="index">
      <CommentVue :comment="comment" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import CommentVue from "@/components/Comment.vue";
export default {
  name: "post-page",
  components: {
    CommentVue,
  },
  setup() {
    const route = useRoute();
    const postID = route.params.id;
    const postData = ref({});
    const postComments = ref({});

    getPostData(postID, postData);
    getPostComments(postID, postComments);

    function getPostData(id, output) {
      const POST_PATH = "https://jsonplaceholder.typicode.com/posts/" + id;
      fetch(POST_PATH)
        .then((response) => response.json())
        .then((result) => (output.value = result));
    }
    function getPostComments(id, output) {
      const POST_PATH =
        "https://jsonplaceholder.typicode.com/posts/" + id + "/comments";
      fetch(POST_PATH)
        .then((response) => response.json())
        .then((result) => (output.value = result));
    }

    return {
      postData,
      postComments,
    };
  },
};
</script>

<style>
.commentsContainer {
  border-radius: 10px;
}
.comment {
  padding: 5px;
  text-align: left;
  border: 1px solid rgb(200, 200, 200);
  margin: 5px 0;
}
</style>
