import Vue from 'vue'
import Vuex from 'vuex'
import combination from "@/assets/data/combination.json"
import persona from "@/assets/data/persona.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    sortBy:"Lv",
    arcana:["愚者","魔術師","女教皇","女帝","皇帝","法王","恋愛","戦車","正義","隠者","運命","剛毅","刑死者","死神","節制","悪魔","塔","星","月","太陽","審判","信念","顧問官"],
    persona:persona,
    combination:combination,
    searchData: {
      Arcana:["愚者","魔術師","女教皇","女帝","皇帝","法王","恋愛","戦車","正義","隠者","運命","剛毅","刑死者","死神","節制","悪魔","塔","星","月","太陽","審判","信念","顧問官"],
      key:"ーク"
    }
  },
  getters: {
    getPersona:(state)=> {
      let arr=JSON.parse(JSON.stringify(state.persona))
      arr=arr.filter(res=> {
        for(let item of state.searchData.Arcana) {
          if(res.Arcana==item&&(res.Name.indexOf(state.searchData.key)!=-1||!state.searchData.key)) {
            return res
          }
        }
      })
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
