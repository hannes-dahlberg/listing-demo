<template>
  <div class="form-group">
    <label
      v-if="hasLabel"
      class="form-group__label"
    >
      <slot
        v-if="hasLabelSlot"
        name="label"
      ></slot>
      <template v-else>{{ label }}</template>
    </label>
    <input
      v-if="type !== InputType.TEXTAREA"
      class="form-group__control"
      :type="type"
      ref="input"
      v-on:input="onInput"
    />
    <textarea
      v-else
      class="form-group__control"
      ref="input"
      v-on:input="onInput"
    ></textarea>
  </div>
</template>
<script lang="ts">
// Libs
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

export enum InputType {
  TEXT = "text",
  TEXTAREA = "textarea",
}

@Component
export default class ContainerComponent extends Vue {
  public InputType = InputType;

  @Prop({ default: "", type: String })
  public value!: string;

  @Prop({ default: "", type: String })
  public label!: string;

  @Prop({ type: String, default: InputType.TEXT }) type!: InputType;

  // Watch value prop to update input field on change
  @Watch("value")
  onValueChange(value: string) {
    (this.$refs.input as any).value = value;
  }

  /* Emitting input on input (to work with v-model on
  anyone comsuming this component */
  public onInput() {
    this.$emit("input", (this.$refs.input as any).value);
  }
  public get hasLabelSlot(): boolean {
    return !!this.$slots["label"];
  }
  public hasLabel(): boolean {
    return this.hasLabelSlot || this.label !== "";
  }
  public mounted() {
    // Setting input value on mounted
    (this.$refs.input as any).value = this.value;
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/basic.scss";
@import "node_modules/bootstrap/scss/_forms.scss";
.form-group {
  &__label {
    display: block;
    margin: 0px;
  }
  &__control {
    width: 100%;
    padding: 2px 4px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    resize: none;
    &:hover {
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
}
</style>