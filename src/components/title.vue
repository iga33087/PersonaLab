<template>
  <transition name="bounce" appear>
    <div class="title">
      <div class="titleLeftBox">
        <div class="titleLeftBoxZ1"></div>
        <div class="titleLeftBoxZ2">{{text}}</div>
        <div class="titleLeftBoxZ3">{{text}}</div>
      </div>
      <div class="titleSort" v-if="showSort">
        <div class="titleSortItem clipPath1" :class="{'titleSortChange':$store.state.sortBy=='Lv'}" @click="changeSort('Lv')">LV排序</div>
        <div class="titleSortItem clipPath2" :class="{'titleSortChange':$store.state.sortBy=='Arcana'}" @click="changeSort('Arcana')">阿爾卡納排序</div>
      </div>
      <slot></slot>
    </div>
  </transition>
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