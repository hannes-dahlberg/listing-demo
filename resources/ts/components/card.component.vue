<template>
  <div class="card">
    <div class="card__header">
      <slot name="header">HEADER</slot>
    </div>
    <div class="card__body">
      <slot>CONTENT</slot>
    </div>
  </div>
</template>
<script lang="ts">
// Libs
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CardComponent extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../scss/basic.scss";

.card {
  background-color: color("light");
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  &__header {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  &__body {
    padding: 1.25rem;
  }
}
</style>