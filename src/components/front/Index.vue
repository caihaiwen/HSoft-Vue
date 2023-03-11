<template>
  <div>
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="6">
        <div class="panel"
             style="height: 150px;background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(170,223,228,1) 100%);">
          <el-icon><CollectionTag /></el-icon>
          <div>新人必备</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="panel"
             style="height: 150px;background: linear-gradient(90deg, rgba(255,106,9,1) 0%, rgba(228,193,170,1) 100%);">
          <el-icon><Stamp /></el-icon>
          <div>图形处理软件</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="panel"
             style="height: 150px;background: linear-gradient(90deg, rgba(149,224,157,1) 0%, rgba(218,247,207,1) 100%);">
          <el-icon><Briefcase /></el-icon>
          <div>产品经理软件</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="panel"
             style="height: 150px;background: linear-gradient(90deg, rgba(166,138,222,1) 0%, rgba(226,207,247,1) 100%);">
          <el-icon><More /></el-icon>
          <div>更多专题</div>
        </div>
      </el-col>
    </el-row>
    <div class="flex infoBar align-center">
      <el-icon size="30">
        <TakeawayBox/>
      </el-icon>
      <div class="title">
        精品软件
      </div>
      <div class="subTitle">
        新鲜发布
      </div>
      <div class="subTitle">
        热门下载
      </div>
      <div class="subTitle">
        评论最多
      </div>
      <div style="flex-grow: 1">
        <div class="right flex align-center">
          <div>更多软件</div>
          <el-icon>
            <ArrowRight/>
          </el-icon>
        </div>
      </div>
    </div>
    <div class="card">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="hover" class="applicationInfo" @click="goToDetail">
            <template #header>
              <el-image style="width: 70px;height: 70px" :src="webstormImg" />
            </template>
            <div class="version">
              2023.03.01
            </div>
            <div class="name">WebStorm</div>
            <div class="detail">
              WebStorm 是一个适用于 JavaScript 和相关技术的集成开发环境。类似于其他 JetBrains IDE，它也会使您的开发体验更有趣，自动执行常规工作并帮助您轻松处理复杂任务
            </div>
            <div class="rightArrow">
              <el-image :src="RightArrow"></el-image>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" class="applicationInfo" @click="goToDetail">
            <template #header>
              <el-image style="width: 70px;height: 70px" :src="ideaImg" />
            </template>
            <div class="version">
              2023.03.01
            </div>
            <div class="name">IntelliJ IDEA</div>
            <div class="detail">
              IntelliJ IDEA 是 Java 和 Kotlin 开发的领先 IDE。 它具有一套有助于提高效率的功能，包括智能编码辅助、可靠重构、即时代码导航、内置开发者工具、Web 和企业开发支持等。
            </div>
            <div class="rightArrow">
              <el-image :src="RightArrow"></el-image>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" class="applicationInfo" @click="goToDetail">
            <template #header>
              <el-image style="width: 70px;height: 70px" :src="dataGrip" />
            </template>
            <div class="version">
              2023.03.01
            </div>
            <div class="name">DataGrip</div>
            <div class="detail">
              DataGrip 是一个多引擎数据库环境。 如果 DBMS 有 JDBC 驱动程序，您可以通过 DataGrip 连接到它。 它提供了数据库内省，以及用于为支持的引擎创建和修改对象的各种工具：
            </div>
            <div class="rightArrow">
              <el-image :src="RightArrow"></el-image>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" class="applicationInfo" @click="goToDetail">
            <template #header>
              <el-image style="width: 70px;height: 70px" :src="Clion" />
            </template>
            <div class="version">
              2023.03.01
            </div>
            <div class="name">Clion</div>
            <div class="detail">
              CLion 为 C、C++ 和 Rust 的原生跨平台开发而设计。 此外，它还为 CMake 语言、Python 和常见的网络技术（比如 JavaScript、XML、HTML、Markdown 等等）提供标准支持，同时也支持可以通过捆绑和代码库插件使用的所有其他语言。
            </div>
            <div class="rightArrow">
              <el-image :src="RightArrow" />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import {Search, TakeawayBox, ArrowRight,Briefcase,Stamp,CollectionTag,More} from "@element-plus/icons-vue";
import webstormImg from "../../assets/webStorm_Icon.png"
import ideaImg from "../../assets/IntelliJ_IDEA_Icon.svg.png"
import dataGrip from "../../assets/datagrip_Icon.png"
import RightArrow from "../../assets/images/right-arrow.png"
import Clion from "../../assets/Clion.svg"
import {useRouter} from "vue-router";
const router = useRouter();
const goToDetail = () => {
  router.push({
    path: '/application/detail'
  })
}
</script>

<style scoped>

.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  font-size: 30px;
  justify-content: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.panel {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel > div {
  color: white;
  font-size: 30px;
  font-weight: 700;
}

.panel > i {
  color: white;
  font-size: 30px;
  margin-right: 10px;
}

.infoBar {
  margin-top: 15px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
}

.subTitle {
  padding-left: 50px;
  font-weight: 100;
  cursor: pointer;
}

.right {
  float: right;
}

.right div, i {
  color: #0096ff;
  cursor: pointer;
}
.right div {
  padding-right: 5px;
}
.card {
  margin: 30px 0;
}
:deep(.el-card__header){
  border-bottom: none;
}
.applicationInfo {
  cursor: pointer;
  height: 338px;
}
.applicationInfo div {
  padding-top: 5px;
  transition: all .3s;
}
.applicationInfo .version {
  color: rgba(110,110,110,0.5);
  font-size: 20px;
}
.applicationInfo .name {
  color: rgba(0,0,0,0.5);
  font-weight: 700;
  font-size: 30px;
}
.applicationInfo:hover .name{
  color: rgba(0,0,0,1);
}
.applicationInfo .detail {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.subTitle:hover {
  color: #0096ff;
}
:deep(.rightArrow .el-image img) {
  transition: all .3s;
  width: 60px;
  height: 60px;
}
.applicationInfo:hover :deep(.rightArrow .el-image img) {
  width: 80px;
  height: 80px;
}
</style>