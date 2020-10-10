<template>
  <div class="search">
    <div class="searchArcana">
      <div class="searchArcanaList">
        <div class="searchArcanaListItem" v-for="(item,index) in $store.state.arcana" :class="{'searchArcanaListItemOnChange':checkArcana(item)}" @click="changeArcana(item)" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="searchKey">
        
    </div>
    <div class="searchSub" @click="sub">
      OK!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData:this.$store.state.searchData
    }
  },
  methods: {
    checkArcana(x) {
      return this.searchData.Arcana.some((res)=>res==x)
    },
    changeArcana(x) {
      let num=this.searchData.Arcana.indexOf(x)
      if(num==-1) {
        this.searchData.Arcana.push(x)
      }
      else {
        this.searchData.Arcana.splice(num,1)
      }
    },
    sub() {
      this.$emit("search",this.searchData)
    }
  }
}
</script>

<style>

</style>