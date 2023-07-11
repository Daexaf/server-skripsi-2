
CREATE TABLE "categories"(
    "id_categories" CHAR(36) PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL
);

CREATE TABLE "tables"(
    "id_tables" CHAR(36) PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "no_telp" VARCHAR(255) NOT NULL,
   "table_name" table_enum NOT NULL,
   "time_start" VARCHAR(255) NOT NULL,
   "time_end" VARCHAR(255) NOT NULL
);

CREATE TABLE "keranjangs"(
    "id_keranjangs" CHAR(36) PRIMARY KEY,
    "jumlah" INTEGER NOT NULL,
    "total_harga" INTEGER NOT NULL,
    "product" CHAR(36) NOT NULL,
    "id_tables" CHAR(36) NOT NULL,
    "keterangan" TEXT DEFAULT NULL,
    CONSTRAINT fk_tables_id
        FOREIGN KEY (id_tables)
        REFERENCES tables(id_tables)
        ON DELETE CASCADE,
    CONSTRAINT fk_product_id
        FOREIGN KEY (product)
        REFERENCES products(id_products)
        ON DELETE CASCADE
);

CREATE TABLE "products"(
    "id_products" CHAR(36) PRIMARY KEY,
    "kode" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "harga" BIGINT NOT NULL,
    "is_ready" BOOLEAN NOT NULL,
    "gambar" VARCHAR(255) NOT NULL,
    "id_category" CHAR(36) NOT NULL,
    CONSTRAINT fk_category_id
        FOREIGN KEY (id_category)
        REFERENCES categories(id_categories)
        ON DELETE CASCADE
);

CREATE TABLE "receipt" (
    "id_receipts" CHAR(36) PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "no_telp" VARCHAR(255) NOT NULL,
    "total_bayar" VARCHAR(255) NOT NULL,
    "time_start" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL
);


CREATE TYPE title_enum AS ENUM ('mr', 'ms', 'mrs');