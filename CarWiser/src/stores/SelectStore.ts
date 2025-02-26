import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
    SelectTopBarItem,
} from "../types/Select";

export const useSelectStore = defineStore('select', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<SelectTopBarItem[]>([
        {
            title: "汽车",
            items: [
                {
                    index: "A",
                    name: "AITO",
                    img:"https://tse4-mm.cn.bing.net/th/id/OIP-C.c6LU643sQ6yHb26K9R4kcwHaFj?rs=1&pid=ImgDetMain"
                },
                {
                    index: "A",
                    name: "阿斯顿·马丁",
                    img:"https://logo800.cn/uploads/logoxinshang/48/logo800_16491613758744756.png"
                },
                {
                    index: "B",
                    name: "宝马",
                    img:"https://tse4-mm.cn.bing.net/th/id/OIP-C.w5li7DjdnRAUTOaVb7AI-wHaHL?rs=1&pid=ImgDetMain"
                },
                {
                    index: "B",
                    name: "奔驰",
                    img:"https://img.51miz.com/Element/00/23/47/78/c65b74ff_E234778_f29278df.png"
                },
                {
                    index: "B",
                    name: "保时捷",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.1dde03491dc06f77cb901525965d4a8d?rik=0IBVQPmGdq7CyQ&riu=http%3a%2f%2fpro.statics.logoqs.techuangyi.com%2f2018%2f09%2f25%2fce30e96e48cf794795cac7ffa3567ae3.jpg%3fx-oss-process%3dimage%2fresize%2cm_fill%2cw_312%2ch_175&ehk=M46rJDmZD1pc84%2fGw9N7ABerA4fgJGxNa9W25Y%2feTw8%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    index: "C",
                    name: "长安",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.d67a52bd35a6c23dd249e767265b5fd1?rik=soNo40pAKZnxWw&riu=http%3a%2f%2fwww.qcwz8.com%2fUploadFiles%2f2011-11%2fadmin%2f20111110114170.jpg&ehk=S07IuzOIT0IopcT%2fBdE3BrgRzO0th206t5mpz3gw1xs%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    index: "C",
                    name: "长城",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.0168f0a7b8c1296f13e6e7c9408d2c9b?rik=cGOQlcGmoWH7fQ&riu=http%3a%2f%2fwww.qcwz8.com%2fUploadFiles%2f2011-11%2fadmin%2f201111101045480.jpg&ehk=%2bdnvl8p1ZOjIZha5Ww5%2bXwMQV69g5punjUWvDdp0wdU%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    index: "D",
                    name: "大众",
                    img:"https://www.icauto.com.cn/car/images/202006/20200601120000f7ee74f7d4c4a.jpg"
                },
                {
                    index: "D",
                    name: "东风",
                    img:"https://tse4-mm.cn.bing.net/th/id/OIP-C.9jscT0AmC-r9IQUtQ4oBFQAAAA?rs=1&pid=ImgDetMain"
                },
                {
                    index: "D",
                    name: "道奇",
                    img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.U2e1eX4Xt3pc_jL1hQyMgwHaEA?rs=1&pid=ImgDetMain"
                },
                {
                    index: "F",
                    name: "福特",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.068f7636d5e267769e4ac3c40a8db23a?rik=JL61Y%2fZvBooeHQ&riu=http%3a%2f%2fwww.socoologo.com%2fuploads%2fimages%2flinks%2f2017%2f20170407_58e7b511e4e85.jpg&ehk=kw%2bLfNjg8fiS%2b97TcYqDAZfvVk4QV8zGWG14OZyhCqI%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    index: "F",
                    name: "法拉利",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.5362746237ea1fea8b045f70123afce4?rik=z5d9k4JeiQ23Pg&riu=http%3a%2f%2fwww.sz4a.cn%2fPublic%2fUploads%2fimage%2fcai%2f20221228151627010.jpg&ehk=cKgvhrnu1QgyA64iaeRrMvwDt8vOnl6VguxUzeDSc%2fk%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    index: "F",
                    name: "丰田",
                    img:"https://img.tukuppt.com/png_preview/00/09/26/NA3IlqxpbW.jpg!/fw/780"
                },
                {
                    index:"G",
                    name:"广汽集团",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.dfbe874c09fa5f8084fa8286e9942cb2?rik=EDVQcSEBa6dFSw&riu=http%3a%2f%2fwww.qcwz8.com%2fUploadFiles%2f2011-11%2fadmin%2f201111101032500.jpg&ehk=JyH8AQomMadiWF%2bgDYGgbyWEpzzioSV%2b9%2bWppYV0Jbg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                },
                {
                    index:"G",
                    name:"观致",
                    img:"https://tse1-mm.cn.bing.net/th/id/OIP-C.tULfVTazIO0LnQ4y95m0eAHaFj?rs=1&pid=ImgDetMain"
                },
                {
                    index:"H",
                    name:"哈佛",
                    img:"https://logo9.net/userfiles/images/9HAVAL.jpg"
                },
                {
                    index:"H",
                    name:"红旗",
                    img:"https://pic.nximg.cn/file/20220120/5858314_184659383109_2.jpg"
                },
                {
                    index:"H",
                    name:"海马",
                    img:"https://img0.pcauto.com.cn/pcauto/1108/02/1589089_c442c874686f1a48b151b9c0.jpg"
                },
                {
                    index:"H",
                    name:"华泰",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.5e88c9f251ca4ce65645b499367cef72?rik=fnRWA78wtZNbEg&riu=http%3a%2f%2fwww.icauto.com.cn%2fupload%2fallimg%2f160516%2f1-1303121923160-L.jpg&ehk=1SNmCZZ2lt8WquIdDehjhXwNNnwzra253UdYyHv8N9E%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    index:"J",
                    name:"吉利",
                    img:"https://tse1-mm.cn.bing.net/th/id/OIP-C.HEOr5WmDn2bI4fhVFKL9uAHaEA?rs=1&pid=ImgDetMain"
                },
                {
                    index:"J",
                    name:"捷豹",
                    img:"https://www.icauto.com.cn/car/images/202006/2020060112000097fa99da49f16.jpg"
                },
                {
                    index:"J",
                    name:"捷达",
                    img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.h0mLiOUJrVH3kZN44qUJ3AHaHa?rs=1&pid=ImgDetMain"
                }
            ],
        },
        {
            title: "新能源车",
            items: [
                {
                    index: "A",
                    name: "奥迪",
                    img:"https://img0.pcauto.com.cn/pcauto/1108/03/1588108_audi.jpg"
                },
                {
                    index: "A",
                    name: "埃安",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.e29dad9e062943be605bee20c5c35ecd?rik=tvJCnPKILOx%2b0Q&riu=http%3a%2f%2fs3.xchuxing.com%2fxchuxing%2farticle%2f2021%2f04%2f16%2fd2c91202104161029244310.jpg&ehk=Qvfro8P0P7jJTxEuXV5wsQObEuRTrls2WYIjuEdjGBI%3d&risl=&pid=ImgRaw&r=0"
                },
            ],
        },
        {
            title: "二手车",
            items: [
                {
                    index: "A",
                    name: "爱驰",
                    img:"https://tse2-mm.cn.bing.net/th/id/OIP-C.4IzEn5wk_CZREUCQAjLCNQAAAA?rs=1&pid=ImgDetMain"
                },
                {
                    index: "A",
                    name: "阿维塔",
                    img:"https://pic.nximg.cn/file/20230222/26753533_135722003108_2.jpg"
                },
            ],
        },
        {
            title: "摩托车",
            items: [
                {
                    index: "A",
                    name: "Aprilia",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.9445eec51400d6e433747b7077579d6b?rik=9929O6ZoIOsXew&riu=http%3a%2f%2fcdn.logo-sheji.cn%2fwp-content%2fuploads%2f2020%2f7%2fe2uABj.jpg%3fimageMogr2%2finterlace%2f1%2fquality%2f80&ehk=iuA0qDBRGr18r4xn6V87zlrixusVQpH2jgcAoOjC89Q%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    index: "A",
                    name: "奥古斯塔",
                    img:"https://pic.xcar.com.cn/img/news_photo/2013/09/17/d29138f5cb487de768992d7aa8b5029f.jpg"
                },
            ],
        },
        {
            title: "自行车",
            items: [
                {
                    index: "A",
                    name: "Giant",
                    img:"https://ts1.cn.mm.bing.net/th/id/R-C.ae3651f044d304d709d8009320abfeb2?rik=wLK4XonSP%2fzziQ&riu=http%3a%2f%2fwww.szquanli.com%2fuploads%2fallimg%2f200421%2f2-200421095205-50.png&ehk=LqFw%2fyVGvPE3Y6oKdRGHxjBBW1%2bsjjVSs7MHhcV9DT0%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    index: "A",
                    name: "Trek",
                    img:"https://tse4-mm.cn.bing.net/th/id/OIP-C.sv5HHnZNvEMj2hnWafyzvwAAAA?rs=1&pid=ImgDetMain"
                },
            ],
        },

    ])
    return {
        topBarState,
    }

})