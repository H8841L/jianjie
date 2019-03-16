<template>
    <div class="present">
        <section class="pre-header">
            <h1>个 人 简 介</h1>
            <div class="header-imge"></div>
        </section>
        <section class="pre-body">
            <ul class="pre-things">
                <li>Name: <span class="dif"> 黄良</span></li>
                <li>Phonenumber:<span class="dif">18588419758</span></li>
                <li>Email:<span class="dif">3334920966@qq.com</span></li>
                <li>From:<span>MADE IN CHINA</span></li>
                <li>Hobby:<span>NBA CODE btc....</span></li>
            </ul>
            <div class="mywords">Myability:
                <p>熟悉HTML5 CSS JS JQUERY VUE WEBPACK</p>
               <p>出众的学习能力</p>
               <p>踏实肯干的工作态度</p>
               <p>有着实现理想的超强耐力</p>
               <p>对于新技术具有强烈的求知欲</p>
            </div>
        </section>
    </div>
</template>
<script>


import $ from 'jqeury'


export default {
    name:'mySelf', 
}
</script>
<style>
    .present{
        width: 100%;
    }
    .pre-header{
        width: 50%;
        margin: auto;
    }
    .pre-header h1{
        margin: 0 0 20px 0;
        padding-top: 20px;
        font-size: 35px;
        font-style: italic;
        font-family:  'Microsoft Yahei';
        font-weight: 700;
    }
    .pre-header .header-imge{
        display: inline-block;
        line-height: 163px;
        width: 145px;
        height: 163px;
        background: rgb(187, 165, 165);
    }
    .pre-body {
        padding-top: 50px;
        width: 50%;
        margin: auto;
    }
    .pre-body .pre-things li,.mywords{
        width: 50%;
        height: 40px;
        margin-bottom: 20px;
        text-align: left;
        font-weight: 700;
        font-size: 26px;
        font-style: italic;
        font-family: 'Franklin Gothic Medium';
    }
    .pre-body .pre-things li span{
        padding-left: 15px;
        font-style: normal;
        font-size: 19px;
    }
    .pre-body .pre-things li .dif{
        color: rgb(165, 65, 18);
        font-family: ' SimSun';
    }
    .pre-body .pre-things li .dif:hover{
        font-size: 22px;
        color: royalblue;
    }
    .mywords p{
        width: 100%;
        line-height: 18px;
        margin:20px 0 20px 55px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: chocolate;
    }
    .mywords p:hover{
        font-size: 22px;
        font-weight: 700;
        color:rgb(182, 16, 49);
    }
</style>

