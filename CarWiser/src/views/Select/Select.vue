<template>
  <div class="shopping">
    <header class="search flex items-center text-sm mt-4 mx-4 bg-gray-200 rounded-full shadow-md">
      <!-- 搜索框 -->
      <van-search
        v-model="searchField"
        placeholder="请输入关键词"
        clearable
        shape="round"
        class="w-full rounded-full bg-opacity-50 ml-1"
      />
      <!-- 地点选择 -->
      <div class="place font-bold text-lg font-serif ml-2" >
        <div
          @click="showPicker = true"
          class="flex items-center w-24 justify-center"
        >
          <span class="place">{{ fieldValue }}</span>
          <van-icon name="arrow-down" />
        </div>

        <van-popup v-model:show="showPicker" round position="bottom">
          <van-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </div>

      
    </header>

    <div class="my-3">
      <SelectCard />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SelectCard from '../../components/Select/SelectCard.vue';

const columns = [
  { text: "北京", value: "1" },
  { text: "杭州", value: "2" },
  { text: "厦门", value: "3" },
  { text: "上海", value: "4" },
  { text: "广州", value: "5" },
  { text: "深圳", value: "6" },
];
const fieldValue = ref(columns[0].text);
const showPicker = ref(false);
const action = ref('1');
const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].text;
  action.value = selectedOptions[0].value;
  
};
</script>

