<template>
  <div>
    <el-row align="middle" class="header">
      <el-col :span="5">
        <div class="logo" @click="goToIndex">Heaven</div>
      </el-col>
      <el-col :span="13">
        <el-menu :default-active="defaultPath" class="flex justify-center" style="width: 100%" router mode="horizontal">
          <el-menu-item index="/" route="/">
            首页
          </el-menu-item>
          <el-menu-item index="/application" route="/application">
            软件
          </el-menu-item>
          <el-menu-item index="/type" route="/type">
            专题
          </el-menu-item>
          <el-menu-item index="/type" route="/type">
            留言
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-input placeholder="请输入关键字搜索软件">
          <template #append>
            <el-button :icon="Search"/>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <router-view style="background-color: #f7f8fa" id="childRouter" />
  </div>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from "vue-router";
//@ts-ignore
import {Search} from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();
let defaultPath = ref('');

watch(route,(value, oldValue, onCleanup) => {
  defaultPath.value = value.path as string;
})

onMounted(() => {
  defaultPath.value = route.path;
})
const goToIndex = () => {
  router.push({
    path: '/'
  })
}
</script>

<style scoped>
.logo {
  cursor: pointer;
  font-size: 30px;
  margin-left: 10%;
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

:deep(.el-menu--horizontal) {
  border-bottom: none;
}

.header {
  background-color: #fff;
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%
}
#childRouter {
  overflow: hidden;
  height: calc(100vh - 78px);
  position: relative;
  padding: 0 5%;
  top: 58px;
  scrollbar-width: none
}

#childRouter:hover {
  overflow-y: auto ;
}
</style>