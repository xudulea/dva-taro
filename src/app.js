import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import './app.less'
import dva from './dva'
import models from './models'


const dvaApp = dva({
  initialState: {},
  models,
  onError(e) {
    console.log('onError', e)
  },
})

const store = dvaApp.getStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/demo/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#aa9783",
      selectedColor: "#e4c76e",
      backgroundColor: "#fff",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        selectedIconPath: "./asset/images/nav/home1.png",
        iconPath: "./asset/images/nav/home2.png",
      }, {
        pagePath: "pages/demo/index",
        text: "案例",
        selectedIconPath: "./asset/images/nav/case1.png",
        iconPath: "./asset/images/nav/case2.png"
      }, {
        pagePath: "pages/demo/index",
        text: "报价",
        selectedIconPath: "./asset/images/nav/price1.png",
        iconPath: "./asset/images/nav/price2.png"
      }, {
        pagePath: "pages/demo/index",
        text: "设计圈",
        selectedIconPath: "./asset/images/nav/design1.png",
        iconPath: "./asset/images/nav/design2.png"
      }, {
        pagePath: "pages/demo/index",
        text: "我的",
        selectedIconPath: "./asset/images/nav/user1.png",
        iconPath: "./asset/images/nav/user2.png"
      }]
    },
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentCatchError() { }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
