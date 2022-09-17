<template>
  <h2>Пользователь {{ personInfo.username }}</h2>
  <div class="personContainer">
    <div class="personWrapper">
      <div class="personBackground"></div>
      <div class="personInfo">
        <h4 class="personalInfo_name">{{ personInfo.name }}</h4>
        <div class="personAdditionalInfo">
          <div>Email: {{ personInfo.email }}</div>
          <div>Website: {{ personInfo.website }}</div>
        </div>
      </div>
    </div>
  </div>
  <h2>Посты:</h2>
  <div class="posts_container">
    <Post v-for="(post, index) in personPosts" :key="index" :postData="post" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Post from "@/components/Post.vue";
import { fetchData } from "../options";

export default {
  name: "person-page",
  components: {
    Post,
  },
  setup() {
    const route = useRoute();
    const personID = route.params.id;
    const personPosts = ref({});
    const personInfo = ref({});
    const PATH_TO_USER_POSTS =
      "https://jsonplaceholder.typicode.com/posts?userId=" + personID;
    const PATH_TO_USER =
      "https://jsonplaceholder.typicode.com/users/" + personID;

    fetchData(PATH_TO_USER_POSTS, personPosts);
    fetchData(PATH_TO_USER, personInfo);

    return {
      personID,
      personPosts,
      personInfo,
    };
  },
};
</script>

<style>
.personContainer {
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: center;
}
.personWrapper {
  width: 550px;
  display: flex;
  border-radius: 15px;
  overflow: hidden;
}
.personBackground {
  width: 150px;
  height: 150px;
  background-color: rgb(221, 201, 194);
}
.personAdditionalInfo {
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.personInfo {
  padding: 0 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(218, 232, 233);
}
@media screen and (max-width: 950px) {
  .personAdditionalInfo {
    flex-direction: column;
  }
}
@media screen and (max-width: 550px) {
  .personWrapper {
    width: 95%;
  }
  .personalInfo_name {
    font-size: 14px;
  }
}
</style>
