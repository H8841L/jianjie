<template>
    <div id="app">
        <ul class="nav">
            <li><router-link to="/"><img src="" alt=""></router-link></li>
            <li><router-link to="/home">个人信息</router-link></li>
            <li><router-link to="/edu">教育经历</router-link></li>
            <li><router-link to="/jobs">工作经历</router-link></li>
            <li><router-link to="/other">OTHERTHINGS</router-link></li>  
        </ul>
        <div class="content">
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
export default {
    name:"app"
}
</script>
<style>
    #app{
        text-align: center;
    }
    .nav{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width:100%;
        height: 45px;
        background: #1B458D;
        z-index: 9999;
    }
    .nav li{
        display:inline-block;
        flex: 1;
        color:#fff;
    }
    .nav li:hover{
        background:#183b77;
    }
    .nav a{
        text-decoration: none;
        line-height: 45px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        width: 100%;
        color: #fff;
    }
    .nav img{
        position: relative;
        top:4px;
        left:5px;
        width: 57px;
    }
    .content{
        margin-top: 45px;
    }
</style>


