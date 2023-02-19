<template>
  <el-row>
    <el-col :span="12">
      <div id="charRef1" style="width: 100%;height: 400px">
      </div>
    </el-col>
    <el-col :span="12">
      <div id="charRef2" style="width: 100%;height: 400px">
      </div>
    </el-col>
    <el-col :span="12">
      <div id="charRef3" style="width: 100%;height: 400px">
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import * as echarts from "echarts"
import {onMounted} from "vue";

const option1 = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
const option2 = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
}
const option3 = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
onMounted(() => {
  const charRef1 = document.getElementById("charRef1")
  const charts1 = echarts.init(charRef1);
  charts1.setOption(option1);
  const charRef2 = document.getElementById("charRef2");
  const charts2 = echarts.init(charRef2);
  charts2.setOption(option2)
  const charRef3 = document.getElementById("charRef3");
  const charts3 = echarts.init(charRef3);
  charts3.setOption(option3)
})
</script>

<style scoped>

</style>