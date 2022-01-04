FROM jhoacar/laravel-mongo:base

COPY ./learning-api/composer.json .

COPY ./learning-api/.env.example ./.env

RUN composer install

RUN php artisan config:cache 

RUN php artisan key:generate

COPY ./learning-api .