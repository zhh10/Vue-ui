<template>
    <div>
        <h1>Sticky粘性布局</h1>
        <el-sticky>
            <div class="grid-content bg-purple" style="text-align:center;">
                <el-input icon="search"></el-input>
            </div>
        </el-sticky>
        <h1>基础布局</h1>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
         <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <h1>分栏间隔</h1>
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <h1>分栏偏移offset</h1>
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6" :offset="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <h1>分栏偏移push</h1>
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6" :push="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <h1>分栏偏移pull</h1>
        <el-row>
            <el-col :span="6" :pull="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <h1>对齐方式</h1>
        <el-row type="flex">
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <h1>响应式布局</h1>
        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <h1>基于断点的隐藏类</h1>
        <el-row class="hidden-xs-only">
          <el-col>
              <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>

        <h1>容器1</h1>
        <el-container>
            <el-header class='bg-purple-light'>
                Header
            </el-header>
            <el-main class="bg-purple-dark">
                Main
            </el-main>
            <el-footer class="bg-purple">
                footer
            </el-footer>
        </el-container>
        <h1>容器2</h1>
        <el-container>
            <el-aside class="bg-purple-light">Aside</el-aside>
            <el-main class="bg-purple">Main</el-main>
        </el-container>
        <h1>容器3</h1>
        <el-container>
            <el-header class='bg-purple-light' height="30px">
                Header
            </el-header>
            <el-container>
                <el-aside class="bg-purple" width="200px">Aside</el-aside>
                <el-main class="bg-purple-dark">
                    Main
                </el-main>
            </el-container>
            <el-footer class="bg-purple-light" height="30px">
                footer
            </el-footer>
        </el-container>
        <h1>容器4</h1>
        <el-container>
            <el-header class='bg-purple-light' height="30px">
                Header
            </el-header>
            <el-container>
                <el-main class="bg-purple-dark">
                    Main
                </el-main>
                <el-aside class="bg-purple" width="200px">Aside</el-aside>
            </el-container>
            <el-footer class="bg-purple-light" height="30px">
                footer
            </el-footer>
        </el-container>
        <h1>Icon</h1>
        <el-row>
            <el-icon name="loading" style="font-size:25px"></el-icon>
            <el-icon name="delete" style="font-size:25px"></el-icon>
            <el-icon name="setting" style="font-size:25px"></el-icon>
            <el-icon name="user" style="font-size:25px"></el-icon>
            <el-icon name="star-on" style="font-size:25px"></el-icon>
        </el-row>
        <h1>默认按钮</h1>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <h1>朴素按钮</h1>
        <el-row>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
            <el-button type="danger" plain>危险按钮</el-button>
        </el-row>
        <h1>圆角按钮1</h1>
        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </el-row>
        <h1>圆角按钮2</h1>
        <el-row>
            <el-button circle icon="el-icon-success"></el-button>
            <el-button type="primary" circle icon="el-icon-s-ticket"></el-button>
            <el-button type="success" circle icon="el-icon-delete-solid"></el-button>
            <el-button type="info" circle icon="el-icon-delete"></el-button>
            <el-button type="warning" circle icon="el-icon-user-solid"></el-button>
            <el-button type="danger" circle icon="el-icon-phone"></el-button>
        </el-row>
        <h1>禁用按钮</h1>
        <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>
        <br />
        <el-row>
            <el-button plain disabled>朴素按钮</el-button>
            <el-button type="primary" plain disabled>主要按钮</el-button>
            <el-button type="success" plain disabled>成功按钮</el-button>
            <el-button type="info" plain disabled>信息按钮</el-button>
            <el-button type="warning" plain disabled>警告按钮</el-button>
            <el-button type="danger" plain disabled>危险按钮</el-button>
        </el-row>
        <h1>文字按钮</h1>
        <el-row>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text" disabled>文字按钮</el-button>
        </el-row>
        <h1>图标按钮</h1>
        <el-row>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            <el-button type="primary">加载中<i class="el-icon-loading el-icon--right"></i></el-button>
        </el-row>
        <h1>图标尺寸</h1>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
        </el-row>
        <h1>按钮组</h1>
        <el-row>
            <el-button-group>
                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="primary">更多</el-button>
                <el-button type="primary" icon="el-icon-arrow-right">下一页</el-button>
            </el-button-group>
        </el-row>
        <br />
        <el-row>
            <el-button-group>
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
            </el-button-group>
        </el-row>
        <br />
        <h1>autofocus</h1>
        <el-row>
            <el-button type="primary" autofocus>自动聚焦</el-button>
            <el-button type="primary">默认按钮</el-button>
        </el-row>
        <br />
        <h1>native-type</h1>
        <el-row>
            <el-button type="primary" native-type="submit">提交</el-button>
            <el-button type="primary" native-type="reset">重置</el-button>
        </el-row>
        <h1>Click事件</h1>
        <el-row>
            <el-button @click="handleClick($event)">点击事件</el-button>
        </el-row>
        <h1>Link文字链接</h1>
        <div>
            <el-link>默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
        </div>
        <h1>禁用链接</h1>
        <div>
            <el-link disabled>默认链接</el-link>
            <el-link type="primary" disabled>主要链接</el-link>
            <el-link type="success" disabled>成功链接</el-link>
            <el-link type="warning" disabled>警告链接</el-link>
            <el-link type="danger" disabled>危险链接</el-link>
            <el-link type="info" disabled>信息链接</el-link>
        </div>
        <h1>下划线</h1>
        <div>
            <el-link :underline=false>无下划线</el-link>
            <el-link>有下划线</el-link>
        </div>
        <h1>图标链接</h1>
        <div>
            <el-link icon="el-icon-edit" style="margin-right:30px;">编辑</el-link>
            <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
        </div>
        <h1>输入框</h1>
        <el-row>
            <el-input v-model="message" placeholder="请输入内容"></el-input>
            {{message}}
        </el-row>
        <h1>禁用输入框</h1>
        <el-row>
            <el-input disabled placeholder="请输入内容"></el-input>
        </el-row>
        <h1>可清空输入框</h1>
        <el-row>
            <el-input clearable v-model="message1"></el-input>
        </el-row>
        <h1>密码框</h1>
        <el-row>
            <el-input show-password v-model="password"></el-input>
        </el-row>
        <h1>带icon的输入框</h1>
        <el-row>
            <el-input icon="user" style="margin-right:15px;"></el-input>
            <el-input icon="search"></el-input>
        </el-row>
        <h1>文本输入框</h1>
        <el-row>
            <el-textarea :rows="2"/>
        </el-row>
        <el-row>
            <el-textarea :row="1"></el-textarea>
        </el-row>
        <h1>标签页</h1>
        <el-row>
            <el-tabs :activeIndex.sync="activeIndex">
                <el-tabs-header>
                    <el-tabs-header-item name="1">Jquery</el-tabs-header-item>
                    <el-tabs-header-item name="2">Vue</el-tabs-header-item>
                    <el-tabs-header-item name="3" disabled>Webpack</el-tabs-header-item>
                    <el-tabs-header-item icon="info" name="4">React</el-tabs-header-item>
                </el-tabs-header>
                <el-tabs-content>
                    <el-tabs-content-item name="1">这里是Jquery</el-tabs-content-item>
                    <el-tabs-content-item name="2">这里是Vue</el-tabs-content-item>
                    <el-tabs-content-item name="3">这里是Webpack</el-tabs-content-item>
                    <el-tabs-content-item name="4">这里是React</el-tabs-content-item>
                </el-tabs-content>
            </el-tabs>
        </el-row>
        <h1>左侧标签页</h1>
        <el-row>
            <el-col :span='12'>
                <el-tabs :activeIndex.sync="activeIndex" mode="vertical">
                    <el-tabs-header>
                        <el-tabs-header-item icon="user" name="1">Jquery</el-tabs-header-item>
                        <el-tabs-header-item icon="question" name="2">Vue</el-tabs-header-item>
                        <el-tabs-header-item name="3" disabled>Webpack</el-tabs-header-item>
                        <el-tabs-header-item name="4">React</el-tabs-header-item>
                    </el-tabs-header>
                    <el-tabs-content>
                        <el-tabs-content-item name="1">这里是Jquery</el-tabs-content-item>
                        <el-tabs-content-item name="2">这里是Vue</el-tabs-content-item>
                        <el-tabs-content-item name="3">这里是Webpack</el-tabs-content-item>
                        <el-tabs-content-item name="4">这里是React</el-tabs-content-item>
                    </el-tabs-content>
                </el-tabs>
            </el-col>
        </el-row>
        <h1>折叠面板</h1>
        <el-row>
            <el-collapse :selected.sync = "selected">
                <el-collapse-item title="Vue" name="1">
                    Vue是一个渐进式JavaScript 框架
                </el-collapse-item>
                <el-collapse-item title="React" name="2">
                    React用于构建用户界面的JavaScript库
                </el-collapse-item>
                <el-collapse-item title="Webpack" name="3">
                    Webpack是一个现代的JavaScript应用程序的静态模块打包器
                </el-collapse-item>
                <el-collapse-item title="Jquery" name="4">
