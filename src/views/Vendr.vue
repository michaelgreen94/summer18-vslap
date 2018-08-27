<template>
  <div class="vendr">
    <h1>Hello {{machine.name}}</h1>
    <span class="tot">Total {{machine.trasnactionTotal}}</span>
    <span>You have ${{machine.machineTotal}}</span>
    <img class="vm-img" src="../assets/Fo3_Vending_Machine.png" alt="">
    <div class="items">
      <button v-for="(value, key) in machine.machineItems" :key="key" @click="addToCart(key)" :disabled="!enoughMoney(key)">{{key}}</button>
    </div>
    <div class="pay">
      <button v-for="(value, key) in machine.currency" :key="key" @click="addMoney(key)">{{key}}</button>
    </div>
    <div class="checkout">
      <button @click="checkOut">Checkout</button>
      <button @click="refund">Refund</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      addtoCart(item) {
        this.machine.cart.push(item)
      },
      addMoney(money) {
        this.$store.dispatch('addMoney', money)
      },
      checkOut() {

      },
      refund() {
        this.machine.machineTotal = 0
      },
      enoughMoney(key) {
        return this.machine.machineTotal >= this.machine.machineItems[key].price
      }
    },
    computed: {
      machine() {
        return this.$store.state.machine;
      }
    }
  };
</script>

<style>
  .vm-img {
    height: 400px;
    width: 300px
  }

  .tot {
    background-color: black;
    color: greenyellow;
  }
</style>