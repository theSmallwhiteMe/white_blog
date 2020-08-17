<template>
    <a-form id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit">
        <a-form-item>
            <a-input max-length="16"
                     v-model="requestData.username"
                     :v-decorator="verifyData.username"
                     placeholder="Username">
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input :v-decorator="verifyData.password"
                     v-model="requestData.password"
                     max-length="50"
                     type="password"
                     placeholder="Password">
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-checkbox v-model="requestData.remember"
                        :v-decorator="verifyData.remember">
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
            Or
            <a href="">
                register now!
            </a>
        </a-form-item>
    </a-form>
</template>


<script>
    export default {
        name: "register",
        data(){
            return {
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

                requestData:{
                    username: '',
                    password: '',
                    remember:true
                }
            }
        },
        mounted() {},
        beforeCreate() {
            this.form = this.$form.createForm(this, { name: 'normal_login' });
        },
        methods:{
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
        }
    }
</script>

<style scoped>
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
</style>