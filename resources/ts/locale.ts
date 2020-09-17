import VueI18n from "vue-i18n";

export const i18n = new VueI18n({
  locale: "en", // set locale,
  messages: {
    en: {
      "app": "App",
      "menu": {
        "show": "Show",
        "create": "Create"
      },
      "listing": {
        "listing": "Listing | Listings",
        "title": "Title",
        "price": "Price",
        "address": "Address",
        "contact": {
          "contact": "Contact",
          "name": "Name",
          "email": "Email",
          "phone": "Phone"
        }
      }
    },
  }
});