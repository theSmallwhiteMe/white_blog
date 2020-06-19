<template>
    <div>
        <header-nav></header-nav>
        <a-menu class="menus main-p"
                    mode="horizontal">
                <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
                <a-menu-item key="app"> <a-icon type="appstore" />Navigation Two </a-menu-item>
                <a-sub-menu>
                    <span slot="title" class="submenu-title-wrapper">
                        <a-icon type="setting" />Navigation Three - Submenu
                    </span>
                    <a-menu-item-group title="Item 1">
                        <a-menu-item key="setting:1">
                            Option 1
                        </a-menu-item>
                        <a-menu-item key="setting:2">
                            Option 2
                        </a-menu-item>
                    </a-menu-item-group>
                    <a-menu-item-group title="Item 2">
                        <a-menu-item key="setting:3">
                            Option 3
                        </a-menu-item>
                        <a-menu-item key="setting:4">
                            Option 4
                        </a-menu-item>
                    </a-menu-item-group>
                </a-sub-menu>
                <a-menu-item key="alipay">
                    Navigation Four - Link
                </a-menu-item>
            </a-menu>
        <div class="box main-m">
            <a-menu class="menus-vertical"
                    :default-selected-keys="['1']"
                    :default-open-keys="['sub1']"
                    mode="inline"
                    :inline-collapsed="collapsed">
                <a-menu-item key="1">
                    <a-icon type="pie-chart" />
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="desktop" />
                    <span>Option 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="inbox" />
                    <span>Option 3</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                    <a-menu-item key="5">
                        Option 5
                    </a-menu-item>
                    <a-menu-item key="6">
                        Option 6
                    </a-menu-item>
                    <a-menu-item key="7">
                        Option 7
                    </a-menu-item>
                    <a-menu-item key="8">
                        Option 8
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                    <a-menu-item key="9">
                        Option 9
                    </a-menu-item>
                    <a-menu-item key="10">
                        Option 10
                    </a-menu-item>
                    <a-sub-menu key="sub3" title="Submenu">
                        <a-menu-item key="11">
                            Option 11
                        </a-menu-item>
                        <a-menu-item key="12">
                            Option 12
                        </a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
            </a-menu>
            <div class="left-container">
                <div class="banner">
                    <transition name="fade">
                        <div v-show="time == 1">
                            <img :src="img1">
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-show="time == 2">
                            <img :src="img2">
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-show="time == 3">
                            <img :src="img3">
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerNav from "../components/header-nav";
    export default {
        name: "index",
        components:{
            headerNav,
        },
        data() {
            return {
                collapsed:false,
                img1:require('../assets/banner1.jpg'),
                img2:require('../assets/banner2.jpg'),
                img3:require('../assets/banner3.jpg'),
                time:1,
            };
        },
        mounted() {
            let _this = this
            setInterval(function () {
                _this.time++
                if (_this.time == 4){
                    _this.time = 1
                }
            },1500)
        }
    }
</script>

<style scoped>
    .box{
        display: -webkit-flex; /* Safari */
        display: flex;
    }
    .menus {
        text-align: left;
        background: #0c273c;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        height: 48px;
        width: 100%;
    }
    .menus li:nth-child(2){
        background: #ff5b5b;
        width: 188px;
    }
    .menus>.ant-menu-item-active{
        color: #FFFFFF !important;
    }

    .menus-vertical{
        width: 188px;
        text-align: left;
        border: none;
    }
    .menus-vertical li {
        border:1px dashed #ededed !important;
        border-top: none !important;
        margin: 0 !important;
    }
    .menus-vertical .ant-menu-item-selected {
        background: #f8f8f8 !important;
    }
    .ant-menu-sub li {
        border-right: none !important;
        border-left: none !important;
    }
    .ant-menu-sub li:last-child{
        border-bottom: none !important;
    }
    .ant-menu-sub li:first-child{
        border-top:1px dashed #ededed !important;
    }

    .left-container{
        flex:1;
        margin:15px 0 0 15px;
    }
    .banner{
        height: 180px;
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .banner div{
        height: 100%;
        width: 100%;
        position: absolute;
    }


    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .fade-enter {
        transform: translateX(200px);
    }
    .fade-leave-active {
        transform: translateX(-200px);
    }


</style>