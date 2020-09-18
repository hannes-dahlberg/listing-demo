<template>
  <div>
    <header-component></header-component>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
// Libs
import { Component, Vue } from "vue-property-decorator";

// Componentes
import HeaderComponent from "./header.component.vue";

@Component({ components: { HeaderComponent } })
export default class IndexComponent extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../scss/basic.scss";
@import "node_modules/bootstrap/scss/_grid.scss";
</style>