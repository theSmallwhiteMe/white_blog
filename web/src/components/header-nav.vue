<template>
    <div>
        <nav class="main-p">
            <div class="f-left external-links">
                <span><a-icon type="github" /></span>
                <span class="active"><a-icon type="facebook" /></span>
                <span><a-icon type="wechat" /></span>
                <span><a-icon type="qq" /></span>
                <span><a-icon type="twitter" /></span>
            </div>
            <div class="f-right">
                <span class="c-23aee2">LOGIN</span>
                <span class="c-ff5b5b">REGISTER</span>
                <span>
                   <a-select value="ENGLISH"
                             size="small"
                             style="width: 120px"
                             option-label-prop="label">
                        <a-select-option value="CHINESE" label="CHINESE">
                          <span role="img" aria-label="China">
                            🇨🇳
                          </span>
                          CHINESE
                        </a-select-option>
                        <a-select-option value="ENGLISH" label="ENGLISH">
                          <span role="img" aria-label="USA">
                            🇺🇸
                          </span>
                          ENGLISH
                        </a-select-option>
                   </a-select>
               </span>
            </div>
        </nav>
        <a-row class="main-m header-container">
            <a-col :span="7"
                   style="text-align: left">
                <div class="logo c-ff5b5b"
                     style="font-size: 18px;font-weight: bold;padding-left:15px">
                    theSmallWhiteMe
                </div>
            </a-col>
            <a-col :span="10">
                <div class="search">
                    <a-input style="width: 100%;margin-top: 18px"
                             default-value="mysite">
                        <a-icon class="c-ff5b5b"
                                slot="addonAfter"
                                type="search" />
                    </a-input>
                </div>
            </a-col>
            <a-col :span="7">
                <div class="calendar">
                    <a-icon style="font-size: 22px"
                            class="c-ff5b5b"
                            type="calendar" />
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "headerNav"
    }
</script>

<style scoped>
    nav {
        border-bottom:1px dashed #ededed;
    }
    nav span {
        display: inline-block;
        padding: 8px 15px;
        cursor: pointer;
        border-right:1px dashed #ededed !important;
    }
    nav>div>span:first-child{
        border-left:1px dashed #ededed !important;
    }
    nav span:hover{
        color: #ff5b5b;
        background: #f8f8f8;
    }
    nav span.active{
        color: #ff5b5b;
        background: #f8f8f8;
    }
    .header-container{
        height: 66px;
        line-height: 66px;
    }
    .calendar{
        margin-left: 40px;
        background: #f8f8f8;
    }

    .ant-input-group-addon > i:only-child::after {
        position: absolute;
        top: -1px;
        right: 0;
        bottom: 0;
        left: -44px;
        content: 'Search';
        display: inline-block;
        background: #ff5b5b;
        z-index: 99999;
        border-radius: 15px;
        width: 80px;
        height: 32px;
        color: #FFFFFF;
        text-align: center;
        line-height: 32px;
    }
</style>