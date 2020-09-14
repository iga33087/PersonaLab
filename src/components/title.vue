<template>
  <div class="title">
    <div class="titleText">
       {{text}}
    </div>
    <div class="titleSort" v-if="showSort">
      <div class="titleSortItem" :class="{'titleSortChange':$store.state.sortBy=='Lv'}" @click="changeSort('Lv')">LV排序</div>
      <div class="titleSortItem" :class="{'titleSortChange':$store.state.sortBy=='Arcana'}" @click="changeSort('Arcana')">阿爾卡納排序</div>
    </div>
  </div>
</template>

<script>
export default {
  props:["text","showSort"],
  methods: {
    changeSort(x) {
      this.$store.commit("sortBy",x)
    }
  }
}
</script>