<template>
    <div style="position: relative;padding-bottom: 40px">
        <span class="tag left">
            white
        </span>
        <span class="tag right">
            come on
        </span>
        <h2 class="title">正如曾经的我想人肉组装台顶配 MBP 一样</h2>
        <p class="authorContainer">
            <span class="author">
                white
            </span>
            发表于
            <span class="time">
                2020-07-07
            </span>
        </p>
        <div class="cover">
            <img src="../assets/banner1.jpg">
        </div>
        <div class="content">
            正如曾经的我想人肉组装台顶配 MBP 一样。

            也正如一闪而过地想买辆特斯拉的壳子自己配电池一样。

            现在，我想花 2w 购买一些设备组装自己的 GPU 工作站，多一分都不行。

            这次要做的是一套尽可能完整的社工系统。

            因为，社工真得带来太多快感了；社工是经验与未知的博弈，是心与心的较量。

            那种杂乱学科的交织和江湖技能的混杂，就像一个没有任何约束的舞台，你尽管放心大胆去跳。

            但是咱对硬件真的不算了解。

            SSD 太贵，就先来 10 个 1T 的机械盘
            2K 的显示器先来 6 个
            Taobao 上的二手 GPU 随便来两个
            两台 IBM 退下的机器
            一个 2* 1.6 的桌子
            看着一个个以人名命名的文件夹，才能感觉到 Hacker 的存在。
            著作权归作者所有。
            商业转载请联系作者获得授权，非商业转载请注明出处。
            作者：Surmon
            链接：https://surmon.me/article/167
            来源：Surmon.me
        </div>
        <div class="commentContainer">
            <comment-list></comment-list>
        </div>
    </div>
</template>

<script>
    import commentList from "./comment-list"
    export default {
        components:{
            commentList
        },
        name: "articleContent"
    }
</script>

<style scoped>
    .tag{
        background: #ff5b5b;
        color: white;
        position: absolute;
        width: 7rem;
        height: 4rem;
        line-height: 5.8rem;
        text-align: center;
        text-transform: uppercase;
        transform-origin: center;
        font-size: 12px;
        cursor: pointer;
    }
    .tag.left{
        top: -30px;
        left: -40px;
        transform: rotate(-45deg);
    }
    .tag.right{
        top: -30px;
        right: -40px;
        transform: rotate(45deg);
    }
    .title{
        margin: 15px 0;
    }
    .authorContainer{
        font-size: 12px;
        font-weight: 400 !important;
    }
    .author{
        /*font-size: 14px;*/
        color: #ff5b5b;
        margin-right: 5px;
        cursor: pointer;
    }
    .time{
        margin-left: 5px;
    }
    .cover {
        width: 100%;
        padding: 10px;
        text-align: center;
        height: 200px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .cover img{
        width: 100%;
        /*border: 10px solid #cccccc;*/
        /*border-radius: 15px;*/
        height: 100%;
    }
    .content{
        padding: 10px;
    }
    .commentContainer{
        padding: 10px;
    }
</style>