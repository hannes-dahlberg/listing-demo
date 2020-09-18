<template>
  <div class="listings">
    <card-component v-if="!loading && listings.length === 0">
      <template v-slot:header>
        <h5 class="listings__listing__header">{{ $t("show.empty_list.header") }}</h5>
      </template>
      <div class="listings__listing__content">
        <i18n path="show.empty_list.text.text">
          <router-link :to="{ name: 'create'}">{{ $t("show.empty_list.text.link") }}</router-link>
        </i18n>
      </div>
    </card-component>
    <card-component
      v-for="(listing, index) in listings"
      :key="`listing_${index}`"
      class="listings__listing"
    >
      <template v-slot:header>
        <h5 class="listings__listing__header">
          <p>{{ listing.title }}</p>
          <p>{{ moneyFormat(listing.price) }}</p>
        </h5>
      </template>
      <div class="listings__listing__content">
        <div class="listings__listing__content__address">
          <h5>{{ $t("listing.address") }}</h5>
          {{ listing.address }}
        </div>
        <div class="listings__listing__content__contact">
          <h5>{{ $t("listing.contact.contact") }}</h5>
          <p>{{ listing.contactName }}</p>
          <p>
            <label>Phone:</label>
            <a :href="`tel:${listing.contactPhone}`">{{ listing.contactPhone }}</a>
          </p>
          <p>
            <label>Email:</label>
            <a :href="`mailto:${listing.contactEmail}`">{{ listing.contactEmail }}</a>
          </p>
        </div>
      </div>
    </card-component>
  </div>
</template>
<script lang="ts">
// Libs
import { Component, Vue } from "vue-property-decorator";

// DTO's
import { IListingDTO } from "../dto/listing.dto";

// Components
import CardComponent from "./card.component.vue";

// Bootstrap
import { bootstrap } from "../bootstrap";

interface IListingViewModel {
  id: number;
  title: string;
  price: number;
  address: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

@Component({ components: { CardComponent } })
export default class ListingComponent extends Vue {
  public loading: boolean = false;
  public listings: IListingViewModel[] = [];

  public async mounted() {
    await this.loadListings();
  }

  public async loadListings(): Promise<void> {
    this.loading = false;
    this.listings = (
      await bootstrap.listingService.all()
    ).map((listing: IListingDTO) => ({ ...listing }));
    this.loading = false;
  }

  public moneyFormat(money: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(money);
  }
}
</script>
<style lang="scss" scoped>
.listings {
  &__listing {
    margin: 0px auto;
    max-width: 800px;
    margin-bottom: 30px;
    &__header {
      margin: 0px;
      display: flex;
      justify-content: space-between;
      p {
        margin: 0px;
      }
    }
    &__content {
      display: flex;
      &__address,
      &__contact {
        flex-grow: 1;
      }
      &__contact {
        p {
          margin: 0;
          padding: 0px;
          label {
            font-weight: bold;
            margin: 0px;
          }
        }
      }
    }
  }
}
</style>