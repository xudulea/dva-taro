import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTag } from 'taro-ui'
import './index.less'

@connect(({ home, loading }) => ({ home, loading }))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '小鱼家装'
  }

  constructor(props) {
    super(props)
  }
  componentWillMount() { }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goDemo = () => {
    const { dispatch } = this.props
    dispatch({ type: 'home/search', payload: { num: 2 } })
  }

  render() {
    return (
      <View>
        <AtTag
          name='tag-1'
          type='primary'
          circle
        // onClick={this.onClick.bind(this)}
        >
          tag-1
</AtTag>
      </View>
    )
  }
}