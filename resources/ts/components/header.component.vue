<template>
  <nav>
    <ul>
      <li
        v-for="(menuItem, index) in menu"
        :key="`menuItem-${index}`"
      >
        <router-link :to="menuItem.route">{{ menuItem.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
// Libs
import { Component, Vue } from "vue-property-decorator";
import { RawLocation } from "vue-router";

interface IMenu {
  title: string;
  route: RawLocation;
}

@Component
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