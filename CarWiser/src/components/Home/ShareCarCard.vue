<template>
    <div class="container px-6 h-full my-3">
      <wc-waterfall :gap="20" :cols="2">
        <div
          class="card border rounded-lg shadow-lg"
          v-for="(item) in items"
          :key="item.title"
        >
        <div class="relative">
          <img v-lazy="item.img" alt="" class="rounded-lg w-full" />
          <van-icon 
            name="play-circle" 
            class="absolute top-2 right-2 text-white text-3xl z-10"  
          />
        </div>
          <div class="text p-4">
            <p class="text-[0.8rem] mb-1 font-bold font-mono">{{ item.title }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center mr-2">
                <img
                  src="https://ss2.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4094158369,1913718500&fm=253&gp=0.jpg"
                  alt=""
                  class="h-6 w-6 rounded-full mr-2"
                />
                <div class="text-[0.7rem] text-gray-400 truncate max-w-[100px]">
                  {{ item.nickName }}
                </div>
              </div>
              <div class="flex items-center">
                <van-icon name="like-o" />
                <div class="text-[0.7rem] text-gray-400 ml-2">
                  {{ item.loveNum }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </wc-waterfall>
      <van-back-top bottom="80px"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { ShareCarItem } from "../../types/Home";
  
  // 接口定义类型约束
  interface Props {
    items: ShareCarItem[];
  }
  
  // 接收父组件传递的数据
  defineProps<Props>();
  </script>
  
  <style scoped>
  .container {
    grid-template-rows: masonry;
  }
  </style>