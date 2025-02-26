<template>
    <div class="home">
      <!-- 搜索区域 -->
      <div class="search flex items-center px-5 text-sm py-4 bg-gray-100">
        <!-- 标题 -->
        <div
          class="title font-bold text-gray-900 text-lg w-[6rem] text-center font-serif mr-5 bg-gray-200 rounded-full bg-opacity-50"
        >
          CarWiser识车君
        </div>
  
        <!-- 搜索框 -->
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
          class="flex-grow"
        />
  
        <!-- 图标 -->
        <van-icon name="scan" class="ml-2" size="30px"/>
      </div>
       <!-- 主体 -->
    <main class="flex flex-col space-y-4">
      <!-- 导航栏 -->
      <header
        class="w-[calc(100vw-2rem)] min-h-18 rounded-2xl p-2 shadow-md self-center bg-white bg-opacity-50"
      >
        <section class="topbar flex justify-around my-[0.5rem]">
          <div
            class="topbar-item flex flex-col items-center"
            v-for="item in topBarState"
            :key="item.title"
          >
            <div class="topbar-item__icon">
              <van-icon :name="item.icon" size="2rem" />
            </div>
            <div class="topbar-item__text text-xs font-bold">{{ item.title }}</div>
          </div>
        </section>
      </header>
      <!-- 旅游推荐 -->
      <section>
        <div class="flex justify-between items-center px-6 text-sm text-black">
          <h2 class="title font-bold text-lg">热门车型</h2>
          <span class="flex flex-row items-center justify-center text-xs ">
            查看更多
            <van-icon name="arrow" size="1rem" class="ml-1" />
          </span>
        </div>
        <PopularCarsCard :items="PopularCars" />
      </section>
      <!-- 旅游分享 -->
      <section>
        <div class="flex justify-between items-center px-6 text-sm text-black">
          <h2 class="title font-bold text-lg">热门推荐</h2>
        </div>
        <ShareCarCard :items="ShareCar" />
      </section>
    </main>
    </div>
  </template>

<script lang="ts" setup>
import PopularCarsCard from "../../components/Home/PopularCarsCard.vue";
import ShareCarCard from "../../components/Home/ShareCarCard.vue";
//数据？
// pinia 数据管理 + 组件显式
import { ref } from "vue";
import { toRefs } from "vue";
import { useHomeStore } from "../../stores/HomeStore";

const value = ref("");
const homeStore = useHomeStore();
const { topBarState, PopularCars, ShareCar } = toRefs(homeStore);
</script>
