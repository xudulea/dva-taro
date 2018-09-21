import Taro from '@tarojs/taro'

export default (url, method, data = {}) => {
    return Taro.request({
        url,
        method: method.toUpperCase(),
        data,
        header: { 'content-type': 'application/json' }
    }).then((res) => {
        let { statusCode, data } = res;
        if (statusCode >= 200 && statusCode < 300) {
            return data;
        } else {
            throw new Error(`网络请求错误，状态码${statusCode}`);
        }
    })
}