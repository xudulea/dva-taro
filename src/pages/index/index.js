import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTag } from 'taro-ui'
import './index.less'

import ad1 from '../../asset/images/advertisement/ad1.jpg'
import ad2 from '../../asset/images/advertisement/ad2.jpg'
import ad3 from '../../asset/images/advertisement/ad3.jpg'
import ad4 from '../../asset/images/advertisement/ad4.jpg'
import ad5 from '../../asset/images/advertisement/ad5.jpg'

import example from '../../asset/images/example.png'
import design from '../../asset/images/design.png'
import mall from '../../asset/images/mall.png'
import about from '../../asset/images/about.png'

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
        <View className='slider-contaner'>
          <View className='slider'>
            <Image className='slider-item slider-item1' src={ad1}></Image>
            <Image className='slider-item slider-item2' src={ad2}></Image>
            <Image className='slider-item slider-item3' src={ad3}></Image>
            <Image className='slider-item slider-item4' src={ad4}></Image>
            <Image className='slider-item slider-item5' src={ad5}></Image>
          </View>
          <View className='focus-container'>
            <View className='floatfix'>
              <View className='li'>
                <View className='focus-item focus-item1'></View>
              </View>
              <View className='li'>
                <View className='focus-item focus-item2'></View>
              </View>
              <View className='li'>
                <View className='focus-item focus-item3'></View>
              </View>
              <View className='li'>
                <View className='focus-item focus-item4'></View>
              </View>
              <View className='li'>
                <View className='focus-item focus-item5'></View>
              </View>
            </View>
          </View>
        </View>
        <View className='flex'>
          <View>
            <View>
              <Image className='icon-module aiCenter' src={example}></Image>
            </View>
            <Text className='text-module'>客户案例</Text>
          </View>
          <View>
            <View>
              <Image className='icon-module aiCenter' src={design}></Image>
            </View>
            <Text className='text-module'>设计师</Text>
          </View>
          <View>
            <View>
              <Image className='icon-module aiCenter' src={mall}></Image>
            </View>
            <Text className='text-module'>家装商城</Text>
          </View>
          <View>
            <View>
              <Image className='icon-module aiCenter' src={about}></Image>
            </View>
            <Text className='text-module'>关于我们</Text>
          </View>
        </View>
      </View>
    )
  }
}