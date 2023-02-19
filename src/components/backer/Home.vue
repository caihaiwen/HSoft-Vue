<template>
  <el-row gutter="20">
    <el-col :span="isCollapse?1:3">
      <div class="logo" v-show="!isCollapse">HSoft</div>
      <div :style="{width:isCollapse?'':'30%'}" style="text-align: center;margin: 20px 0 10px 0">
      </div>
      <el-menu mode="vertical" :default-active="defaultActivity" router :collapse="isCollapse">
        <el-menu-item route="/index" index="/index">
          <el-icon>
            <PieChart/>
          </el-icon>
          <template #title>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-sub-menu>
          <template #title>
            <el-icon>
              <User/>
            </el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item route="/test" index="/test">
              管理员管理
            </el-menu-item>
            <el-menu-item>
              用户管理
            </el-menu-item>
          </el-menu-item-group>

        </el-sub-menu>
        <el-menu-item></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="isCollapse?23:21" >
      <!--头部-->
      <div style="position:relative;;display: flex;align-items: center;justify-content: space-between;height: 60px">
        <div style="font-weight: 700" @click="isCollapse=!isCollapse">
          <el-icon>
            <Expand v-if="isCollapse"/>
            <Fold v-if="!isCollapse"/>
          </el-icon>
        </div>
        <div style="position: absolute;right: 20px">
          <el-dropdown>
            <el-avatar shape="circle" size="default"
                       src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
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
        <el-tab-pane  v-for="tab in localTags" :key="tab.name" :label="tab.name" :name="tab.name">

        </el-tab-pane>
        <router-view />
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
import {ref} from "vue"
import type {FormInstance, TabsPaneContext} from "element-plus";
//@ts-ignore
import {Fold, Expand, PieChart, User} from "@element-plus/icons-vue"
import {RouteLocationRaw, useRouter,useRoute} from "vue-router";
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

watch(route,(newValue) => {
  if (localTags.value.filter(s => s.name == newValue.name).length == 0) {
    localTags.value.push({name:newValue.name,content:newValue.path})
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
  router.push(tag[0].content as RouteLocationRaw)
}



const localTags = ref([])
onMounted(() => {

  //@ts-ignore
  localTags.value.push(tags.value.filter(s => { return s.name == '首页'})[0])
  selectTag.value = '首页';
})


function tabClose(name) {
  let i = 0;
  for (; i < localTags.value.length; i++) {
    if ( localTags.value[i].name === name){
      localTags.value.splice(i,1);
      break;
    }
  }
  if ( localTags.value.length === 0){
    selectTag.value = '首页';
    router.push('/')
  }else {
    selectTag.value == localTags.value[0].name;
    router.push(localTags.value[0].content);
  }
}
</script>

<style scoped>
.width-tran {
  transition: width 2s linear;
}

.logo {
  font-size: 30px;
  text-align: center;
  color: #88e;
  text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
  0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
  0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
  animation: pulsea 300ms ease infinite alternate;
}

@keyframes pulsea {
  0% {
    text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
    0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
    0.14em 0.14em 0 #112, 0.145em 0.145em 0 #aaf;
  }
  50% {
    text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
    0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #aaf,
    0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
  }
  75% {
    text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
    0.045em 0.045em 0 #aaf, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
    0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
  }
  100% {
    text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.4), 0.04em 0.04em 0 #112,
    0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
    0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
  }
}
</style>