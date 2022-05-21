import { createApp } from 'vue'
import { Button, Toast, Tabbar, TabbarItem, Icon, Swiper, SwiperItem, Grid, GridItem, Empty } from '@nutui/nutui-taro';

import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast)
App.use(Tabbar).use(TabbarItem).use(Icon)
App.use(Swiper).use(SwiperItem)
App.use(Grid).use(GridItem)
App.use(Empty)

export default App
