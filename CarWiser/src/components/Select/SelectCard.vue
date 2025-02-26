<template>
    <div>
        <van-tabs v-model:active="active">
            <van-tab :title="tab.title" v-for="(tab, tabIndex) in processedTabs" :key="tabIndex">
                <van-index-bar>
                    <!-- 遍历每个tab的groups -->
                    <template v-for="(group, groupIndex) in tab.groups" :key="groupIndex">
                        <van-index-anchor :index="group.index" />
                        <van-cell v-for="(item, itemIndex) in group.items" :key="itemIndex" :title="item.name">
                            <!-- 插入图片，并使用Tailwind CSS进行样式设置以确保等比例缩放 -->
                            <template #icon>
                                <img :src="item.img" class="w-6 h-auto object-contain mr-2" v-if="item.img"/>
                            </template>
                        </van-cell>
                    </template>
                </van-index-bar>
            </van-tab>
        </van-tabs>
        <van-back-top  bottom="80px" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSelectStore } from '../../stores/SelectStore'; 
import { toRefs } from 'vue';

// 初始化激活的Tab索引
const active = ref(0);

// 使用Pinia store
const myStore = useSelectStore();
const { topBarState } = toRefs(myStore);

// 预处理数据，将具有相同index的项目归类在一起
const processedTabs = computed(() => {
    return topBarState.value.map(tab => {
        const groupedItems = {};
        tab.items.forEach(item => {
            if (!groupedItems[item.index]) {
                groupedItems[item.index] = [];
            }
            groupedItems[item.index].push(item);
        });

        return {
            title: tab.title,
            groups: Object.entries(groupedItems).map(([index, items]) => ({
                index,
                items
            }))
        };
    });
});
</script>