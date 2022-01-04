FROM jhoacar/laravel-mongo:base

RUN rm -rf ./*

COPY ./learning-api/.env.example ./.env

COPY ./learning-api .

RUN composer install

RUN php artisan config:cache 

RUN php artisan key:generate

RUN php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"

RUN php artisan l5-swagger:generate