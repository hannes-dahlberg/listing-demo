<template>
  <div class="listings">
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
      <template v-slot:default>
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
      </template>
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
  public listings: IListingViewModel[] = [];

  public async mounted() {
    await this.loadListings();
  }

  public async loadListings(): Promise<void> {
    this.listings = (
      await bootstrap.listingService.all()
    ).map((listing: IListingDTO) => ({ ...listing }));
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