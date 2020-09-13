import Vue from 'vue'
import Vuex from 'vuex'
import combination from "@/assets/data/combination.json"
import persona from "@/assets/data/persona.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    sortBy:"Lv",
    persona:persona,
    combination:combination
  },
  getters: {
    getPersona:(state)=> {
      let arr=JSON.parse(JSON.stringify(state.persona))
      return arr.sort((a, b)=> {
        return a[state.sortBy] > b[state.sortBy] ? 1 : -1;
       });
    }
  },
  mutations: {
    sortBy(state,x) {
      state.sortBy=x
    }
  },
  actions: {
  },
  modules: {
  }
})
