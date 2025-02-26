<template>
    <van-tabbar v-model="active" class="shadow-black shadow-2xl opacity-90">

      <van-tabbar-item icon="smile-comment" to="/assistant">AI</van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="eye" to="/shopping">选车</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
      
    </van-tabbar>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const active = ref<number>(1);


  </script>
  
  <style scoped>
  </style>