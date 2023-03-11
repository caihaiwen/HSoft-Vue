<template>
  <div>
    <el-form label-width="100px" :inline="true">
      <el-form-item label="软件名称" style="width: 40%">
          <el-input style="width: 100%" />
      </el-form-item>
      <el-form-item label="所属分类" style="width: 30%">
          <el-select >
            <el-option>11</el-option>
            <el-option>11</el-option>
            <el-option>11</el-option>
            <el-option>11</el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="软件图标" style="width: 100%">
        <el-upload action="#"  list-type="picture" limit="1" :auto-upload="false">
            <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="图片详情">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <el-icon><Plus /></el-icon>
          <template #file="{ file }">
            <div>
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
              <span class="el-upload-list__item-actions">
          <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
    <QuillEditor style="height: 400px" :modules="modules" toolbar="full" theme="snow"/>
    <el-dialog v-model="dialogPic">
      <el-image w-full :src="dialogImageUrl" />
    </el-dialog>
    <div class="flex align-center" style="margin-top: 20px;justify-content: right">
      <el-button type="primary">保存</el-button>
      <el-button type="success">提交</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {QuillEditor} from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css';
//@ts-ignore
import MarkdownShortcuts from 'quill-markdown-shortcuts';
//@ts-ignore
import {Plus,ZoomIn,Delete} from "@element-plus/icons-vue"
import {UploadFile} from "element-plus";
const modules = [{
  name: 'markDownShortCut',
  module: MarkdownShortcuts,
}]
const dialogPic = ref(false)
const dialogImageUrl = ref('')
const handleRemove = (file:UploadFile) => {
  console.log(file)
}
const handlePictureCardPreview = (file:UploadFile) => {
  dialogImageUrl.value = file.url as string;
  dialogPic.value = true;
  console.log(file)
}
</script>

<style scoped>

</style>