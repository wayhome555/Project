<template>
    <div class="mine h-100rem">
      <!-- 背景 -->
      <div
        class="minePage container h-[8rem] relative shadow-md
         bg-[url('https://img.17sucai.com/upload/188920/2014-09-17/bac77d6f3191cce629fbdcb3520b5e7e.png?x-oss-process=style/big')] 
         bg-cover bg-center"
      >
        <!-- 左上角图标 -->
        <div class="absolute top-0 left-0 m-2">
          <van-icon name="more-o" size="1.75rem"/>
        </div>
        
        <!-- 右上角图标 -->
        <div class="absolute top-0 right-0 m-2">
          <van-icon name="setting-o" size="1.75rem"/>
        </div>
        <!-- 头像 -->
        <img
          src="https://cdn.wantuju.com/pngsucai/imgRegular/20210801/930afc7f-97fe-47cd-8ec5-be332f7106d0%20_49686_wantuju.jpg"
          alt=""
          class="rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400 absolute bottom-0 left-5 transform translate-y-[3rem]"
        />
      </div>
      <!-- 页面主体 -->
      <main class="mine-main">
        <!-- 登录注册 -->
        <div class="login-register container text-right px-5 pt-2">
          <van-button round type="success" color="#00BFFF" class="font-bold"
            >&nbsp;&nbsp;登录&nbsp;&nbsp;</van-button
          >
        </div>
        <!-- 菜单栏 -->
        <section class="topbar flex justify-around my-[1rem]">
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

        <section class="topbar flex justify-around my-[1rem]">
          <div
            class="topbar-item flex flex-col items-center"
            v-for="item in middleBarState"
            :key="item.title"
          >
            <div class="topbar-item__icon">
              <van-icon :name="item.icon" size="2rem" />
            </div>
            <div class="topbar-item__text text-xs font-bold">{{ item.title }}</div>
          </div>
        </section>
        <!-- 发布记录 -->
        <div class="flex justify-between items-center px-6 text-sm text-black">
          <h2 class="title font-bold text-lg">精彩活动</h2>
        </div>
        <ActivityCard :items="ActivityState" />
      </main>
    </div>
  </template>
  

  <script setup>
  import { ref } from "vue";
  import { toRefs } from "vue";
  import { useMyStore } from "../../stores/MyStore"
  import ActivityCard from "../../components/My/ActivityCard.vue";
  
  const myStore = useMyStore();
  const { topBarState,middleBarState ,ActivityState} = toRefs(myStore);
  </script>
  
  
  <style lang="scss" scoped></style>
  