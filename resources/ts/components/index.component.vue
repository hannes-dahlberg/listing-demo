<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>
<script lang="ts">
// Libs
import { Component, Vue } from "vue-property-decorator";

// Componentes
import HeaderComponent from "./header.component.vue";
import FooterComponent from "./footer.component.vue";

@Component({ components: { HeaderComponent, FooterComponent } })
export default class IndexComponent extends Vue {}
</script>