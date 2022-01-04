FROM jhoacar/laravel-mongo:base

COPY ./learning-api/composer.json .

COPY ./learning-api/.env.example ./.env

RUN composer install

COPY ./learning-api .