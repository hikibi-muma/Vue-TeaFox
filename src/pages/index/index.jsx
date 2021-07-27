import { Component } from 'react'
import { View, Canvas } from '@tarojs/components'
import F2 from '@antv/f2';
import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'balc', sold: 175 },
      { genre: 'titi', sold: 210 },
      { genre: 'apple', sold: 350 },
      { genre: 'wiwiw', sold: 275 },
      { genre: 'Other', sold: 150 }
    ];

    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'myChart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });

    console.log(chart);

    // Step 2: 载入数据源
    chart.source(data);

     // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval()
      .position('genre*sold')
      .color('genre');

    // // Step 4: 渲染图表
    chart.render();

  }



  render() {





    return (
      <View className='index'>
        <canvas id='myChart' width='375' height='375'></canvas>
      </View>
    )
  }
}
