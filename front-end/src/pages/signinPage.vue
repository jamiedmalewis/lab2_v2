<template>
    <div id="login-box">
    <div class="left">
        <h1>Login</h1>
        <form action="/signin" method="post">
            <input type="text" name="username" placeholder="Username" value="" />
            <input type="password" name="password" placeholder="Password" value="" />
            <input type="submit" name="login_submit" value="Login" />
        </form>
    </div>
</div>
    
    
    <div class="center-bar">
        <footer>
            <p style="text-align:center">Copyright &copy; 2023 - F28IR</p>
        </footer>
    </div>
</template>
      
<script>
export default {
    name: 'signinPage'
}
</script>

<style scoped>

</style>