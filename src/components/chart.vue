<template>
  <div class="chart">
    <div class="chartLabel" v-if="label">{{label}}</div>
    <div class="chartBar" ref="chartBar" :style="{'width':width}">
      <div class="chartBarLine" :style="{'width':percent*num+'px'}">{{num}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:["label","max","width","num"],
  data() {
    return {
      clientWidth:0
    }
  },
  computed: {
    percent() {
      return (this.clientWidth-16)/this.max
    }
  },
  mounted() {
    this.clientWidth=this.$refs.chartBar.clientWidth
    console.log(this.clientWidth)
  }
}
</script>