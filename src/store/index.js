import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
    direction: 'forward',
},
getters: {
    getDirection: state => state.direction
},
mutations: {
    setDirection: (state, value) => state.direction = value
},
actions: {},
})