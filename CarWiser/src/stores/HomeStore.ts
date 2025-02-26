import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
    HomeTopBarItem,
    PopularCarsItem,
    ShareCarItem
} from "../types/Home";

export const useHomeStore = defineStore('home', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<HomeTopBarItem[]>([
        {
            title: "车型大全",
            icon: "logistics",
        },
        {
            title: "排行榜",
            icon: "bar-chart-o",
        },
        {
            title: "买新车",
            icon: "shopping-cart-o",
        },
        {
            title: "买二手车",
            icon: "exchange",
        },
        {
            title: "车友圈",
            icon: "friends-o",
        }
    ])
    
    const PopularCars = ref<PopularCarsItem[]>([

        {
            area: "小米su7",
            type: "130.6w关注",
            img:
                "https://img3.bitautoimg.com/autoalbum/files/20231228/944/202312282546376259594410170_11416986_22.jpg",
        },
        {
            area: "艾瑞泽8",
            type: "128.2w关注",
            img:
                "https://img7.bitautoimg.com/usercenter/autoalbum/files/20231110/793/w1200_yichecar_202311101411958520579306954.jpg.webp",

        },
        {
            area: "迈腾",
            type: "123.3w关注",
            img:
                "https://img6.bitautoimg.com/usercenter/autoalbum/files/20240429/988/w1200_yichecar_20240429702435768698801106.jpg.webp",

        },
        {
            area: "速腾",
            type: "122.6w关注",
            img:
                "https://img5.bitautoimg.com/usercenter/autoalbum/files/20230704/320/w1200_yichecar_202307044371845808332047275.jpg.webp",

        },
        {
            area: "轩逸",
            type: "121.2w关注",
            img:
                "https://img6.bitautoimg.com/usercenter/autoalbum/files/20241015/160/w1200_yichecar_202410159670899412216009223.jpg.webp",

        },
        {
            area: "奥迪A6",
            type: "120.0w关注",
            img:
                "https://img8.bitautoimg.com/usercenter/autoalbum/files/20220728/532/w1200_yichecar_202207283164900371553263728.jpg.webp",

        },
        {
            area: "星越L",
            type: "119.7w关注",
            img:
                "https://img8.bitautoimg.com/usercenter/autoalbum/files/20231110/318/w1200_yichecar_202311101440958628731854915.jpg.webp",
        },
        {
            area: "星瑞",
            type: "119.3w关注",
            img:
                "https://img5.bitautoimg.com/usercenter/autoalbum/files/20240607/419/w1200_yichecar_20240607548772790541920127.jpg.webp",
        },
    ])
    const ShareCar = ref<ShareCarItem[]>([
        {
            nickName: "老陈说车",
            title: "凯迪拉克CT6，我看谁还说老气！",
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.OoKOJ4Mfi4f_4u5xm55mlAHaEK?rs=1&pid=ImgDetMain",
            loveNum: 9865
        },
        {
            nickName: "老王说车",
            title: "第四代嘉华全球MPV车型带来的冲击！",
            img: "https://img.zcool.cn/community/01jaqwfnk7wrugqadlruqs3337.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100",
            loveNum: 4750
        },
        {
            nickName: "小李车评",
            title: "最低配比亚迪，求别喷",
            img: "https://img.zcool.cn/community/01gwxjaybmiydjlm2pubyw3634.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100",

            loveNum: 9899
        },
        {
            nickName: "小张说车",
            title: "美系运动潮流SUV首选",
            img: "https://img.zcool.cn/community/01iazf3gjyu0ypveg7pa1t3733.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100",
            loveNum: 4315
        },
        {
            nickName: "小虎车评",
            title: "带你看看高端国产纯电汽车的魅力",
            img: "https://img.zcool.cn/community/019xl87jox1uslklcewpk83039.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100",
            loveNum: 780
        },
        {
            nickName: "小陈说车",
            title: "谈谈我对丰田汉达兰和理想one的看法",
            img: "https://img.zcool.cn/community/01jkhlkumnapnpstbqalqn3934.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100",
            loveNum: 9520
        },
        {
            nickName: "牛哥频道",
            title: "快就完事了和这么快就完事了是两回事",
            img: "https://img.zcool.cn/community/01trqs2chmdm6dfj7dtxho3932.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100",
            loveNum: 9899
        },
        {
            nickName: "小李说车",
            title: "还在纠结CR-V呢来看看HR-V吧",
            img: "https://img.zcool.cn/community/01d8wnr07ivxcnslxqrin13034.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100",
            loveNum: 4315
        },
        {
            nickName: "小张说车",
            title: "哪吒S：零百加速3.9秒的西装暴徒！",
            img: "https://img.zcool.cn/community/01yfq7mt39fg5xc3f82r8u3432.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100",
            loveNum: 780
        },
        {
            nickName: "小王车评",
            title: "奇瑞路虎SUV系列终端行情盘点",
            img: "https://img.zcool.cn/community/011yhsvi2dj3sxad1bkz0d3936.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100",
            loveNum: 9520
        },
        {
            nickName: "桃子说车",
            title: "五菱星辰SUV：顶配不足十万元？",
            img: "https://img.zcool.cn/community/018lrwnar2s2hvyn1r3kgl3937.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100",
            loveNum: 4750
        },
        {
            nickName: "老陈说车",
            title: "标志408：给实用穿上时装",
            img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.TvqjP1w7e_U3F5XOCqf7sgHaEK?rs=1&pid=ImgDetMain",
            loveNum: 9865
        },
    ])
    return {
        topBarState,
        PopularCars,
        ShareCar
    }

})