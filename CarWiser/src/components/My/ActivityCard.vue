<template>
    <div class="container px-6 h-full my-3">
      <wc-waterfall :cols="1">
        <div
          class="card border rounded-lg shadow-lg"
          v-for="(item) in items"
          :key="item.title"
        >
        <div class="relative">
          <img v-lazy="item.img" alt="" class="rounded-lg w-full" />
        </div>
          <div class="text p-4">
            <p class="text-[1rem] mb-1 font-bold font-mono">{{ item.title }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center mr-2">
                <div class="text-[1rem] text-gray-400 truncate max-w-[200px]">
                  {{ item.time }}
                </div>
              </div>
              <div class="flex items-center">
                <van-button type="primary" size="small">点击参加</van-button>
              </div>
            </div>
          </div>
        </div>
      </wc-waterfall>
      
    </div>
  </template>
  
  <script setup lang="ts">
 import type { ActivityItem } from '../../types/My';
  
  // 接口定义类型约束
  interface Props {
    items: ActivityItem[];
  }
  
  // 接收父组件传递的数据
  defineProps<Props>();
  </script>
  
  <style scoped>
  .container {
    grid-template-rows: masonry;
  }
  </style>