<template>
  <div class="chart">
    <div class="chartLabel" v-if="label">{{label}}</div>
    <div class="chartBar" :style="{'width':width+'px'}">
      <div class="chartBarLine" :style="{'width':percent*num+'px'}">{{num}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:["label","max","width","num"],
  computed: {
    percent() {
      return this.width/this.max
    }
  }
}
</script>