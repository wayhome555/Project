import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import { Toast , Tabbar , Search , TabbarItem , Icon , Button , Swipe , SwipeItem , Popup , IndexAnchor , IndexBar , Cell , Tab , Tabs , BackTop ,Picker , Loading} from 'vant'
import 'vant/lib/index.css'; // 引入 Vant 样式
import './assets/tailwind.css'
import 'wc-waterfall'
import lazy from '../src/directives/lazy'

const app = createApp(App)
app.use(router)
app.use(Search)
app.use(Tabbar)
app.use(Toast)
app.use(TabbarItem)
app.use(Icon)
app.use(Button)
app.use(Swipe)
app.use(SwipeItem)
app.use(Popup)
app.use(IndexAnchor)
app.use(IndexBar)
app.use(Cell)
app.use(Tab)
app.use(Tabs)
app.use(BackTop)
app.use(Picker)
app.use(Loading)
app.use(createPinia())
app.directive('lazy', lazy)
app.mount('#app')

