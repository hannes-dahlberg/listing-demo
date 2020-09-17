<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ListingService;

class ListingServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ListingServices::class, function($app) {
            return new ListingServices();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
