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
and create empty `db.sqlite` file in `./database` folder (`$ touch db.sqlite`).

Run server with:
```
$ php artisan serve
$ npm run watch
```
Navigate to http://127.0.0.1:8000 to start using application

# TODO
- Validation in front-end could be done better with validation from server getting through to the user. Or even better make sure the create form validates email and such to not be able to submit at all before form is actually valid
- ListingService.php does not specify the Listing model as DP. Could this be solved with Laravel Facade or similar?