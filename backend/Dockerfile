FROM jhoacar/laravel-mongo:base

COPY ./learning-api/composer.json .

COPY ./learning-api/.env.example ./.env

RUN composer install

RUN php artisan config:cache 

RUN php artisan key:generate

RUN php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"

COPY ./learning-api .

RUN php artisan l5-swagger:generate