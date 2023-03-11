<template>
  <el-row :gutter="20" style="height: 100vh;">
    <el-col :span="isCollapse?1:3">
      <el-menu style="height: 100%" :collapse-transition="false" mode="vertical" :default-active="defaultActivity"
               router :collapse="isCollapse">
        <el-menu-item route="/backer/index" index="/backer/index">
          <el-icon>
            <PieChart/>
          </el-icon>
          <template #title>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <InfoFilled />
            </el-icon>
            <span>基本信息</span>
          </template>
            <el-menu-item route="/backer/notice" index="/backer/notice">
              <template #title>
                <el-icon class="iconfont icon-gonggao" />
                <span>公告管理</span>
              </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <User />
            </el-icon>
            <span>用户管理</span>
          </template>
            <el-menu-item route="/backer/user" index="/backer/user">
              <el-icon>
                <User/>
              </el-icon>
              <template #title>
                <span>用户管理</span>
              </template>
            </el-menu-item>
            <el-menu-item route="/backer/role" index="/backer/role">
              <el-icon class="iconfont icon-role_icon" />
              <template #title>
                <span>角色管理</span>
              </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon class="iconfont icon-type" />
            <span>应用管理</span>
          </template>
            <el-menu-item route="/backer/application" index="/backer/application">
              <el-icon>
                <Grid/>
              </el-icon>
              <template #title>
                <span>应用详情</span>
              </template>
            </el-menu-item>
            <el-menu-item route="/backer/type" index="/backer/type">
              <el-icon class="iconfont icon-icon_type" />
              <template #title>
                <span>分类管理</span>
              </template>
            </el-menu-item>
        </el-sub-menu>
        <el-menu-item route="/backer/comments" index="/backer/comments">
          <el-icon class="iconfont icon-icon_type" />
          <template #title>
            <span>评论管理</span>
          </template>
        </el-menu-item>
        <el-menu-item route="/backer/settings" index="/backer/settings">
          <el-icon>
            <Setting/>
          </el-icon>
          <template #title>
            <span>系统设置</span>
          </template>
        </el-menu-item>

      </el-menu>
    </el-col>
    <el-col :span="isCollapse?23:21">
      <!--头部-->
      <div style="position:relative;;display: flex;align-items: center;justify-content: space-between;height: 60px">
        <div style="font-weight: 700" @click="isCollapse=!isCollapse">
          <el-icon style="cursor: pointer">
            <Expand v-if="isCollapse"/>
            <Fold v-if="!isCollapse"/>
          </el-icon>
        </div>
        <div style="position: absolute;right: 20px">
          <el-dropdown>
            <el-avatar shape="circle" size="default"
                       :src="Avatar"></el-avatar>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <el-button @click="isShowModifyPasswordDialog=true">修改密码</el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button @click="logout" type="danger">退出登录</el-button>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <el-tabs v-model="selectTag" @tab-remove="tabClose" @tab-click="tabClick" closable>
          <el-tab-pane v-for="tab in localTags" :key="tab.name" :label="tab.name" :name="tab.name">
          </el-tab-pane>

        <router-view id="childRouter"/>
      </el-tabs>
    </el-col>
  </el-row>
  <el-dialog v-model="isShowModifyPasswordDialog" align-center>
    <el-form ref="passwordFormRef" :model="passwordForm" :rules="rules">
      <el-form-item label="原密码：">
        <el-input v-model="passwordForm.OPssword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码：">
        <el-input v-model="passwordForm.newPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="reNewPassword">
        <el-input v-model="passwordForm.reNewPassword" type="password"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="isShowModifyPasswordDialog=false">取消</el-button>
      <el-button @click="submitForm(passwordFormRef)">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import Avatar from "@/assets/images/man.png"
import {ref} from "vue"
import type {FormInstance, TabsPaneContext} from "element-plus";
//@ts-ignore
import {Fold, Expand, PieChart, User, Grid, Crop, Setting,InfoFilled} from "@element-plus/icons-vue"
import {RouteLocationRaw, useRouter, useRoute} from "vue-router";
import {useTagStore} from "../../pinia/TagData"
import {storeToRefs} from "pinia";

const tagDataStore = useTagStore();
const {tags} = storeToRefs(tagDataStore);
const router = useRouter();
const route = useRoute();

let isCollapse = ref(false); // 是否折叠
let isShowModifyPasswordDialog = ref(false);
let passwordForm = reactive({
  OPassword: '',
  newPassword: '',
  reNewPassword: '',
});
let selectTag = ref();
const modifyPasswordRules = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error("密码不能为空"));
  } else if (value != passwordForm.newPassword) {
    callback(new Error("密码错误"));
  } else {
    callback();
  }
}

watch(route, (newValue) => {
  if (localTags.value.filter(s => s.name == newValue.name).length == 0) {
    localTags.value.push({name: newValue.name, content: newValue.path})
    selectTag.value = newValue.name;
  }
  defaultActivity.value = newValue.path;
  selectTag.value = newValue.name;
})

// 密码相关的表单
const passwordFormRef = ref<FormInstance>()

let defaultActivity = ref("/index");

const rules = reactive({
  reNewPassword: [{validator: modifyPasswordRules, trigger: 'blur'}]
})
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("valid");
    } else {
      console.log("error");
      return false;
    }
  })
}

function tabClick(pane: TabsPaneContext, ev: Event) {
  const tag = localTags.value.filter(s => s.name == pane.paneName);
  selectTag.value = pane.paneName;
  router.push(tag[0].content)
}


const localTags = ref([])
onMounted(() => {
  //@ts-ignore
  localTags.value.push({
    name: route.name,
    content: route.path
  })
  selectTag.value = route.name;
  defaultActivity.value = route.path;
})


function tabClose(name) {
  let i = 0;
  for (; i < localTags.value.length; i++) {
    if (localTags.value[i].name === name) {
      localTags.value.splice(i, 1);
      break;
    }
  }
  if (localTags.value.length === 0) {
    selectTag.value = '首页';
    router.push('/')
  } else {
    selectTag.value == localTags.value[0].name;
    router.push(localTags.value[0].content);
  }
}
</script>

<style scoped>


#childRouter {
  height: 90vh;
  overflow: hidden;
}

#childRouter:hover {
  overflow-y: auto;
}
</style>