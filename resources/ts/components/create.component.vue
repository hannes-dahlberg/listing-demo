<template>
  <div class="create">
    <card-component>
      <template v-slot:header>
        <h5 class="create__header">Header</h5>
      </template>
      <template v-slot:default>
        <form v-on:submit.prevent="createListing">
          <div class="create__row">
            <input-component
              class="create__input create__input--grow"
              v-model="form.title"
              :label="$t('listing.title')"
            />
            <input-component
              class="create__input"
              v-model="form.price"
              :label="$t('listing.price')"
            />
          </div>
          <div class="card__row">
            <input-component
              class="create__input"
              v-model="form.address"
              :type="InputType.TEXTAREA"
              :label="$t('listing.address')"
            />
          </div>
          <hr />
          <h5 class="create__contact-header">{{ $t('listing.contact.contact') }}</h5>
          <div class="create__row">
            <input-component
              class="create__input create__input--grow"
              v-model="form.contactName"
              :label="$t('listing.contact.name')"
            />
            <input-component
              class="create__input"
              v-model="form.contactPhone"
              :label="$t('listing.contact.phone')"
            />
          </div>
          <div class="card__row">
            <input-component
              class="create__input"
              v-model="form.contactEmail"
              :label="$t('listing.contact.email')"
            />
          </div>
          <button-component
            :type="ButtonType.SUBMIT"
            :disabled="!isValid"
          >Submit</button-component>
        </form>
      </template>
    </card-component>
  </div>
</template>
<script lang="ts">
// Libs
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios";

// Components
import InputComponent, { InputType } from "./input.component.vue";
import CardComponent from "./card.component.vue";
import ButtonComponent, { ButtonType } from "./button.component.vue";

// Bootstrap
import { bootstrap } from "../bootstrap";

interface IForm {
  title: string;
  price: string;
  address: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

@Component({ components: { InputComponent, CardComponent, ButtonComponent } })
export default class CreateComponent extends Vue {
  public InputType = InputType;
  public ButtonType = ButtonType;

  public get isValid(): boolean {
    return (
      this.form.title !== "" &&
      this.form.price !== "" &&
      this.form.address !== "" &&
      this.form.contactName !== "" &&
      this.form.contactEmail !== "" &&
      this.form.contactPhone !== ""
    );
  }

  public form: IForm = {
    title: "Foobar",
    price: "30000",
    address: "Gatan 3",
    contactName: "John Johnsson",
    contactEmail: "john@email.com",
    contactPhone: "555 123 456",
  };

  public async createListing() {
    if (!this.isValid) {
      alert("One or more field is empty. Fix and resubmitt");
      return;
    }

    try {
      await bootstrap.listingService.create({
        title: this.form.title,
        price: parseInt(this.form.price),
        address: this.form.address,
        contactName: this.form.contactName,
        contactEmail: this.form.contactEmail,
        contactPhone: this.form.contactPhone,
      });
      alert("Listing created");
      this.$router.push({ name: "show" });
    } catch {
      alert("Something went wrong. Please try again");
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/basic.scss";

.create {
  margin: 0px auto;
  padding: 0px 10px;
  max-width: 500px;
  &__header {
    margin: 0px;
  }
  &__row {
    display: flex;
  }
  &__input {
    &:not(:first-child) {
      margin-left: 10px;
    }
    &--grow {
      flex-grow: 1;
    }
  }
}
</style> 