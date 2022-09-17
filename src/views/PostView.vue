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
import { fetchData } from "../options";
import { capitalizeFirsLetter } from "../options";

export default {
  name: "post-page",
  components: {
    CommentVue,
  },
  setup() {
    const route = useRoute();
    const postID = route.params.id;
    const POST_PATH = "https://jsonplaceholder.typicode.com/posts/" + postID;
    const COMMENT_PATH =
      "https://jsonplaceholder.typicode.com/posts/" + postID + "/comments";
    const postData = ref({});
    const postComments = ref({});
    getData(postData);
    fetchData(COMMENT_PATH, postComments);

    async function getData(postData) {
      await fetchData(POST_PATH, postData);
      postData.value.title = capitalizeFirsLetter(postData.value.title);
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
