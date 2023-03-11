<template>
  <el-form  label-width="220px" >
    <el-form-item label="是否允许注册" >
      <el-radio-group class="ml-4">
        <el-radio label="true" size="large">是</el-radio>
        <el-radio label="false" size="large">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否允许用户上传文件" >
      <el-radio-group class="ml-4">
        <el-radio label="true" size="large">是</el-radio>
        <el-radio label="false" size="large">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>

</script>

<style scoped>

</style>