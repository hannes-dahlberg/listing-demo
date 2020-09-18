// Services
import { APIService } from "../services/api.service";
import { ListingService } from "../services/listing.service";

const apiService = new APIService(`/api`)

export const spaFactory = () => ({
  listingService: new ListingService(apiService),
});