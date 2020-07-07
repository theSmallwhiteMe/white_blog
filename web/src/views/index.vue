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
        <div class="box main-m" style="margin-top: 200px">
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
            <div class="left-container" :style="{height:containerHeight+'px'}">
                <article-content v-if="true"></article-content>
                <template v-else>
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
                    <div class="article" style="text-align: left">
                        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
                            <div slot="footer"><b>ant design vue</b> footer part</div>
                            <a-list-item slot="renderItem" key="item.title" slot-scope="item">
                                <template v-for="{ type, text } in actions" slot="actions">
                                    <span :key="type">
                                      <a-icon :type="type" style="margin-right: 8px" />
                                      {{ text }}
                                    </span>
                                </template>
                                <img slot="extra"
                                     width="272"
                                     alt="logo"
                                     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
                                <a-list-item-meta :description="item.description">
                                    <a slot="title" :href="item.href">{{ item.title }}</a>
                                    <a-avatar slot="avatar" :src="item.avatar" />
                                </a-list-item-meta>
                                <div class="content">
                                    {{ item.content }}
                                </div>
                            </a-list-item>
                        </a-list>
                    </div>
                </template>
            </div>
            <div class="right-container" v-if="false">
                <a-list item-layout="horizontal" :data-source="data">
                    <a-list-item slot="renderItem" slot-scope="item">
                        <a-list-item-meta>
                            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                        </a-list-item-meta>
                    </a-list-item>
                </a-list>
            </div>
        </div>
    </div>
</template>

<script>
    import {GLOBAL_VIEW} from "../static/js/common.js"

    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'https://www.antdv.com/',
            title: `ant design vue part ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }

    import headerNav from "../components/header-nav";
    import articleContent from "../components/article-content";

    export default {
        name: "index",
        components:{
            headerNav,
            articleContent,
        },
        props:[
            ...GLOBAL_VIEW.props
        ],
        data() {
            return {
                collapsed:false,
                img1:require('../assets/banner1.jpg'),
                img2:require('../assets/banner2.jpg'),
                img3:require('../assets/banner3.jpg'),
                time:1,

                listData,
                pagination: {
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 6,
                },
                actions: [
                    { type: 'star-o', text: '156' },
                    { type: 'like-o', text: '156' },
                    { type: 'message', text: '2' },
                ],

                containerHeight:600,
                data,
            };
        },
        mounted() {
            let _this = this
            setInterval(function () {
                _this.time++
                if (_this.time == 4){
                    _this.time = 1
                }
            },50000)

            this.getClientHeight()
        },
        watch:{
            ...GLOBAL_VIEW.watch
        },
        methods:{
            getClientHeight() {
                let clientHeight = 0;
                if(document.body.clientHeight&&document.documentElement.clientHeight) {
                    clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
                } else {
                    clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
                }
                this.containerHeight =  clientHeight - 200;
            }
        }
    }
</script>

<style scoped>
    .menus {
        text-align: left;
        background: #0c273c;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        height: 48px;
        width: 100%;
        transition: all .5s linear;
    }
    .menus li:nth-child(2){
        background: #ff5b5b;
        width: 188px;
    }
    .menus>.ant-menu-item-active{
        color: #FFFFFF !important;
    }

    .box{
        display: -webkit-flex; /* Safari */
        display: flex;
    }
    .menus-vertical{
        width: 188px;
        text-align: left;
        border: none;
        /*position: fixed;*/
        /*transition: all 1.5s linear;*/
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
        height: 100%;
        overflow-y: scroll;
        border:1px dashed #ededed !important;
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

    /**避免列表文字溢出@satrt**/
    .ant-list-item-meta-description,
    .content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

    .ant-list-item-meta-title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    /**@end***/

    .right-container {
        height: 100%;
        width: 220px;
        margin-left: 15px;
        border:1px dashed #ededed !important;
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