<template>
  <ul class="navbar">
    <li
      class="navbar__nav-item"
      v-for="(menuItem, index) in menu"
      :key="`menuItem-${index}`"
    >
      <router-link
        class="navbar__nav-link"
        activeClass="navbar__nav-link--active"
        :to="menuItem.route"
      >{{ menuItem.title }}</router-link>
    </li>
  </ul>
</template>
<script lang="ts">
// Libs
import { Component, Prop, Vue } from "vue-property-decorator";
import { RawLocation } from "vue-router";

export interface IMenu {
  title: string;
  route: RawLocation;
}

@Component
export default class NavbarComponent extends Vue {
  @Prop({ default: [] })
  public menu!: IMenu[];
}
</script>
<style lang="scss" scoped>
@import "../../scss/basic.scss";
.navbar {
  padding: 0px 0px 0px 50px;
  display: flex;
  background-color: theme-color("dark");
  &__nav-item {
    list-style-type: none;
    border-right: 1px solid #000;
    &:first-child {
      border-left: 1px solid #000;
    }
  }
  &__nav-link {
    display: block;
    padding: 0px 30px;
    line-height: 50px;
    color: darken(theme-color("light"), 15%);
    &:hover {
      text-decoration: none;
    }
    &:hover,
    &--active {
      color: lighten(theme-color("light"), 100%);
    }
  }
}
</style>