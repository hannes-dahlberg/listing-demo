<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ListingService;
use App\Http\Requests\StoreListing;
use App\Services\CreateListing;

class ListingController extends Controller
{
    public function __construct(ListingService $listingService)
    {
        $this->listingService = $listingService;
    }

    public function index(Request $Request)
    {
        return response()->json($this->listingService->all(), 200, [], JSON_UNESCAPED_UNICODE);
    }
    
    public function store(StoreListing $request)
    {  
        $validated = $request->validated();
        // Create new listing object
        $listing = new CreateListing(
            $validated['title'],
            $validated['price'],
            $validated['address'],
            $validated['contact_name'],
            $validated['contact_email'],
            $validated['contact_phone']
        );
        // Create listing
        $this->listingService->create($listing);

        // Respond with 200
        return response(null, 200);
    }
}
