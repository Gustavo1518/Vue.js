<template>
  <div class="Login">
    <h1>Bienvenido a Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
      
  </div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "Gustavo",
                    password: "151860109-9"
                }
            }
        },
        methods: {
            login() {
                if(this.input.username == "Gustavo" && this.input.password == "151860109-9") {
                    alert("Bienvenido Gustavo Meneses Sierra");
                    } else(this.input.username != "Gustavo" && this.input.password != "151860109-9")
                     {
                        alert("Contraseña/Usuario Incorrectos");
                    }
                } 
            }
        }
    
</script>






