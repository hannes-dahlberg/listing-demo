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
      "show": {
        "empty_list": {
          "header": "Empty List",
          "text": {
            "text": "No listings exists. {0}.",
            "link": "Try creating one"
          }
        }
      },
      "listing": {
        "listing": "Listing",
        "title": "Title",
        "price": "Price",
        "address": "Address",
        "contact": {
          "contact": "Contact",
          "name": "Name",
          "email": "Email",
          "phone": "Phone"
        },
      }
    },
  }
});