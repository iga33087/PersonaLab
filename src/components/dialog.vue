<template>
  <transition name="bounce">
    <div class="dialog" @click="toSwitch(false)" v-if="show">
      <div class="dialogBox" @click.stop v-if="show">
        <Title :text="'アルセーヌ'"></Title>
      </div>
    </div>
  </transition>
</template>

<script>
import Title from "@/components/title.vue"

export default {
  data() {
    return {
      show:false
    }
  },
  components:{Title},
  methods: {
    toSwitch(x) {
      this.show=x
    }
  }
}
</script>