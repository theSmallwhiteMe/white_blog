<template>
    <div>
        <nav class="main">
           <div class="f-left external-links">
               <span><a-icon type="github" /></span>
               <span><a-icon class="c-ff5b5b" type="facebook" /></span>
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
        <a-row class="main">
            <a-col :span="6"
                   style="text-align: left">
                <div class="logo c-ff5b5b"
                     style="font-size: 18px;font-weight: bold;padding-left:15px">
                    theSmallWhiteMe
                </div>
            </a-col>
            <a-col :span="12">
                <div class="search">
                    <a-input style="width: 100%" default-value="mysite">
                        <a-icon class="c-ff5b5b" slot="addonAfter" type="search" />
                    </a-input>
                </div>
            </a-col>
            <a-col :span="6">

            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    nav {
        overflow: hidden;
    }
    nav span {
        display: inline-block;
        padding: 5px 10px;
        cursor: pointer;
    }
    nav span:hover{
        color: #ff5b5b;
    }

</style>