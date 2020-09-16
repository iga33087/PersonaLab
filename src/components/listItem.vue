<template>
  <vue-aos animation-class="bounce-enter-active">
  <div class="listItem">
    <div class="listItemContent">
      <div class="personaBox">
        <div class="personaBoxData">
          <div class="Arcana">{{data.Arcana}}</div>
          <div class="Name">{{data.Lv}}<b>・{{data.Name}}</b></div>
        </div>
        <div class="personaBoxMore" @click="showMore">More</div>
      </div>
    </div>
  </div>
  </vue-aos>
</template>

<script>
import VueAos from 'vue-aos'
export default {
  props:["data"],
  components:{VueAos},
  methods: {
    showMore() {
      this.$emit("showMore",this.data)
    }
  }
}
</script>
