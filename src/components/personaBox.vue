<template>
  <div class="personaBox">
    <template v-if="data">
      <div class="personaBoxData">
        <div class="Arcana">{{data.Arcana}}</div>
        <div class="Name">{{data.Lv}}<b>・{{data.Name}}</b></div>
      </div>
      <router-link :to="{name:'PersonaDetail',params:{'Name':data.Name}}" target="_blank"><div class="personaBoxMore">More</div></router-link>
    </template>
    <template v-if="twoData">
      <div class="personaBoxTwoData">
        <router-link v-for="(item,index) in twoData" :key="index" :to="{ name: 'PersonaDetail',params:{'Name':item.Name}}" target="_blank">
          <div class="personaBoxData">
            <div class="Arcana">{{item.Arcana}}</div>
            <div class="Name">{{item.Lv}}<b>・{{item.Name}}</b></div>
            <div class="personaBoxTwoDataPlus" v-if="index!=twoData.length-1">+</div>
          </div>
        </router-link>
      </div>    
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
    twoData: {
      type: Array,
    }
  },
  methods: {
    showMore() {
      this.$emit("showMore",this.data)
    }
  }
}
</script>