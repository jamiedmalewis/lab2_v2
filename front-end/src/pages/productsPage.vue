<template>

<h2>Laptops - 2023</h2>
<div>
    <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Order</th>
        </tr>
        </thead>
        <tbody v-for="product in products" :key="product.id">
        
        <tr>
            <td scope="ro2">{{product.id}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td><button>Order</button></td>
        </tr>
        
        </tbody>
    </table>
</div>

<div class="center-bar">
    <footer>
        <p style="text-align:center">Copyright &copy; 2023 - F28IR</p>
    </footer>
</div>
  </template>
  
  <script>
  import { products } from '@/data';
  export default {
    name: 'productPage',
    data() {
      return {products};
    }
  }
  </script>
  
  <style scoped>

  </style>