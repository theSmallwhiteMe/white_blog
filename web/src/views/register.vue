<template>
    <div class="backdrop">
        <div class="box">
            <a-icon @click="closeBox"
                    class="close"
                    type="close" />
            <div class="logo c-ff5b5b"
                 style="font-size: 18px;font-weight: bold;padding-left:15px;margin: 44px 0">
                theSmallWhiteMe
            </div>
            <a-form id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit">
                <a-form-item>
                    <a-input :max-length=50
                             v-decorator="verifyData.nickname"
                             placeholder="Username">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input :max-length=50
                             v-decorator="verifyData.username"
                             placeholder="Email">
                        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input-password v-decorator="verifyData.password"
                             :max-length=50
                             type="password"
                             placeholder="Password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary"
                              html-type="submit"
                              class="login-form-button">
                        Sign up
                    </a-button>
                    <span class="f-left"></span>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>


<script>
    export default {
        name: "register",
        data(){
            return {
                form:this.$form.createForm(this),
                //表单验证提示
                verifyData:{
                    nickname:[
                        'nickname',
                        {
                            rules: [{required: true, message: 'Please input your username!'  }] ,
                        },
                    ],
                    username:[
                        'username',
                        {
                            rules: [{required: true, message: 'Please input your email!'  }] ,
                        },
                    ],
                    password:[
                        'password',
                        {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        },
                    ]
                },
            }
        },
        mounted() {},
        methods:{
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            closeBox(){
                if (this.$route.path != '/register') {
                    this.$store.commit('registerShow')
                }
            }
        }
    }
</script>

<style scoped>
    .backdrop{
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999;
    }
    .box {
        background: #ffffff;
        position: absolute;
        z-index: 9999;
        margin: auto;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 400px;
        height: 400px;
        padding: 15px;
    }
    .close {
        float: right;
    }
    @media screen and (max-width:813px){
        .box {
            width: 100%;
            height: 100%;
        }
    }
    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
</style>