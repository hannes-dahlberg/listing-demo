import { IListingCreateDTO } from "../dto/listing-create.dto";
import { IListingDTO } from "../dto/listing.dto";
import { APIService } from "./api.service";

interface IListingAllResponse {
  id: number;
  title: string;
  price: number;
  address: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
}
interface IListingCreatePayload {
  title: string;
  price: number;
  address: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
}

export class ListingService {
  public constructor(
    private readonly apiService: APIService,
  ) { }

  public async all(): Promise<IListingDTO[]> {
    return (await this.apiService.get<IListingAllResponse[]>("listing")).body
      .map((listing: IListingAllResponse) => ({
        id: listing.id,
        title: listing.title,
        price: listing.price,
        address: listing.address,
        contactName: listing.contact_name,
        contactEmail: listing.contact_email,
        contactPhone: listing.contact_phone
      }));
  }
  public async create(listing: IListingCreateDTO): Promise<void> {
    await this.apiService.post<any, IListingCreatePayload>("listing", {
      title: listing.title,
      price: listing.price,
      address: listing.address,
      contact_name: listing.contactName,
      contact_email: listing.contactEmail,
      contact_phone: listing.contactPhone,
    });
  }
}