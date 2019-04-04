<template>
    <div id="app">
        <router-view/>
        <!-- 工具栏 -->
        <div class="toolbar">
            <span class="toolbar_item"  v-if="item.id != 0 || isShowTop" v-for="item,index in toolbarList" :key="index" @mouseenter="toggleToolbar(item.id)" @mouseleave="toggleToolbar(item.id)" @click="handle_toolbar(item.id)">
                <span class="toolbar_text" v-if="item.isShow" >{{ item.text }}</span>
                <i :class="item.className"></i>
            </span>
            <div class="qrcode" v-if="isShowCode">
                <img src="static/imgs/code.png">
            </div>
        </div>

        <!-- 弹出层 -->
        <el-dialog
          title="意见反馈"
          :visible.sync="dialogVisible"
          width="30%">
          <div class="suggestion">
            <el-input type="textarea" placeholder="请输入内容（不超过200字...）" rows="10" @keyup.enter.native="submit_sug"></el-input>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit_sug">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
          return {
            toolbarList: [
                {
                  id: 0,
                  isShow: false,
                  className: 'fa fa-arrow-up',
                  text: '回到顶部'
                },{
                  id: 1,
                  isShow: false,
                  className: 'fa fa-edit',
                  text: '意见反馈'
                },{
                  id: 2,
                  isShow: false,
                  className: 'fa fa-qrcode',
                  text: ''
                },
              ],
              isShowTop: false,
              isShowCode: false,
              dialogVisible: false,
          }
        },
        mounted: function(){
          var that = this;
          // 监听页面刷新
           window.addEventListener('unload', this.saveState)

           window.onscroll=function () {
            //鼠标滚轮滚动距离超过10像素时，回到顶部按钮才显示
            let osTop = document.documentElement.scrollTop || document.body.scrollTop
            if(osTop>300)
              that.isShowTop=true;
            else
              that.isShowTop=false;
            }
        },
        methods: {
          toggleToolbar(idx) {
              this.toolbarList[idx].isShow = !this.toolbarList[idx].isShow;
              if(idx == 2)
                this.isShowCode = !this.isShowCode;
            },
            handle_toolbar(idx) {
              // console.log('idx', idx)
              switch(idx){
                case 0: {
                  let t = $(document).scrollTop();
                  var timer = setInterval(function(){           
                    if(t <= 0){
                      $(document).scrollTop(0);
                      clearInterval(timer);
                      return;
                    }
                    t -= 80;
                    $(document).scrollTop(t);
                  }, 10);
                  this.toolbarList[0].isShow = false;
                  break;
                };
                case 1: {
                  this.dialogVisible = true;
                }
              }
            },
          // 页面刷新时将state状态存入到sessionStorage
          saveState: function(){
            
          },
            // 提交反馈信息
            submit_sug() {
              this.dialogVisible = false;
              this.$message({
                type: 'success',
                message: '提交成功！感谢您的反馈。'
              })
            }
        }
    }
</script>

<style>
    @import "./assets/css/style.css";
    @import "./assets/css/font/IconFonts.css";
    .toolbar{position: fixed;bottom: 20px;right: 10%;z-index: 10;display: flex;flex-direction: column;}
    .toolbar_item{background: #fff;cursor: pointer;width: 50px;height: 50px;line-height: 50px;font-size: 1.2rem;text-align: center;color:rgb(85,85,85);}
    .toolbar_text{font-size: .7rem;}
    .toolbar_item:hover{background: rgb(222,222,222)}
    .qrcode{position: absolute;bottom: 0;left: -200px;width: 150px;height: 150px;}
</style>
