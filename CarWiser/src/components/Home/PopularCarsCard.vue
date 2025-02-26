<template>
    <van-swipe :autoplay="2500" lazy-render relative class="mx-5 my-3 scrollbar-hide rounded-2xl ring-offset-2 shadow-white shadow-2xl border border-white">
      <van-swipe-item v-for="(item, index) in items" :key="index">
        <img :src="item.img" class="w-full h-48 center-fit" />
        <div
          class="item-info text-white p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
        >
          <p class="text-[2.5rem] text-center font-bold whitespace-normal">{{ item.area }}</p>
          <p class="text-[1.5rem] text-center text-opacity-75 whitespace-normal">{{ item.type }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </template>
  
  <script setup lang="ts">
  
  import type { PopularCarsItem } from "../../types/Home";
  
  //接口定义类型约束
  interface Props {
    items: PopularCarsItem[];
  }
  //接收父组件传递的数据
  defineProps<Props>();
  </script>

  