<template>
  <div id="app">
    <Loading v-show="$store.state.loading"></Loading>
    <Header></Header>
    <div class="content">
      <router-view/>
    </div>
    <Floor></Floor>
  </div>
</template>

<script>
import Loading from "@/components/loading.vue"
import Header from "@/components/header.vue"
import Floor from "@/components/floor.vue"
export default {
  components:{Loading,Header,Floor},
}
</script>

<style lang="scss">

</style>
