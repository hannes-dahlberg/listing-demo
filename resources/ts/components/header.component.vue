<template>
  <navbar-component :menu="menu">
  </navbar-component>
</template>
<script lang="ts">
// Libs
import { Component, Vue } from "vue-property-decorator";

// Components
import NavbarComponent, { IMenu } from "./navbar.component.vue";

@Component({ components: { NavbarComponent } })
export default class HeaderComponent extends Vue {
  public menu: IMenu[] = [
    {
      title: this.$t("menu.show").toString(),
      route: { name: "show" },
    },
    {
      title: this.$t("menu.create").toString(),
      route: { name: "create" },
    },
  ];
}
</script>