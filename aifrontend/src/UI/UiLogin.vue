<template>
<div>
    <nav-bar></nav-bar>
    <user-login></user-login>
</div>
</template>

<script>
import NavBar from  '../components/general/NavBar.vue'
import UserLogin from '../components/login/UserLogin.vue'

export default {
name: 'UiLogin',
components:{
    UserLogin: UserLogin,
    NavBar: NavBar
}
    
}
</script>
