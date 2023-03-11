<template>
  <div>
    <div style="float: right;margin: 30px 20px">
      <el-button size="large" type="success" @click="dialogState=true">新增</el-button>
    </div>
    <el-table :data="noticeTableData">
      <el-table-column prop="id" label="唯一标识" width="150" align="center"></el-table-column>
      <el-table-column prop="info" label="信息" align="center"></el-table-column>
      <el-table-column prop="effectiveTime" label="生效时间" align="center" width="150"></el-table-column>
      <el-table-column prop="deadTime" label="失效时间" align="center" width="150"></el-table-column>
      <el-table-column prop="createTor" label="创建者" align="center" width="100"></el-table-column>
    </el-table>
  </div>
  <el-dialog draggable v-model="dialogState" align-center width="30%">
    <el-form>
      <el-form-item label="公告详情">
        <el-input type="textarea" autosize v-model="notice.info"></el-input>
      </el-form-item>
      <el-form-item label="生效时间">
        <el-date-picker v-model="notice.timeRanger" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" range-separator="-"></el-date-picker>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogState = false">取消</el-button>
        <el-button type="primary" @click="dialogState = false">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
<!--  <el-dialog v-model="dialogState" align-center title="警告" width="30%">-->
<!--    <span>是否确定删除用户ID为{{ id }}的用户</span>-->
<!--    <template #footer>-->
<!--      <span>-->
<!--         <el-button @click="dialogState = false">取消</el-button>-->
<!--        <el-button type="danger" @click="dialogState = false">-->
<!--          提交-->
<!--        </el-button>-->
<!--      </span>-->
<!--    </template>-->
<!--  </el-dialog>-->

</template>

<script setup lang="ts">
import {Ref} from "vue";

interface Notice{
  id: string,
  info: string,
  effectiveTime: string,
  deadTime: string,
  createTor: string
}
let dialogState = ref(false);

let notice = ref({})
let noticeTableData:Ref<Notice[]> = ref([{
  id: "1",
  info: '这是一条公告信息',
  effectiveTime: '2023-11-11 11:11',
  deadTime: '2023-12-13 11:13',
  createTor: '管理员1'
},{
  id: "2",
  info: '这是第二条公告信息',
  effectiveTime: '2023-11-11 11:11',
  deadTime: '2023-12-13 11:13',
  createTor: '管理员2'
}]);
</script>

<style scoped>

</style>