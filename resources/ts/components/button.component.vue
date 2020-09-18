<template>
  <button
    class="button"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
// Libs
import { Component, Prop, Vue } from "vue-property-decorator";

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
}

@Component
export default class ButtonComponent extends Vue {
  @Prop({ type: String, default: ButtonType.BUTTON }) type!: ButtonType;
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
}
</script>
<style lang="scss" scoped>
.button {
  padding: 5px 15px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  &:disabled {
    color: #bbb;
  }
}
</style>