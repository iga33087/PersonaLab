<template>
  <div class="personaBox">
    <div class="personaBoxData">
      <div class="Arcana">{{data.Arcana}}</div>
      <div class="Name">{{data.Lv}}<b>・{{data.Name}}</b></div>
    </div>
    <div class="personaBoxMore" @click="showMore">More</div>
  </div>
</template>

<script>
export default {
  props:["data"],
  methods: {
    showMore() {
      this.$emit("showMore",this.data)
    }
  }
}
</script>