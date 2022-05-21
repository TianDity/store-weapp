export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shop/index',
    'pages/order/index',
    'pages/serve/index',
    'pages/mine/index',
  ],
  tabBar: {
    color: '#7d7d7d',
    selectedColor: '#f24e1e',
    list: [
      {
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-hover.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'assets/tabbar/shop.png',
        selectedIconPath: 'assets/tabbar/shop-hover.png',
        pagePath: 'pages/shop/index',
        text: '商品',
      },
      {
        iconPath: 'assets/tabbar/order.png',
        selectedIconPath: 'assets/tabbar/order-hover.png',
        pagePath: 'pages/order/index',
        text: '订货',
      },
      {
        iconPath: 'assets/tabbar/serve.png',
        selectedIconPath: 'assets/tabbar/serve-hover.png',
        pagePath: 'pages/serve/index',
        text: '服务',
      },
      {
        iconPath: 'assets/tabbar/mine.png',
        selectedIconPath: 'assets/tabbar/mine-hover.png',
        pagePath: 'pages/mine/index',
        text: '我的',
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
