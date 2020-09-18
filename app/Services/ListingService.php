<?php 

namespace App\Services;

class Listing {
  public function __construct(
    int $id,
    string $title,
    int $price,
    string $address,
    string $contact_name,
    string $contact_email,
    string $contact_phone
  ) {
      $this->id = $id;
      $this->title = $title;
      $this->price = $price;
      $this->address = $address;
      $this->contact_name = $contact_name;
      $this->contact_email = $contact_email;
      $this->contact_phone = $contact_phone;
    }
}

class CreateListing {
  public function __construct(
    string $title,
    int $price,
    string $address,
    string $contact_name,
    string $contact_email,
    string $contact_phone
  ) {
      $this->title = $title;
      $this->price = $price;
      $this->address = $address;
      $this->contact_name = $contact_name;
      $this->contact_email = $contact_email;
      $this->contact_phone = $contact_phone;
    }
}

class ListingService {
  public function all(): iterable 
  {
    // Get all listings from DB
    $listings = \App\Models\Listing::orderBy("created_at", "desc")->get();

    // Create empty array
    $returnArray = [];
    foreach($listings as $listing) {
      // Push listing to array
      $returnArray[] = new Listing(
        $listing->id,
        $listing->title,
        $listing->price,
        $listing->address,
        $listing->contact_name,
        $listing->contact_email,
        $listing->contact_phone
      );
    }

    // Return array
    return $returnArray;
  }
  public function create(CreateListing $listing): void
  {
    // Create new entity
    $entity = new \App\Models\Listing();

    // Set properties from provided listing
    $entity->title = $listing->title;
    $entity->price = $listing->price;
    $entity->address = $listing->address;
    $entity->contact_name = $listing->contact_name;
    $entity->contact_email = $listing->contact_email;
    $entity->contact_phone = $listing->contact_phone;

    // Save entity to DB
    $entity->save();
  }
}