<template>
    <div class="backdrop">
        <div class="box">
            <div class="logo c-ff5b5b"
                 style="font-size: 18px;font-weight: bold;padding-left:15px;margin: 44px 0">
                theSmallWhiteMe
            </div>
            <a-form id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit">
                <a-form-item>
                    <a-input :max-length=16
                             v-decorator="verifyData.username"
                             placeholder="Username">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="verifyData.password"
                             :max-length=50
                             type="password"
                             placeholder="Password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox class="f-left"
                                v-decorator="verifyData.remember">
                        Remember me
                    </a-checkbox>
                    <a class="login-form-forgot"
                       href="">
                        Forgot password
                    </a>
                    <a-button type="primary"
                              html-type="submit"
                              class="login-form-button">
                        Log in
                    </a-button>
                    <span class="f-left">
                Or
                <a href="">
                    register now!
                </a>
            </span>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>


<script>
    export default {
        name: "login",
        data(){
            return {
                form:this.$form.createForm(this),
                //表单验证提示
                verifyData:{
                    username:[
                        'username',
                        { rules: [{required: true, message: 'Please input your username!'  }] },
                    ],
                    password:[
                        'password',
                        { rules: [{ required: true, message: 'Please input your Password!' }] },
                    ],
                    remember:[
                        'remember',
                        {valuePropName: 'checked', initialValue: true,},
                    ]
                },
            }
        },
        mounted() {},
        // beforeCreate() {
        //     this.form = this.$form.createForm(this);
        // },
        methods:{
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    console.log('err',err,'values',values)
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .backdrop{
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.2);
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
        height: 600px;
        padding: 15px;
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