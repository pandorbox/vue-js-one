<template>
    <div>
        <div class="container " >
            <div class="title"><span>测试demo</span></div>
            <div class="topnav clearfix" >
                <router-link to="xxk" exact>
                    <span>选项卡</span>
                </router-link>
                <router-link to="select">
                    <span>选择框</span>
                </router-link>
                <router-link to="form" >
                    <span>表单验证</span>
                </router-link>
            </div>
            <div class="right">
                 <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style>
    .title{
        line-height: 40px;
        text-align: center;
        background-color: #ccc;
        margin-bottom: 50px;
    }
    a{
        color: black;
    }
    a:hover{
        color: black;
    }
    a:focus{
        color: white;
    }
    .router-link-active{
        color: white;
        background-color: #ccc;
    }
    .topnav>span{
        display: block;
    }
    .topnav{
        float: left;
        text-align: center;
        border: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        line-height: 40px;
        width: 10%;
    }
    .right{
        width: 80%;
        margin-left: 10%;
        float: left;
    }
</style>

<script type="text/ecmascript-6">


</script>
