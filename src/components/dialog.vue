<template>
  <div class="dialog" @click="toSwitch(false)" v-if="show">
    <div class="dialogBox" @click.stop></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false
    }
  },
  methods: {
    toSwitch(x) {
      this.show=x
    }
  }
}
</script>