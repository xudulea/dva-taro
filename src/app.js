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
        selectedIconPath: "./asset/images/home1.png",
        iconPath: "./asset/images/home2.png",
      }, {
        pagePath: "pages/demo/index",
        text: "案例",
        selectedIconPath: "./asset/images/case1.png",
        iconPath: "./asset/images/case2.png"
      }, {
        pagePath: "pages/demo/index",
        text: "报价",
        selectedIconPath: "./asset/images/price1.png",
        iconPath: "./asset/images/price2.png"
      }, {
        pagePath: "pages/demo/index",
        text: "设计圈",
        selectedIconPath: "./asset/images/design1.png",
        iconPath: "./asset/images/design2.png"
      }, {
        pagePath: "pages/demo/index",
        text: "我的",
        selectedIconPath: "./asset/images/user1.png",
        iconPath: "./asset/images/user2.png"
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
