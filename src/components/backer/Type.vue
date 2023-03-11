<template>
  <div>
    <div style="float: right;margin: 30px 20px">
      <el-button size="large" type="success" @click="dialogState=true">新增</el-button>
    </div>
    <el-table :data="typeTableData">
      <el-table-column prop="id" label="唯一标识" align="center"></el-table-column>
      <el-table-column prop="name" label="分类名称" align="center"></el-table-column>
      <el-table-column prop="color" label="颜色标识" align="center" width="100px">
        <template #default="scope">
          <div style="margin-left: 20px;width: 30px;height: 30px;border-radius: 30px"
               :style="{'background-color':scope.row.color}"></div>
        </template>
      </el-table-column>
      <el-table-column prop="count" label="软件数量" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <div>
            <el-button size="small" type="primary">编辑</el-button>
            <el-button size="small" type="danger" @click="deleteType(scope.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogState" align-center width="30%" >
      <el-form :model=typeData label-width="80px">
        <el-form-item label="名称" required>
          <el-input v-model="typeData.name"></el-input>
        </el-form-item>
        <el-form-item label="标识颜色" required>
          <el-color-picker  v-model="typeData.color"></el-color-picker>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogState=false">取消</el-button>
        <el-button @click="submit"  type="primary">提交</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {Ref} from "vue";
import {ElMessage} from "element-plus";
import 'element-plus/es/components/message/style/css'


interface Type {
  id: string,
  name: string,
  color: string,
  count: number
}

// 新增提交
const submit = () => {
  console.log(typeData)
  dialogState.value = false;
  typeData.value = {}
}

let typeData = ref({})

let dialogState = ref(false);


const deleteType = (row: Type) => {
  if (row.count > 0) {
    ElMessage({
      message: '当前分类下的应用数量不为0，无法删除当前分类',
      type: 'error'
    })
  }
}
let typeTableData: Ref<Type[]> = ref([{
  id: '1',
  name: '实用工具',
  color: '#F7A4A4',
  count: 10
}, {
  id: '2',
  name: '通讯工具',
  color: '#31C6D4',
  count: 20
}]);
</script>

<style scoped>

</style>