Jquery是一个高效的、精简并且功能丰富的JavaScript工具库
                </el-collapse-item>
            </el-collapse>
        </el-row>
        <br />
        <br />
        <h1>Singal类型折叠面板</h1>
        <el-row>
            <el-collapse :selected.sync = "selected" mode="signal">
                <el-collapse-item title="Vue" name="1">
                    Vue是一个渐进式JavaScript 框架
                </el-collapse-item>
                <el-collapse-item title="React" name="2">
                    React用于构建用户界面的JavaScript库
                </el-collapse-item>
                <el-collapse-item title="Webpack" name="3">
                    Webpack是一个现代的JavaScript应用程序的静态模块打包器
                </el-collapse-item>
                <el-collapse-item title="Jquery" name="4">
                    Jquery是一个高效的、精简并且功能丰富的JavaScript工具库
                </el-collapse-item>
            </el-collapse>
        </el-row>
        <br />
        <br />
        <h1>分页器</h1>
        <el-row>
            <el-pager :totalPage='totalPage'
            :currentPage.sync="currentPage"
            @pageChange="pageChange"></el-pager>
        </el-row>
        <h1>表格</h1>
        <el-row>
            <el-Table  :border="false" :columns="columns" :dataSource="dataSource"></el-Table>
        </el-row>
        <h1>可选表格</h1>
        {{selectArray}}
        <el-row>
            <el-Table checkable :selectArray.sync="selectArray"
            :columns="columns" :dataSource="dataSource"
            @selectItem="selectItem"></el-Table>
        </el-row>
        <h1>紧凑型表格</h1>
        {{selectArray}}
        <el-row>
            <el-Table compact checkable :selectArray.sync="selectArray"
            :columns="columns" :dataSource="dataSource"></el-Table>
        </el-row>
        <h1>固定表头</h1>
        <el-row>
            <el-Table 
            checkable :selectArray.sync="selectArray"
            fixHeader :height="200" :columns="columns" :dataSource="dataSource1">
                <template v-slot:default="item">
                    <el-button type="text" size='small' @click="edit(item)">编辑</el-button>
                    <el-button type="text" size="small" @click="deleteItem(item)">删除</el-button>
                </template>
            </el-Table>
        </el-row>
        <h1>可编辑表格</h1>
        <el-row>
            <el-Table :height="400" :columns="columns" :dataSource="dataSource">
                <template v-slot:default="item">
                    <el-button type="text" size='small' @click="edit(item)">编辑</el-button>
                    <el-button type="text" size="small" @click="deleteItem(item)">删除</el-button>
                </template>
            </el-Table>
        </el-row>
        <h1>星级评分</h1>
        {{score}}
        <el-row>
            <el-rate v-model="score"></el-rate>
        </el-row>
        <h1>只读</h1>
        <el-row>
            <el-rate disabled v-model="score1"></el-rate>
        </el-row>
        <h1>展示文字</h1>
        <el-row>
            <el-rate show-text v-model="score"></el-rate>
        </el-row>
        <h1>文件上传</h1>
        <div style="width:360px;">
            <el-upload :action="action" :method="method" :accept="accept" :name="name"
                    :parseResponse="parseResponse"
                    :fileList.sync="fileList"
                    :showTip="showTip"
                    :on-remove="handleRemove"
            >
            </el-upload>
        </div>
        <br />
        <br />
        <br />
        <h1>文件大小限制</h1>
        <div style="width:360px">
            <el-upload :action="action" :method="method" :accept="accept" :name="name"
                :parseResponse="parseResponse"
                :fileList.sync="fileList1"
                :showTip="showTip"
                :on-remove="handleRemove"
                :sizeLimit="sizeLimit"
            ></el-upload>
        </div>
        <h1>禁用文件上传</h1>
        <div style="width:360px">
            <el-upload :action="action" :method="method" :accept="accept" :name="name"
                :parseResponse="parseResponse"
                :fileList.sync="fileList1"
                :showTip="showTip"
                :on-remove="handleRemove"
                :sizeLimit="sizeLimit"
                disabled
            ></el-upload>
        </div>
        {{fileList2}}
        <h1>多文件上传</h1>
        <div style="width:360px">
            <el-upload :action="action" :method="method" :accept="accept" :name="name"
                :parseResponse="parseResponse"
                :fileList.sync="fileList2"
                :showTip="showTip"
                :on-remove="handleRemove"
                multiple
            ></el-upload>
        </div>
        <h1>面包屑(默认分隔符)</h1>
        <el-breadcrumb>
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item>管理系统</el-breadcrumb-item>
            <el-breadcrumb-item>学生管理</el-breadcrumb-item>
            <el-breadcrumb-item>课堂点名</el-breadcrumb-item>
        </el-breadcrumb>
        <h1>自定义分隔符</h1>
        <el-breadcrumb separator='arrow-right'>
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item to="/">管理系统</el-breadcrumb-item>
            <el-breadcrumb-item>学生管理</el-breadcrumb-item>
            <el-breadcrumb-item>课堂点名</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator='s-promotion'>
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item replace="/">管理系统</el-breadcrumb-item>
            <el-breadcrumb-item>学生管理</el-breadcrumb-item>
            <el-breadcrumb-item>课堂点名</el-breadcrumb-item>
        </el-breadcrumb>
        <h1>消息提示(支持html字段)</h1>
        <el-button @click="handleSuccess">成功</el-button>
        <el-button @click="handleInfo">信息</el-button>
        <el-button @click="handleWarning">警告</el-button>
        <el-button @click="handleError">危险</el-button>
        <h1>消息弹框(支持html字段)</h1>
        <el-button @click="handleConfirm">确认消息</el-button>
        <el-button @click="handleNotice">提示消息</el-button>
        <el-button @click="handleWarn">警告弹框</el-button>
        <h1>Switch开关</h1>
        <el-row>
            <el-switch v-model="switchValue"></el-switch>
        </el-row>
        <el-row>
            <el-switch disabled></el-switch>
        </el-row>
        <el-row>
            <el-switch trueColor="red" falseColor="blue" 
            trueText='开启服务' falseText="暂不开启"
            v-model="switchValue" trueTextColor="red" falseTextColor="blue"></el-switch>
        </el-row>
        <h1>Notify通知</h1>
        <el-row>
            <el-button @click="handleNotify">通知</el-button>
        </el-row>
        <h1>四个方向</h1>
        <el-row>
            <el-button @click="handleNotify1">左上</el-button>
            <el-button @click="handleNotify2">左下</el-button>
            <el-button @click="handleNotify3">右上</el-button>
            <el-button @click="handleNotify4">右下</el-button>
        </el-row>
        <h1>Cascader级联选择器</h1>
        <div>
            {{Cascader_value}}
            <el-cascader :dataSource="Cascader_data" 
            :height="Cascader_height"
            :value.sync="Cascader_value"></el-cascader>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        {{slidesSelected}}
        <h1>轮播图</h1>
        <el-slides :selected.sync="slidesSelected" width="300px" height="200px" showDots type="slide">
            <el-slides-item name="1"><div style="width:300px;height:200px;" class="bg-purple">1</div></el-slides-item>
            <el-slides-item name="2"><div style="width:300px;height:200px;" class="bg-purple-light">2</div></el-slides-item>
            <el-slides-item name="3"><div style="width:300px;height:200px;" class="bg-purple-dark">3</div></el-slides-item>
        </el-slides>
        <h1>淡入淡出</h1>
        <el-row>
            <el-slides :selected.sync="slidesSelected1" width="300px" height="200px" type="fade" showDots>
                <el-slides-item name="1"><div style="width:300px;height:200px;" class="bg-purple">1</div></el-slides-item>
                <el-slides-item name="2"><div style="width:300px;height:200px;" class="bg-purple-light">2</div></el-slides-item>
                <el-slides-item name="3"><div style="width:300px;height:200px;" class="bg-purple-dark">3</div></el-slides-item>
            </el-slides>
        </el-row>
        <h1>展示按钮</h1>
        <el-row>
            <el-slides :selected.sync="slidesSelected2" width="300px" height="200px" showDots showBtn>
                <el-slides-item name="1"><div style="width:300px;height:200px;" class="bg-purple">1</div></el-slides-item>
                <el-slides-item name="2"><div style="width:300px;height:200px;" class="bg-purple-light">2</div></el-slides-item>
                <el-slides-item name="3"><div style="width:300px;height:200px;" class="bg-purple-dark">3</div></el-slides-item>
            </el-slides>
        </el-row>
        <h1>指示器在外面下方</h1>
        <el-row>
        <el-slides :selected.sync="slidesSelected" direction="outside" width="300px" height="200px" showDots type="slide">
            <el-slides-item name="1"><div style="width:300px;height:200px;" class="bg-purple">1</div></el-slides-item>
            <el-slides-item name="2"><div style="width:300px;height:200px;" class="bg-purple-light">2</div></el-slides-item>
            <el-slides-item name="3"><div style="width:300px;height:200px;" class="bg-purple-dark">3</div></el-slides-item>
        </el-slides>
        </el-row>
        <h1>步骤条</h1>
        <el-button @click="stepClick">Next</el-button>
        <el-steps :active="StepsActive">
            <el-step title="注册"></el-step>
            <el-step title="登录"></el-step>
            <el-step title="购买"></el-step>
        </el-steps>
        <el-steps :active="StepsActive">
            <el-step title="编辑" icon="edit" description="首先进行编辑首先进行编辑首先进行编辑首先进行编辑首先进行编辑"></el-step>
            <el-step title="上传" icon="upload" description="然后进行上传"></el-step>
            <el-step title="成功" icon="folder-checked" description="上传成功！"></el-step>
        </el-steps>
        <h1>拖拽</h1>
        {{dragData}}
        <el-drag-wrap :data.sync="dragData">
            <el-drag-item v-for="(data,index) in dragData" :key="index" >
                <div style="width:100px;height:100px;background-color:#abcdef;margin-bottom:10px;">{{data}}</div>
            </el-drag-item>
        </el-drag-wrap>
    </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: '周航好帅',
      message1: '1',
      password: '',
      activeIndex: '1',
      selected: [],
      totalPage: 20,
      SignaltotalPage: 1,
      currentPage: 1,
      columns: [{ name: '姓名', field: 'name',width: 200 }, { name: '年龄', field: 'age',width: 150 }, { name: '国籍', field: 'country'}],
      dataSource: [{
        id: 1, name: 'uzi', age: 20, country: 'Chine',
      },
      {
        id: 2, name: 'faker', age: 20, country: 'Korea',
      },
      {
        id: 3, name: 'smlz', age: 20, country: 'China',
      },
      {
        id: 4, name: 'ming', age: 20, country: 'China',
      }],
      dataSource1: [{
        id: 1, name: 'uzi', age: 20, country: 'Chine',
      },
      {
        id: 2, name: 'faker', age: 20, country: 'Korea',
      },
      {
        id: 3, name: 'smlz', age: 20, country: 'China',
      },
      {
        id: 4, name: 'ming', age: 20, country: 'China',
      },
      {
        id: 5, name: 'ming', age: 20, country: 'China',
      },{
        id: 6, name: 'ming', age: 20, country: 'China',
      },
      {
        id: 7, name: 'ming', age: 20, country: 'China',
      },
      {
        id: 8, name: 'ming', age: 20, country: 'China',
      },
      {
        id: 9, name: 'ming', age: 20, country: 'China',
      }],
      selectArray: [],
      height: 400,
      score:0,
      score1:2,
      action:'http://47.114.135.161:8080/upload',
      method:'POST',
      accept:'image/jpg',
      name:'file',
      parseResponse: res => JSON.parse(res).url ,
      fileList:[],
      fileList1:[],
      fileList2:[],
      showTip:'点击上传文件',
      handleRemove(file,fileList){
          let index = fileList.lastIndexOf(file)
          fileList.splice(index,1)
          console.log(fileList)
      },
      sizeLimit:1,
      switchValue:false,
      Cascader_data:[{
          name:"广东",
          children:[{name:"广州",children:[{name:"天河区"},{name:"南沙区"},{name:"黄浦区"},{name:"荔湾区"},{name:"越秀区"},{name:"从化区"},{name:"增城区"},{name:"白云区"},{name:"海珠区"}]},
                    {name:"深圳",children:[{name:"南山区"},{name:"福田区"},{name:"罗湖区"}]},
                    {name:"潮州",children:[{name:"湘桥区"},{name:"潮安区"},{name:"饶平县"}]}]
        },{
           name:"浙江",
           children:[{name:"杭州",children:[{name:"上城区"},{name:"下城区"}]},
                     {name:"宁波"}]
        }],
      Cascader_height:'200px',
      Cascader_value:[],
      slidesSelected:"1",
      slidesSelected1:"1",
      slidesSelected2:"1",
      StepsActive:0,
      stepClick:()=>{
          if(this.StepsActive<=2){
              this.StepsActive += 1
          }else{
              this.StepsActive = 0
          }
      },
      dragData : [1,2,3,4,5,6,7]
    }
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
    pageChange(val) {
      console.log(val);
    },
    selectItem(e) {
      console.log(e);
    },
    edit(item) {
      console.log(item);
    },
    deleteItem(item) {
      console.log(item);
    },
    handleSuccess(){
        this.$success({message:"这是一个好消息",showClose:true})
    },
    handleInfo(){
        this.$info({message:'<i>这是一个信息</i>'})
    },
    handleWarning(){
        this.$warning({message:'这是一个警告信息'})
    },
    handleError(){
        this.$error({message:'这是一个错误信息'})
    },
    handleConfirm(){
        this.$confirm("你确定要删除吗","提示",{
            "confirmButtonText":"确定",
            "cancelButtonText":"取消",
            "type":"warning"
        }).then(res => {this.$success({message:'成功删除'})})
          .catch(err => {this.$info({message:'取消删除'})})
    },
    handleNotice(){
        this.$confirm("你已经在使用ypa组件库了","提示",{
            "confirmButtonText":'确定',
            'type':'info'
        }).then(res => {console.log('haha')})
    },
    handleWarn(){
        this.$confirm("你的余额已不足，请及时充值","警告",{
            "confirmButtonText":"充值",
            "type":"error"
        }).then(res => {this.$success({message:'充值成功'})})
    },
    handleNotify(){
        this.$notify({
            title:"提示",
            message:"这是一条消息",
            // showClose:true,
            type:'success'
        })
    },
    handleNotify1(){this.$notify({title:'提示',message:'左上消息',position:'top-left'})},
    handleNotify2(){this.$notify({title:'提示',message:'左下消息',position:'bottom-left'})},
    handleNotify3(){this.$notify({title:'提示',message:'右上消息',position:'top-right'})},
    handleNotify4(){this.$notify({title:'提示',message:'右下消息',position:'bottom-right'})}
  },
};
</script>

<style lang="scss">
  .bg-purple-dark {
    background: #3d8fee;
  }
  .grid-content {
    width:100%;
    min-height: 36px;
    border-radius: 4px;
  }
  .bg-purple {
    background: #7CB8FF;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
