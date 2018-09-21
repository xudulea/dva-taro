import Taro from '@tarojs/taro'
import request from '../utils/request'

export default {
  namespace: 'home',
  state: { num: 1 },
  effects: {
    * search({ payload }, { call, put }) {
      Taro.showLoading({
        title: '搜索中...',
      })
      const res = yield request('https://api.tvmaze.com/search/shows?q=batman', 'get')
      console.info('res:', res);
      //Taro.hideLoading()
    },
  },
  reducers: {
    updateStore(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};