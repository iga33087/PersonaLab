<template>
  <vue-aos animation-class="bounce-enter-active">
  <div class="listItem">
    <div class="listItemContent">
      <slot></slot>
    </div>
  </div>
  </vue-aos>
</template>

<script>
import VueAos from 'vue-aos'
export default {
  components:{VueAos},
}
</script>
