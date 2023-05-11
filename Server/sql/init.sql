CREATE DATABASE tools;
\c tools;




CREATE TABLE IF NOT EXISTS public.goods
(
    "idGood" bigint generated by default as identity,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    customer character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    price integer NOT NULL,
    amount integer NOT NULL,
    image text COLLATE pg_catalog."default" NOT NULL,
    weight integer NOT NULL,
    type character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT goods_pk PRIMARY KEY ("idGood"),
    CONSTRAINT goods_pk2 UNIQUE ("idGood")
);

CREATE TABLE IF NOT EXISTS public.orders
(
    "idOrders" bigint generated by default as identity,
    status character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 0,
    date date NOT NULL,
    type character varying(255) COLLATE pg_catalog."default",
    price integer NOT NULL,
    "idService" integer,
    "idUser" integer,
    CONSTRAINT orders_pk PRIMARY KEY ("idOrders"),
    CONSTRAINT orders_pk2 UNIQUE ("idOrders")
);

CREATE TABLE IF NOT EXISTS public.orders_goods
(
    "idGoodsOrders" bigint NOT NULL,
    "goodIdGood" bigint generated by default as identity,
    "ordersIdOrders" bigint,
    CONSTRAINT orders_goods_pk PRIMARY KEY ("idGoodsOrders"),
    CONSTRAINT orders_goods_pk2 UNIQUE ("idGoodsOrders")
);

CREATE TABLE IF NOT EXISTS public."resetLinks"
(
    "idResetLink" bigint generated by default as identity,
    link character varying(50) COLLATE pg_catalog."default" NOT NULL,
    end_time date,
    "idUser" bigint NOT NULL,
    CONSTRAINT "resetLinks_pk" PRIMARY KEY ("idResetLink")
);

CREATE TABLE IF NOT EXISTS public.services
(
    "idService" bigint generated by default as identity,
    coordinates character varying(100) COLLATE pg_catalog."default" NOT NULL,
    name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    website character varying(255) COLLATE pg_catalog."default" NOT NULL,
    address text COLLATE pg_catalog."default",
    CONSTRAINT services_pk PRIMARY KEY ("idService"),
    CONSTRAINT services_pk3 UNIQUE (coordinates),
    CONSTRAINT services_pk4 UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS public.tokens
(
    "idToken" bigint generated by default as identity,
    "refreshToken" text COLLATE pg_catalog."default" NOT NULL,
    "idUser" integer,
    CONSTRAINT tokens_pk PRIMARY KEY ("idToken"),
    CONSTRAINT tokens_pk2 UNIQUE ("idToken"),
    CONSTRAINT tokens_pk3 UNIQUE ("refreshToken")
);

CREATE TABLE IF NOT EXISTS public.users
(
    "idUser" bigint generated by default as identity,
    "firstName" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "lastName" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    birthday date,
    role integer NOT NULL DEFAULT 1,
    password text COLLATE pg_catalog."default" NOT NULL,
    "isActivated" boolean NOT NULL DEFAULT false,
    "activationLink" character varying(40) COLLATE pg_catalog."default" NOT NULL,
    email character varying(70) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(70) COLLATE pg_catalog."default" NOT NULL,
    "isBanned" boolean NOT NULL DEFAULT false,
    CONSTRAINT users_pk PRIMARY KEY ("idUser"),
    CONSTRAINT users_pk2 UNIQUE ("idUser"),
    CONSTRAINT users_pk3 UNIQUE (email),
    CONSTRAINT users_pk4 UNIQUE (phone)
);

ALTER TABLE IF EXISTS public.orders
    ADD CONSTRAINT "orders_services_idService_fk" FOREIGN KEY ("idService")
        REFERENCES public.services ("idService") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.orders
    ADD CONSTRAINT "orders_users_idUser_fk" FOREIGN KEY ("idUser")
        REFERENCES public.users ("idUser") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.orders_goods
    ADD CONSTRAINT "orders_goods_goodIdGood_fkey" FOREIGN KEY ("goodIdGood")
        REFERENCES public.goods ("idGood") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.orders_goods
    ADD CONSTRAINT "orders_goods_orders_idOrders_fk" FOREIGN KEY ("ordersIdOrders")
        REFERENCES public.orders ("idOrders") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public."resetLinks"
    ADD CONSTRAINT "resetLinks_users_idUser_fk" FOREIGN KEY ("idUser")
        REFERENCES public.users ("idUser") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.tokens
    ADD CONSTRAINT "tokens_users_idUsers_fk" FOREIGN KEY ("idUser")
        REFERENCES public.users ("idUser") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE;

insert into users ("idUser", "firstName", "lastName", birthday, role, password, "isActivated", "activationLink", email, phone, "isBanned") values (11, 'Alexandr', 'Mostovoi', '2001-03-24', 0, '$2b$04$0/wlty9xBWF/8pobQo4mA.6QoZ6n5ZTU3kblh7DUtHXlunLjZ5MKy', true, '0fbb0836-d757-4f05-b2e4-72de3539b5c2', 'almost20008@mail.ru', '88005553536', false);
insert into tokens ("idToken", "refreshToken", "idUser") values (9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBbGV4YW5kciIsImxhc3ROYW1lIjoiTW9zdG92b2kiLCJlbWFpbCI6ImFsbW9zdDIwMDA4QG1haWwucnUiLCJpZCI6IjExIiwiaXNBY3RpdmF0ZWQiOmZhbHNlLCJpYXQiOjE2ODM0Nzc5NjEsImV4cCI6MTY4NjA2OTk2MX0.L2TclHmjP4MhNVHaApIhcnMLhQDzSQwXnIoGHhPhjO4', 11);

insert into services ("idService", name, coordinates, phone, email, address, website) values (1, 'Samodelkin Development', '55.755769, 37.452949', '+78005553535', 'kakoytoemail@ya.ru', 'район Бирюлёво Восточное, Южный административный округ, Москва', 'www.remont.ru');
insert into services ("idService", name, coordinates, phone, email, address, website) values (2, 'Mister Fix', '55.576530, 37.688517', '+78015553535', 'kakoytoaddress@mail.ru', 'Дмитровский район, Северный административный округ, Москва', 'www.remonta.net');
