<template>
<div>
<main class="login-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form @submit.prevent="submitLogin">
                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="text" id="email_address" class="form-control" name="email-address" v-model="email" required autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="password" class="form-control" name="password" v-model="passwd" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="checkbox">
                                        <!--label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label-->
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-10 offset-md-1">
                                <button type="submit" class="btn btn-primary">
                                    Submit
                                </button>
                                <!--a href="#" class="btn btn-link">
                                    Forgot Your Password?
                                </a-->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>
</div>
</template>


<script>

export default {
    data() {
        return {
            email: '',
            passwd: ''
        }
    },
    methods: {
        submitLogin() {
            alert(this.email);
        }
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);


body{
    margin: 0;
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.6;
    color: #212529;
    text-align: left;
    background-color: #f5f8fa;
}

.btn {
    width:100%;
}

.my-form, .login-form
{
    font-family: Raleway, sans-serif;
}

.my-form
{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.row {
    margin-top: 15px;
    padding: 5px;
}

.my-form .row
{
    margin-left: 0;
    margin-right: 0;
}

.login-form
{
    padding-top: 50px;
    padding-bottom: 1.5rem;
}

.login-form .row
{
    margin-left: 0;
    margin-right: 0;
}
</style>
