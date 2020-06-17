<template>
    <div>
        <header-nav></header-nav>
        <div>
            <a-menu class="main-p menus"
                    mode="horizontal">
                <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
                <a-menu-item key="app"> <a-icon type="appstore" />Navigation Two </a-menu-item>
                <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
        ><a-icon type="setting" />Navigation Three - Submenu</span
        >
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
                    <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
                    >Navigation Four - Link</a
                    >
                </a-menu-item>
            </a-menu>
        </div>
    </div>
</template>

<script>
    import headerNav from "../components/header-nav";
    export default {
        name: "index",
        components:{
            headerNav,
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
    }
    .menus li:nth-child(2){
        background: #ff5b5b;
    }
    .menus>.ant-menu-item-active{
        color: #FFFFFF !important;
    }
</style>