import Vue from 'vue'
import Vuex from 'vuex'
import Target from './models/Target';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    target: new Target({
      health: 100,
      name: "ScarCrow",
      attacks: {
        kick: 10,
        slap: 1,
        punch: 5,
        haduouken: 100
      },
      items: []
    }),
    machine: {
      name: "Vendr",
      machineTotal: 0,
      currency: {
        bottleCaps: 1
      },
      machineItems: {
        buffout: {
          price: 5,
          id: 'a1',
          quantity: 10,
          img: '../assets/Fallout4_Buffout.png'
        },
        mentats: {
          price: 3,
          id: 'a2',
          quantity: 10,
          img: '../assets/Fallout4_Mentats.png'
        },
        psycho: {
          price: 7,
          id: 'a3',
          quantity: 10,
          img: '../assets/Fallout4_Psycho.png'
        }
      },
    },
    vendedItem: {}
  },
  mutations: {
    setHealth(state, actualHealth) {
      state.target.health = actualHealth
    },
    setTransTotal(state, actualTotal) {
      state.machine.machineTotal = actualTotal
    },
    checkOut(state, item) {
      state.machine.machineTotal -= item.price
      state.vendedItem = item
    }
  },
  actions: {
    attack({ dispatch, commit, state }, payload) {
      //async call
      let newHealth = state.target.health - state.target.attacks[payload]
      commit('setHealth', newHealth)
    },
    addMoney({ dispatch, commit, state }, payload) {
      let total = state.machine.machineTotal + state.machine.currency[payload]
      commit('setTransTotal', total)
    },
    refund({ dispatch, commit, state }, payload) {
      commit('setTransTotal', 0)
    },
    purchase({ dispatch, commit, state }, payload) {
      let item = state.machine.machineItems[payload]
      commit('checkOut', item)
    }
  }
})
