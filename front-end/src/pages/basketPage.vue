<template>
    <h2>Basket</h2>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody v-for="product in basket" :key="product.id">
                <tr>
                    <td scope="ro2">{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ product.price * product.quantity }}</td>
                    <td><button>Remove</button></td>
                </tr>
            </tbody>
        </table>
        <h3>Total: £{{ totalCost }}</h3>
        <button>Order</button>
    </div>
    <div class="center-bar">
        <footer>
            <p style="text-align:center">Copyright &copy; 2023 - F28IR</p>
        </footer>
    </div>
</template>
      
<script>
import { basket } from '@/data';
export default {
    name: 'basketPage',
    data() {
        return { basket };
    },
    computed: {
    totalCost() {
      let sum = 0;
      this.basket.forEach(product => {
        sum += product.price * product.quantity;
      });
      return sum;
    }
  }
}

</script>