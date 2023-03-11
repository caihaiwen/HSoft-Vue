<template>
  <div>
    <el-row style="height: 400px" align="middle">
      <el-col :span="3">
        <el-image style="width: 150px;height: 150px" :src="IdeaImg"/>
      </el-col>
      <el-col :span="8">
        <div class="name">Intellij IDEA</div>
        <div class="flex btn">
          <el-button-group style="position: relative">
            <el-button type="primary" :icon="Download">
              立即下载
            </el-button>
            <el-button type="primary" :icon="showVersionDialog?ArrowUp:ArrowDown" ref="versionDownArrow" @click="showVersionDialog=!showVersionDialog" @click.stop></el-button>
            <div class="versionDownArrow" :style="showVersionDialog?'opacity:1':'opacity:0'" @click.stop>
              <div class="item">
                <div class="versionID">
                    2022-02-01
                </div>
                <div class="downloadIcon">
                  <el-button text type="primary" :icon="Download"></el-button>
                </div>
              </div>
              <div class="item">
                <div class="versionID">
                  2022-02-01
                </div>
                <div class="downloadIcon">
                  <el-button text type="primary" :icon="Download"></el-button>
                </div>
              </div>
              <div class="item">
                <div class="versionID">
                  2022-02-01
                </div>
                <div class="downloadIcon">
                  <el-button text type="primary" :icon="Download"></el-button>
                </div>
              </div>
            </div>
          </el-button-group>

          <div style="margin-left: 30px">
            <el-button @click="thumpUp++">
              <template #icon>
                <i class="iconfont icon-thumbs-up" />
              </template>
              {{thumpUp}}
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="12" :offset="1">
        <el-carousel  indicator-position="none" arrow="never" height="400px" interval="2000">
          <el-carousel-item>
            <el-image :src="IdeaImgDetail1"/>
          </el-carousel-item>
          <el-carousel-item>
            <el-image :src="IdeaImgDetail2"/>
          </el-carousel-item>
          <el-carousel-item>
            <el-image :src="IdeaImgDetail3"/>
          </el-carousel-item>
        </el-carousel>

      </el-col>
    </el-row>
    <div style="margin-top: 30px;padding: 20px 30px">
      <el-card>
        <template #header>
          <el-row class="infoDetail" justify="center">
            <el-col :span="4">
              <div class="describe">大小</div>
              <div class="count">52.2M</div>
              <div class="unit">MB</div>
            </el-col>
            <el-col :span="4">
              <div class="describe">下载</div>
              <div class="count">90021</div>
              <div class="unit">次</div>
            </el-col>
            <el-col :span="4">
              <div class="describe">兼容性</div>
              <div class="count">7,10,11</div>
              <div class="unit">win</div>
            </el-col>
            <el-col :span="4">
              <div class="describe">类别</div>
              <div class="count">开发工具</div>
              <div class="unit">development tools</div>
            </el-col>
            <el-col :span="4">
              <div class="describe">更新日期</div>
              <div class="count">2020-10-30</div>
              <div class="unit">星期一</div>
            </el-col>
          </el-row>
        </template>
        <div class="flex align-center">
          <el-image style="width: 30px;height: 30px" :src="TipImg" />
          <div style="padding-left: 20px;color: #4ad295;font-size: 25px;font-weight: 700">装前必读</div>
        </div>
        <div v-html="markdownToHtml"></div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TipImg from "../../assets/images/testimonial.png"
import IdeaImg from "../../assets/IntelliJ_IDEA_Icon.svg.png"
import IdeaImgDetail1 from "../../assets/idea/bg-comparison.webp"
import IdeaImgDetail2 from "../../assets/idea/20223_New_UI_main_page.webp"
import IdeaImgDetail3 from "../../assets/idea/20223_Autowiring_main.webp"
import Computer from "../../assets/images/compute.jpg"
import {Download, ArrowDown,ArrowUp} from "@element-plus/icons-vue";
//@ts-ignore
import { marked } from "marked"
let showVersionDialog = ref(false)
import hljs from 'highlight.js'
const renderer = new marked.Renderer();
let thumpUp = ref(1024);
marked.setOptions({
  renderer: renderer,
  gfm: true,
  pedantic: false,
  sanitize: false,
  // highlight: (code,lang) => hljs.highlight(code,{language:'js'}).value
})
let markdown = ref("# Hello,World")
const markdownToHtml = shallowRef('');
markdownToHtml.value = marked(markdown.value)

onMounted( () => {
  window.addEventListener('click',(e) => {
    if ( showVersionDialog.value )
      showVersionDialog.value = false
  })
})
</script>

<style scoped>
.name {
  font-size: 30px;
}

.btn {
  margin-top: 10px;
}

.describe, .unit {
  color: rgba(110, 110, 110, .5);
  font-size: 13px;
}

.count {
  font-size: 19px;
  padding: 10px 0;
}


.infoDetail :deep(.el-col) {
  text-align: center;
}

:deep(.el-carousel__item), :deep(.el-image), :deep(.el-image__inner), :deep(.el-carousel__container), :deep(.el-carousel) {
  border-radius: 10px;
}

.versionDownArrow {
  position: absolute;
  background-color: white;
  transition: all .3s;
  z-index: 0;
  top: 32px;
  padding:  10px;
}
.versionDownArrow .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.versionDownArrow .item .versionID{
  color: rgba(110,110,110,0.7);
  font-size: 13px;
}
</style>