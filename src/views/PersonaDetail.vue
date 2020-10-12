<template>
  <div class="PersonaDetail">
    <Title :text="getParams.Name" :showSort="false">
      <h2>{{getPersonaData.Arcana}}</h2>
    </Title>
    <!--<div>
      <Chart :label="'攻'" :max="99" :width="'100%'" :num="66"></Chart>
      <Chart :label="'魔'" :max="99" :width="'100%'" :num="80"></Chart>
      <Chart :label="'耐'" :max="99" :width="'100%'" :num="72"></Chart>
      <Chart :label="'速'" :max="99" :width="'100%'" :num="89"></Chart>
      <Chart :label="'運'" :max="99" :width="'100%'" :num="99"></Chart>
    </div>-->
    <div v-if="!getPersonaData.rare&&!getPersonaData.formula">
      <h2>合成組合 合計: {{list.length}} 種</h2>
      <ListItem v-for="(item,index) in list" :key="index" >
        <PersonaBox :twoData="item"></PersonaBox>
      </ListItem>
    </div>
    <div v-if="getPersonaData.rare">
      <h2>寶魔沒有合成方法</h2>
    </div>
    <div v-if="getPersonaData.formula">
      <h2>合成組合 合計: 1 種</h2>
      <ListItem v-for="(item,index) in formulaObj(getPersonaData.formula)" :key="index" >
        <PersonaBox :twoData="item"></PersonaBox>
      </ListItem>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title.vue"
import ListItem from "@/components/listItem.vue"
//import Chart from "@/components/chart.vue"
import PersonaBox from "@/components/personaBox.vue"

export default {
  data() {
    return {
      list:[]
    }
  },
  components:{Title,ListItem,PersonaBox},
  computed: {
    getPersonaData() {
      return this.$store.state.persona.filter(res=>res.Name==this.getParams.Name)[0]
    },
    currentRoute() {
      return this.$router.currentRoute
    },
    getParams() {
      return this.$route.params
    },
    getArcanaList() {  //取得所選Persona阿爾卡納的合成表
      return this.$store.state.combination.filter(res=>res.Name==this.getPersonaData.Arcana)[0].item
    }
  },
  async created() {
    if(!this.getPersonaData) {
      this.$router.push({name:"Error404"})
      return 0
    }
    this.$store.state.loading=true
    document.title=this.getParams.Name
    await this.$global.delay(0)
    this.list=await this.$global.getCombinationListByPersona(this.getPersonaData)
    console.log(this.list)
    this.$store.state.loading=false
  },
  methods: {
    formulaObj(x) {
      let arr=[]
      for(let item of x) {
        arr.push(item)
      }
      return [arr]
    }
  }
}
</script>
