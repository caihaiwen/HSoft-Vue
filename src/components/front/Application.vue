<template>
  <div>
    <el-container>
      <el-aside class="typeAside" width="100px">
        <div class="info">
          分类
          <div class="type">
            全部软件
          </div>
          <div class="type">
            系统工具
          </div>
          <div class="type">
            应用软件
          </div>
          <div class="type">
            图形设计
          </div>
          <div class="type">
            媒体工具
          </div>
          <div class="type">
            编程开发
          </div>
        </div>
      </el-aside>
      <el-main >
        <div class="infoTool">
          <el-row align="middle">
            <el-col :span="3" class="title">
              全部软件
              <span class="count">(1190)</span>
            </el-col>
            <el-col :span="5" :offset="1">
              <el-row>
                <el-col :span="6">
                  全部
                </el-col>
                <el-col :span="6">
                  下载
                </el-col>
                <el-col :span="6">
                  评论
                </el-col>
                <el-col :span="6">
                  推荐
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="card">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-card shadow="hover" class="applicationInfo">
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
                <el-row class="tag">
                  <el-col :span="12" >
                      <i class="iconfont icon-downloadfill" />
                      <el-tag size="small">512</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <i class="iconfont icon-comment" />
                    <el-tag size="small" type="success">
                      31
                    </el-tag>
                  </el-col>
                  <el-col>
                    <i class="iconfont icon-date" />
                    <el-tag size="small" type="danger" >
                      2023-11-12
                    </el-tag>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover" class="applicationInfo">
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
                <el-row class="tag">
                  <el-col :span="12" >
                    <i class="iconfont icon-downloadfill" />
                    <el-tag size="small">512</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <i class="iconfont icon-comment" />
                    <el-tag size="small" type="success">
                      31
                    </el-tag>
                  </el-col>
                  <el-col>
                    <i class="iconfont icon-date" />
                    <el-tag size="small" type="danger" >
                      2023-11-12
                    </el-tag>
                  </el-col>
                </el-row>

              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover" class="applicationInfo">
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
                <el-row class="tag">
                  <el-col :span="12" >
                    <i class="iconfont icon-downloadfill" />
                    <el-tag size="small">512</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <i class="iconfont icon-comment" />
                    <el-tag size="small" type="success">
                      31
                    </el-tag>
                  </el-col>
                  <el-col>
                    <i class="iconfont icon-date" />
                    <el-tag size="small" type="danger" >
                      2023-11-12
                    </el-tag>
                  </el-col>
                </el-row>

              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover" class="applicationInfo">
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
                <el-row class="tag">
                  <el-col :span="12" >
                    <i class="iconfont icon-downloadfill" />
                    <el-tag size="small">512</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <i class="iconfont icon-comment" />
                    <el-tag size="small" type="success">
                      31
                    </el-tag>
                  </el-col>
                  <el-col>
                    <i class="iconfont icon-date" />
                    <el-tag size="small" type="danger" >
                      2023-11-12
                    </el-tag>
                  </el-col>
                </el-row>

              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import webstormImg from "../../assets/webStorm_Icon.png"
import ideaImg from "../../assets/IntelliJ_IDEA_Icon.svg.png"
import dataGrip from "../../assets/datagrip_Icon.png"
import Clion from "../../assets/Clion.svg"
</script>

<style scoped>
.typeAside {
  margin-top: 10px;
}
.typeAside .info,.type {
  padding-top: 20px;
}
.typeAside .info {
  font-size: 15px;
  color: rgba(110,110,110,0.7);
}
.typeAside .type {
  font-size: 17px;
  color: rgba(110,110,110,1);
  cursor: pointer;
  transition: all .3s;
}
.typeAside .type:hover {
  color: #0096ff;
}
.applicationInfo {
  cursor: pointer;
}
.applicationInfo div {
  padding-top: 5px;
  transition: all .3s;
}
.applicationInfo .version {
  color: rgba(110,110,110,0.5);
  font-size: 15px;
}
.applicationInfo .name {
  color: rgba(0,0,0,0.5);
  font-weight: 700;
  font-size: 20px;
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
.infoTool  {
  padding: 10px;
  margin-bottom: 10px;
}
.infoTool .title{
  font-size: 22px;

}
.infoTool .count {
  font-size: 15px;
  margin-left: 1px;
}
.tag i {
  //margin-top: 4px;
  margin-right: 6px;
}
:deep(.el-card__header){
  border-bottom: none;
}
.infoTool div :deep(.el-row div){
  cursor: pointer;
}
</style>