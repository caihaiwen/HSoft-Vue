<template>
  <div>
    <el-card>
      <template #header>
        <el-row>
          <el-col :span="5">
            <el-row align="middle">
              <el-col :span="7">
                用户
              </el-col>
              <el-col :span="17">
                <el-input></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-row align="middle">
              <el-col :span="9">
                发言时间
              </el-col>
              <el-col :span="15">
                <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
                                range-separator="-"></el-date-picker>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </template>
      <el-table :data="CommentTableData" stripe>
        <el-table-column prop="id" label="唯一标识" align="center"></el-table-column>
        <el-table-column prop="person" label="用户" align="center">
          <template #default="scope">
            <el-avatar style="cursor: pointer" :src="scope.row.person.avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="评论时间" align="center"></el-table-column>
        <el-table-column prop="data" label="评论内容" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <el-button size="small" type="danger">删除</el-button>
        </el-table-column>
      </el-table>
    </el-card>

  </div>
</template>

<script setup lang="ts">
import {User} from "./User.vue";
import {Ref} from "vue";

interface Comment {
  id: string, //评论内容
  person: User,
  data: string, // 评论内容
  date: string //评论时间
}
let CommentTableData:Ref<Comment[]> = ref([{
  id: '1',
  person: {
    ID: '2',
    name: '张三',
    createData: '2022-11-13',
    isBand: false,
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  data: '这是一条评论信息',
  date: '2022-11-13 10:11'
},{
  id: '2',
  person: {
    ID: '2',
    name: '张三',
    createData: '2022-11-13',
    isBand: false,
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  data: '这是一条评论信息',
  date: '2022-11-13 10:11'
},{
  id: '3',
  person: {
    ID: '2',
    name: '张三',
    createData: '2022-11-13',
    isBand: false,
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  data: '这是一条评论信息',
  date: '2022-11-13 10:11'
}])
</script>

<style scoped>

</style>