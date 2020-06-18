<template>
    <div>
        <header-nav></header-nav>
        <div class="main-p">
            <a-menu class="menus"
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
                    <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </a-menu-item>
            </a-menu>
            <div style="width: 188px;text-align: left;">
                <a-button type="primary"
                          style="margin-bottom: 16px;position: fixed;left:10%"
                          @click="toggleCollapsed">
                    <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
                </a-button>
                <a-menu
                        :default-selected-keys="['1']"
                        :default-open-keys="['sub1']"
                        mode="inline"
                        theme="dark"
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
                collapsed: false,
            };
        },
        methods: {
            toggleCollapsed() {
                this.collapsed = !this.collapsed;
            },
        },
    }
</script>

<style scoped>
    .menus {
        text-align: left;
        background: #0c273c;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
    }
    .menus li:nth-child(2){
        background: #ff5b5b;
        width: 188px;
    }
    .menus>.ant-menu-item-active{
        color: #FFFFFF !important;
    }
</style>