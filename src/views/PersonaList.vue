<template>
  <div class="PersonaList">
    <!--<Dialog ref="moreDialog" title="More">
      <Chart :label="'攻'" :max="99" :width="'100%'" :num="2"></Chart>
      <Chart :label="'魔'" :max="99" :width="'100%'" :num="10"></Chart>
      <Chart :label="'耐'" :max="99" :width="'100%'" :num="20"></Chart>
      <Chart :label="'速'" :max="99" :width="'100%'" :num="30"></Chart>
      <Chart :label="'運'" :max="99" :width="'100%'" :num="90"></Chart>
      <ListItem v-for="(item,index) in $store.getters.getPersona" :data="item" :key="index"></ListItem>
    </Dialog>-->
    <Title :text="currentRoute.meta.title" :showSort="true"></Title>
    <div>
      <ListItem v-for="(item,index) in $store.getters.getPersona" :key="index">
        <PersonaBox :data="item"></PersonaBox>
      </ListItem>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title.vue"
import ListItem from "@/components/listItem.vue"
import PersonaBox from "@/components/personaBox.vue"
//import Dialog from "@/components/dialog.vue"
//import Chart from "@/components/chart.vue"

export default {
  data() {
    return {
      showMoreDialog:false,
    }
  },
  components:{Title,ListItem,PersonaBox},
  computed: {
    currentRoute() {
      return this.$router.currentRoute
    }
  },
  created() {
    console.log(this.currentRoute)
    console.log("searchResult",this.searchResult)
  },
  /*methods: {
    showMore(x) {
      this.$refs.moreDialog.toSwitch(true)
      console.log(x)
    }
  }*/
}
</script>

<style>

</style>
