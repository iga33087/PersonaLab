<template>
  <transition name="bounce">
    <div class="dialog" @click="toSwitch(false)" v-if="show">
      <div class="dialogBox" @click.stop>
        <div class="dialogBoxTitle">{{title}}</div>
        <div class="dialogBoxContent">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props:["title"],
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