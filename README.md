# Listing Demo
Listing and crate listings of office spaces available to rent.

# Get started
Install DB's with
```
$ composer install
$ npm install
```

Set .env file to:
```
DB_CONNECTION=sqlite
DB_DATABASE=db.sqlite
```
and create empty `db.sqlite` file in `./database` folder (`$ touch ./database/db.sqlite`).

Migrate database with:
```
$ php artisan migrate
```

Run server and build/watch SPA with:
```
$ php artisan serve
$ npm run watch
```
Navigate to http://127.0.0.1:8000 to start using application

# TODO
- Validation in front-end could be done better. Either by forwarding validation errors from API to user or validate form before submitting
- ListingService.php does not specify the Listing model as DP. Could this be solved with Laravel Facade or similar?