<template>
    <div id="app">
        <el-container class="el-container">
            <el-header class="el-header">
                <div style="display: flex;">
                    <div>
                        <img class="img_sty" src="./statics/eve_logo.png" />
                    </div>
                    <div style="margin: 10px;text-align: left;">
                        <div style="font-size: 20px;">Tranquility</div>
                        <span style="font-size: 12px;">宁静</span>
                    </div>
                </div>
                <el-menu class="el-menu-demo" mode="horizontal" background-color="#363636" text-color="#fff" active-text-color="#65b0ff">
                    <el-menu-item index="1" @click="$router.push('home')">主页</el-menu-item>
                    <!-- <el-menu-item index="2">我的工作台</el-menu-item>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">订单管理 </el-menu-item> -->
                </el-menu>
            </el-header>
            <el-container>
                <el-aside class="el_aside" width="200px">
                    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#4f5758" text-color="#fff" active-text-color="#65b0ff"
                        style="border: none;text-align: left;">
                        <el-menu-item index="1" @click="$router.push('home')">
                            <i class="el-icon-menu"></i>
                            <span slot="title">主页</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="$router.push('frequentlyUsed')">
                            <i class="el-icon-menu"></i>
                            <span slot="title">常用网站</span>
                        </el-menu-item>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>地图</span>
                            </template>
                            <el-menu-item index="3-1" @click="$router.push('influence')">联盟</el-menu-item>
                            <el-menu-item index="3-2" @click="$router.push('Coalitioninfluence')">联盟群</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>工具</span>
                            </template>
                            <!-- <el-menu-item index="1-1" @click="$router.push('influence')">联盟</el-menu-item> -->
                            <el-menu-item index="4-1" @click="$router.push('express')">快递计算器</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }

</script>

<style>
    body {
        margin: 0px;
    }

    html,
    body {
        height: 100%;
        overflow: hidden;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        overflow: hidden;
        height: 100%;
    }

    #app .el-header {
        display: flex;
        justify-content: space-between;
        padding: 0;
        background-color: #363636;
        color: #FFFFFF;
    }

    #app .el-container {
        overflow: hidden;
        height: 100%;
    }

    .el_aside {
        /* width: 201px; */
        background-color: #4f5758;
    }

    #app .img_sty {
        padding: 15px;
        width: 78px;
    }

</style>
