import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
    ActivityItem,
   MyTopBarItem
} from "../types/My";

export const useMyStore = defineStore('my', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<MyTopBarItem[]>([
        {
            title: "创作",
            icon: "edit",
        },
        {
            title: "收藏",
            icon: "star-o",
        },
        {
            title: "消息",
            icon: "chat-o",
        },
        {
            title: "订单",
            icon: "description-o",
        }
    ])
    const middleBarState = ref<MyTopBarItem[]>([
        {
            title: "历史",
            icon: "clock-o",
        },
        {
            title: "权益",
            icon: "vip-card-o",
        },
        {
            title: "钱包",
            icon: "pending-payment",
        },
        {
            title: "问卷",
            icon: "completed-o",
        },
    ])
    const ActivityState = ref<ActivityItem[]>([
        {
            title: "过年直播好物送不停，快点击参与吧",
            img:"https://tse1-mm.cn.bing.net/th/id/OIP-C.EkzE2NdGm0rFB4kxpI67KAAAAA?rs=1&pid=ImgDetMain",
            time: "2025.2.1-2025.2.20",
        },
        {
            title: "约惠春风礼，“豹”团放肆GO",
            img:"https://img.zcool.cn/community/011f975ca41129a801214168b637c2.jpg",
            time: "2025.2.8-2025.2.15",
        },
    ])
    return {
        topBarState,
        middleBarState,
        ActivityState
    }

})