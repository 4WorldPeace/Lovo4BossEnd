<template>
    <div id="login-out">
        <div id="bgVideo">
            <video loop="loop" autoplay="autoplay" src="~assets/img/bgVideo.mp4" muted/>
        </div>
        <div id="login-input-out">
            <transition name="fold-left">
                <div class="input-login" v-show="show">
                    <input id="userName" class="input-style" v-model="userName" placeholder="请输入账号"
                           autocomplete="off" onkeyup="value=value.replace(/[^\d]/g,'')"/>
                    <input id="password" class="input-style" v-model="password" placeholder="请输入密码"
                           type="password"/>
                    <button id="loginButton" class="button-style" type="button" @click="login">登录</button>
                    <li id="configMessage" @click="show = !show">配置信息</li>
                </div>
            </transition>
            <transition name="fold-right">
                <div class="input-config" v-show="!show">
                    <input id="serverIP" v-model="serverIP" class="input-config-style" type="text" placeholder="服务器地址"
                           onkeyup="value=value.replace(/[^\d.]/g,'')">
                    <input id="port" v-model="port" type="text" class="input-config-style" placeholder="端口号"
                           onkeyup="value=value.replace(/[^\d]/g,'')">
                    <div class="button-group">
                        <button id="configReset" class="button-config-style" @click="reset">重置</button>
                        <button id="configSave" class="button-config-style" @click="save">保存
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				userName: "",
				password: "",
				serverIP: "",
				port: "",
				show: true
			}
		},
		methods: {
			login() {
			},
			reset() {
				this.serverIP = "",
					this.port = ""
			},
			save() {
				this.show = !this.show
				console.log("1111");
			}
		}
	}
</script>

<style scoped>
    @import "~assets/css/login.css";
    @import "~assets/css/config.css";
</style>
