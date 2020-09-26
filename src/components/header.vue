<template>
  <div class="header">
    <Dialog ref="searchDialog" title="Search">
      <Search></Search>
    </Dialog>
    <div class="headerBox">
      <div class="headerBoxItem Logo">人格面具實驗室</div>
      <div class="headerBoxItem">合體模擬</div>
      <router-link :to="{name:'PersonaList'}"><div class="headerBoxItem">面具一覽</div></router-link>
      <div class="headerBoxItem" @click="showSearch">面具搜尋</div>
    </div>
  </div>
</template>

<script>
import Dialog from "@/components/dialog.vue"
import Search from "@/components/search.vue"

export default {
  components:{Dialog,Search},
  methods: {
    showSearch() {
      this.$refs.searchDialog.toSwitch(true)
    }
  }
}
</script>