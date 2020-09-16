<template>
  <div class="PersonaDetail">
    <Title :text="getParams.Name" :showSort="true"></Title>
    <div>
      <Chart :label="'攻'" :max="99" :width="'100%'" :num="66"></Chart>
      <Chart :label="'魔'" :max="99" :width="'100%'" :num="80"></Chart>
      <Chart :label="'耐'" :max="99" :width="'100%'" :num="72"></Chart>
      <Chart :label="'速'" :max="99" :width="'100%'" :num="89"></Chart>
      <Chart :label="'運'" :max="99" :width="'100%'" :num="99"></Chart>
    </div>
    <div>
      <ListItem v-for="(item,index) in $store.getters.getPersona" :key="index" :data="item"></ListItem>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title.vue"
import ListItem from "@/components/listItem.vue"
import Chart from "@/components/chart.vue"

export default {
  data() {
    return {
    }
  },
  components:{Title,ListItem,Chart},
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
  created() {
    console.log(this.currentRoute)
    console.log(this.getPersonaData)
    console.log(this.getArcanaList)
    document.title=this.getParams.Name
  }
}
</script>
