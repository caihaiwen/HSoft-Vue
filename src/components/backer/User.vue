<template>
  <el-row style="margin: 30px 0" align="middle" justify="center">
    <el-col :span="8">
      <el-row align="middle">
        <el-col :span="5">
          用户名:
        </el-col>
        <el-col :span="19">
          <el-input v-model="searchInfo.name"></el-input>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8" :offset="2">
      <el-row align="middle">
        <el-col :span="5">
          注册时间：
        </el-col>
        <el-col :span="19">
          <el-date-picker type="daterange" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间"
                          v-model="searchInfo.createDate"></el-date-picker>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="3" :offset="2">
      <el-button type="primary">查找</el-button>
    </el-col>
  </el-row>
  <el-table :data="userTableData" stripe>
    <el-table-column align="center" prop="ID" label="唯一标识">
    </el-table-column>
    <el-table-column align="center" prop="email" label="邮箱"></el-table-column>
    <el-table-column align="center" prop="name" label="用户名">
    </el-table-column>
    <el-table-column align="center" prop="createData" label="注册时间">
    </el-table-column>
    <el-table-column align="center" prop="isBand" label="是否封禁" :filter-method="filterBand" :filters="[{
      text: '是',value: true
    },{text: '否',value: false}]">
      <template #default="scope">
        <div v-if="scope.row.isBand">
          <el-tag type="danger">是</el-tag>
        </div>
        <div v-if="!scope.row.isBand">
          <el-tag type="success">否</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" fixed="right" label="操作">
      <template #default="scope">
        <el-button size="small" v-if="!scope.row.isBand">封禁</el-button>
        <el-button size="small" type="danger" @click="deleteMethod(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogState" align-center title="警告" width="30%">
    <span>是否确定删除用户ID为{{ id }}的用户</span>
    <template #footer>
      <span>
         <el-button @click="dialogState = false">取消</el-button>
        <el-button type="danger" @click="dialogState = false">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script lang="ts" setup>
import {Ref} from "vue";

export interface User {
  email: string,
  ID: string, //用户ID
  name: string, // 用户名
  createData: string,// 帐号创建时间
  isBand: boolean, // 是否被禁止,
  avatar?: string

}

let id = ref("");

let dialogState = ref(false)

let searchInfo = ref({
  name: '',
  createDate: ''
})

let userTableData: Ref<User[]> = ref([{
  ID: '1',
  email: '11@qq.com',
  name: '张三',
  createData: '2022-11-12 11:10',
  isBand: false
}, {
  ID: '2',
  email: "22@qq.com",
  name: '李四',
  createData: '2022-11-12 11:10',
  isBand: true
}]);
const filterBand = (value: Boolean, row: User) => {
  return row.isBand === value;
}

const deleteMethod = (row: User) => {
  id.value = row.ID;
  dialogState.value = true;
}

// onMounted( () => {
//   userTableData.value.push()
// })
</script>

<style scoped>

</style>