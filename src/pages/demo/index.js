import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {
    config = {
        navigationBarTitleText: 'demo'
    }
    componentWillMount() { }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    render() {
        return <View>
            <Text>demo</Text>
        </View >
    }
}
