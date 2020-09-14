<template>
  <div class="PersonaList">
    <Dialog ref="moreDialog"></Dialog>
    <Title :text="currentRoute.meta.title" :showSort="true"></Title>
    <div>
      <ListItem v-for="(item,index) in $store.getters.getPersona" :data="item" :key="index" @showMore="showMore"></ListItem>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title.vue"
import ListItem from "@/components/listItem.vue"
import Dialog from "@/components/dialog.vue"

export default {
  data() {
    return {
      showMoreDialog:false
    }
  },
  components:{Title,ListItem,Dialog},
  computed: {
    currentRoute() {
      return this.$router.currentRoute
    },
    getArcanaList() {  //取得所選Persona阿爾卡納的合成表
      return this.$store.state.combination.filter(res=>res.Name==this.changePersona.Arcana)[0].item
    }
  },
  created() {
    console.log(this.currentRoute)
  },
  methods: {
    showMore(x) {
      this.$refs.moreDialog.toSwitch(true)
      console.log(x)
    }
  }
}
</script>

<style>

</style>
