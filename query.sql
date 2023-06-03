
CREATE TABLE "categories"(
    "id_categories" INTEGER PRIMARY KEY,
    "nama" VARCHAR(255) NOT NULL
);

CREATE TABLE "tables"(
    "id_tables" INTEGER PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "no_telp" VARCHAR(255) NOT NULL
);

CREATE TYPE STATUS AS ENUM ('keranjang', 'pesanan', 'receipt');
CREATE TABLE "keranjangs"(
    "id_keranjangs" INTEGER PRIMARY KEY,
    "jumlah" INTEGER NOT NULL,
    "total_harga" INTEGER NOT NULL,
    "product" INTEGER NOT NULL,
    "id_tables" INTEGER NOT NULL,
    "status" STATUS NOT NULL DEFAULT 'keranjang',
    CONSTRAINT fk_tables_id
        FOREIGN KEY (id_tables)
        REFERENCES tables(id_tables)
);

CREATE TABLE "products"(
    "id_products" INTEGER PRIMARY KEY,
    "kode" VARCHAR(255) NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "harga" BIGINT NOT NULL,
    "is_ready" BOOLEAN NOT NULL,
    "gambar" VARCHAR(255) NOT NULL,
    "id_category" INTEGER NOT NULL,
    CONSTRAINT fk_category_id
        FOREIGN KEY (id_category)
        REFERENCES categories(id_categories)
);

CREATE TABLE "join_table_keranjangs_products"(
    "id" INTEGER PRIMARY KEY,
    "id_keranjangs" INTEGER NOT NULL,
    "id_products" INTEGER NOT NULL,
    CONSTRAINT fk_keranjangs_id
        FOREIGN KEY (id_keranjangs)
        REFERENCES keranjangs(id_keranjangs),
    CONSTRAINT fk_products_id
        FOREIGN KEY (id_products)
        REFERENCES products(id_products)
);
