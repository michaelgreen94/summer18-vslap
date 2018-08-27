<template>
  <div class="vendr">
    <h1>Hello {{machine.name}}</h1>
    <span class="tot">You have ${{machine.machineTotal}}</span>
    <img class="vm-img" src="../assets/Fo3_Vending_Machine.png" alt="">
    <div class="items">
      <button v-for="(value, key) in machine.machineItems" :key="key" @click="purchase(key)" :disabled="!enoughMoney(key)">{{key}}</button>
    </div>
    <div class="pay">
      <button v-for="(value, key) in machine.currency" :key="key" @click="addMoney(key)">{{key}}</button>
    </div>
    <div class="gimme-money">
      <button @click="refund">Refund</button>
    </div>
    <img :src="vendedItem.img" />
  </div>
</template>

<script>
  export default {
    methods: {
      purchase(item) {
        this.$store.dispatch('purchase', item)
      },
      addMoney(money) {
        this.$store.dispatch('addMoney', money)
      },
      refund() {
        this.$store.dispatch('refund')
      },
      enoughMoney(key) {
        return this.machine.machineTotal >= this.machine.machineItems[key].price
      }
    },
    computed: {
      machine() {
        return this.$store.state.machine;
      },
      vendedItem() {
        return this.$store.state.vendedItem
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