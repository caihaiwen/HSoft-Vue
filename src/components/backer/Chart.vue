<template>
  <el-row>
    <el-col :span="6">
      <div class="countInfo">
        <div class="image"> <img src="../../assets/images/people.png" width="100" height="100"></div>
        <div class="count">4196 人次</div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="countInfo">
        <div class="image"><img src="../../assets/images/menu.png" width="100" height="100"></div>
        <div class="count">512 个</div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="countInfo">
        <div class="image"><img src="../../assets/images/message.png" width="100" height="100"></div>
        <div class="count">1024 条</div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="countInfo">
        <div class="image"><img src="../../assets/images/sort.png" width="100" height="100"></div>
        <div class="count">32 个</div>
      </div>
    </el-col>
    <el-col :span="24">
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
    text: '一周访问量情况'
  },
  color: [
      '#30E3DF',
      '#FCE22A',
      '#F94A29',
      '#B3FFAE',
      '#BAD7E9',
      '#FCFFE7',
      '#EB455F'
  ],
  tooltip: {},
  xAxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
  },
  yAxis: {},
  series: [
    {
      name: '人次',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20,20],
      colorBy: 'data'
    }
  ]
};
const option2 = {
  title: {
    text: '一周内的资源下载数量'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
  },
  yAxis: {},
  series: [
    {
      name: '下载量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20,10]
    }
  ]
};
const option3 = {
  title: {
    text: '各种分类资源的下载分布图',
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
        { value: 1048, name: '开发类型' },
        { value: 735, name: '娱乐类型' },
        { value: 580, name: '功能类型' },
        { value: 484, name: '通讯类型' },
        { value: 300, name: '实用工具' }
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
  window.onresize = () => {
    charts1.resize();
    charts2.resize();
    charts3.resize();
  }
})
</script>

<style scoped>
.countInfo {
  display: flex;
  justify-content: space-around;
  background-color: #edeff2;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;

}
.countInfo .image {
  width: 50%;
  text-align: center;
  border-right: rgba(111,111,111,0.3) solid 1px;
}
.countInfo .count {
  font-size: 30px;
  font-weight: 700;
  width: 50%;
  text-align: center;
}
</style>