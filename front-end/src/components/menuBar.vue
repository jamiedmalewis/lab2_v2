<template>
    <header id="centerDiv">
        <ul class="centerUL">
            <li>
              <router-link to="/home" :class="activeClass('home')">Home</router-link>
            </li> 
            <li>
              <router-link to="/products" :class="activeClass('products')">Products</router-link>
            </li>
            <li>
              <router-link to="/basket" :class="activeClass('basket')">Basket</router-link>
            </li>
            <li>
              <router-link to="/signup" :class="activeClass('signup')">Sign Up</router-link>
            </li>
            <li>
              <router-link to="/login" :class="activeClass('signin')">Sign In</router-link>
            </li>
        </ul>
    </header>
<hr>
  </template>
  
  <script>
  export default {
    name: 'menuBar',
    data () {
        return {
            currentLink: location.href,
        }
    },
    mounted() {
        this.setCurrentLink()
    },
    methods: {
        activeClass(segment) {

            return segment == this.currentLink ? 'active' : ''
        },
        setCurrentLink() {
            this.currentLink = new URL(location.href).pathname.split('/').pop();
        }
    }
  }
  </script>
  
  <style>
  </style>