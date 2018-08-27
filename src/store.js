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
    machine: ({
      name: "Vendr",
      trasnactionTotal: 0,
      machineTotal: 0,
      currency: {
        bottleCaps: 1
      },
      machineItems: {
        buffout: {
          price: 15,
          id: 'a1',
          quantity: 10,
          img: '../assets/Fallout4_Buffout.png'
        },
        mentats: {
          price: 20,
          id: 'a2',
          quantity: 10,
          img: '../assets/Fallout4_Mentats.png'
        },
        steady: {
          price: 17,
          id: 'a3',
          quantity: 10,
          img: '../assets/Fallout4_Psycho.png'
        }
      },
      cart: []
    })
  },
  mutations: {
    setHealth(state, actualHealth) {
      state.target.health = actualHealth
    },
    setTransTotal(state, actualTotal) {
      state.machine.machineTotal = actualTotal
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
    }
  }
})
