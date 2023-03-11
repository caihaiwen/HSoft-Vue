<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-row align="middle">
          <el-col :span="7">
            软件名称
          </el-col>
          <el-col :span="17">
            <el-input></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-row align="middle">
          <el-col :span="9">
            提交时间
          </el-col>
          <el-col :span="15">
            <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
                            range-separator="-"></el-date-picker>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" :offset="3">
        <el-row align="middle">
          <el-col :span="9">
            审核通过日期
          </el-col>
          <el-col :span="15">
            <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
                            range-separator="-"></el-date-picker>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="margin: 30px 0" align="middle" >
      <el-col :span="24" style="text-align: center">
        <el-button type="primary">查询</el-button>
        <el-button type="success" @click="add">新增</el-button>
      </el-col>
    </el-row>
      <el-table :data="applicationTableData" stripe>
        <el-table-column prop="id" label="唯一标识" align="center"></el-table-column>
        <el-table-column prop="name" label="软件名称" align="center"></el-table-column>
        <el-table-column prop="commitDate" label="提交时间" align="center"></el-table-column>
        <el-table-column prop="approveDate" label="审核通过时间" align="center"></el-table-column>
        <el-table-column prop="type" label="所属分类" align="center">
          <template #default="scope">
            <el-tag type="success">{{ scope.row.type }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="isRecommend" label="是否推荐" align="center" :filter-method="recommendState"
                         :filters="[{text:'是',value:true},{text:'否',value: false}]">
          <template #default="scope">
            <el-tag type="success" v-if="scope.row.isRecommend" effect="dark">是</el-tag>
            <el-tag type="danger" v-if="!scope.row.isRecommend" effect="dark">否</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </el-table-column>
      </el-table>

  </div>
</template>

<script setup lang="ts">
import {Ref} from "vue";
import {useRouter} from "vue-router";

interface Application {
  id: string, //唯一标识
  name: string, // 软件名称
  commitDate: string, // 提交时间
  approveDate: string, // 审核通过时间
  type: string, // 分类名称
  isRecommend: boolean // 是否推荐
}

const recommendState = (state: boolean, row: Application) => {
  return row.isRecommend == state;
}

const router = useRouter();
const  add = () => {
  router.push({
    path: "application/edit"
  })
}

let applicationTableData: Ref<Application[]> = ref([{
  id: "1",
  name: 'IDEA',
  commitDate: '2022-11-12 11:11',
  approveDate: '2022-11-12 11:11',
  type: '开发相关',
  isRecommend: true
}, {
  id: "2",
  name: 'WebStorm',
  commitDate: '2022-11-12 11:11',
  approveDate: '2022-11-12 11:11',
  type: '开发相关',
  isRecommend: false
}]);

</script>

<style scoped>

</style>