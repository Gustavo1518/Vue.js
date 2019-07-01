<template>
  <div class="home">
    <div class="navbar-item has-dropdown is-hoverable">
  <a class="navbar-link is-arrowless">
    Enlaces
  </a>
  <div class="navbar-dropdown">
    <a class="navbar-item">
      <router-link to="FAQ">FAQ</router-link>
     
    </a>
    <a class="navbar-item">
      <router-link to="Soporte">Soporte</router-link>
    </a>
    <a class="navbar-link">
       <router-link to="Login">Iniciar Sesion</router-link>
      
    </a>
    <hr class="navbar-divider">
    <div class="navbar-item">
      Conacyt 2019
    </div>
  </div>
</div>
<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
     Documentacion
    </p>
    <p class="subtitle">
     Elaborado por:  <strong>Gustavo Meneses</strong> en Vue.js
    </p>
  </div>
</section>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
