<template>
    <div class="container">
        <div class="header">
            <span><b>6</b> 条看法</span>
            <span>
                <a-icon class="c-ff5b5b"
                        type="heart" />
                <b>21</b> 人觉得牛逼
            </span>
        </div>
        <a-comment class="comment-item" v-for="i in [1,2,3,4,5,6]">
            <template slot="actions">
                <span key="comment-basic-like">
                    <a-tooltip title="Like">
                      <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
                    </a-tooltip>
                    <span style="padding-left: '8px';cursor: 'auto'">
                      {{ likes }}
                    </span>
                </span>
                <span key="comment-basic-dislike">
                      <a-tooltip title="Dislike">
                          <a-icon type="dislike"
                                  :theme="action === 'disliked' ? 'filled' : 'outlined'"
                                  @click="dislike"/>
                      </a-tooltip>
                      <span style="padding-left: '8px';cursor: 'auto'">
                        {{ dislikes }}
                      </span>
                </span>
                <span key="comment-basic-reply-to">Reply to</span>
            </template>
            <a slot="author">Han Solo</a>
            <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"/>
            <p slot="content">
                We supply a series of design principles, practical patterns and high quality design resources
                (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
            </p>
            <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
                <span>{{ moment().fromNow() }}</span>
            </a-tooltip>
        </a-comment>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "commentList",
        data() {
            return {
                likes: 0,
                dislikes: 0,
                action: null,
                moment,
            };
        },
        methods: {
            like() {
                this.likes = 1;
                this.dislikes = 0;
                this.action = 'liked';
            },
            dislike() {
                this.likes = 0;
                this.dislikes = 1;
                this.action = 'disliked';
            },
        },
    }
</script>

<style scoped>
    .container{
        position: relative;
    }
    .header{
        text-align: left;
        border-bottom: 2px solid #cccccc;
        margin: 15px 5px;
        height: 44px;
    }
    .header > span{
        padding: 5px 10px;
        background: #cccccc;
        font-weight: 400 !important;
        margin: 5px;
        cursor: pointer;
    }
    .comment-item{
        background: #F2F2F2;
        text-align: left;
        border: 5px solid white;
    }
    .comment-item:hover{
        background: #CCCCCC;
    }
</style>