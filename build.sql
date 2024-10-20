create extension if not exists "uuid-ossp";

alter table categories alter column created_at set default CURRENT_TIMESTAMP;
alter table categories alter column updated_at set default CURRENT_TIMESTAMP;
alter table categories alter column id set default uuid_generate_v4();
alter table products alter column id set default uuid_generate_v4();
alter table sales alter column id set default uuid_generate_v4();
alter table sale_details alter column id set default uuid_generate_v4();
alter table products alter column created_at set default CURRENT_TIMESTAMP;
alter table products alter column updated_at set default CURRENT_TIMESTAMP;

select * from categories;

insert into categories (name, description, slug) values ('Category 1', 'Description 1', 'category-1');

 select CURRENT_TIMESTAMP;


-- change name column total to subTotal
alter table sale_details rename column total to subTotal;
select * from sale_details;
select * from products where id = '27b3f31d-aa9e-48da-b44b-49610f00ee5a';
select *
from users where id = 2;


select * from sales where "clientName" = 'Lisa Thompson';
-- [
--                 'name' => 'Laptop',
--                 'slug' => 'laptop',
--                 'description' => 'Powerful laptop with 16GB RAM and 512GB SSD storage.',
--                 'category_id' => 'a01288eb-9a9c-45a2-976b-f314c4702006', // Electronics
--                 'stock' => 50,
--                 'price' => 1099.99,
--                 'image' => 'https://example.com/images/laptop.jpg',
--             ],

insert into products (name, slug, description, category_id, stock, price, image) values ('Laptop', 'laptop', 'Powerful laptop with 16GB RAM and 512GB SSD storage.', 'a01288eb-9a9c-45a2-976b-f314c4702006', 50, 1099.99, 'https://example.com/images/laptop.jpg');

delete from sales where "clientName" = 'Lisa Thompson';
SELECT id FROM sales WHERE "clientName" = 'Lisa Thompson' AND "userName" = 'Jane Smith' AND "userEmail" = 'jane.smith@example.com';


select * from users;

SELECT name, stock FROM products;

SELECT * FROM sales;
SELECT * FROM sale_details;

SELECT sum(price) as sales, categories.name FROM categories
JOIN products ON products.category_id = categories.id
JOIN sale_details ON sale_details.product_id = products.id
group by categories.name;


select categories.name as category, sum(products.stock) as stock from products
join categories on products.category_id = categories.id
group by categories.name order by stock desc;

select * from sessions;

CREATE POLICY "Admins can update products"
    ON products
    AS restrictive
    FOR INSERT
    TO PUBLIC
    USING (
        (SELECT role ) in (select id from sessions where )
    );


-- CREATE A LIST WITH ALL IMAGES URLS

-- Asumiendo que tu tabla se llama 'images_table' y tiene una columna 'image_url'.
-- También, asumiendo que tienes una columna 'id' que puedes usar para iterar.

-- Actualiza cada registro con una URL diferente.
DO $$
DECLARE
    record RECORD;
    url_array TEXT[] := ARRAY[
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723181033/movile-bg/d46d1d6b99add90e6206384de47c7c18_peajv8.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723181032/movile-bg/9540fbbebdce5a97b25d25cfea2bc0a6_krmuyy.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723180896/movile-bg/d46d1d6b99add90e6206384de47c7c18_ojjuaa.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140812/movile-bg/fc6705723e362220d554f62de472cefb_movktx.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140812/movile-bg/ef95e0261d94344cd7cf59567e3f1326_z035hk.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140811/movile-bg/b7d65fe0f772bd587bad14f8ef2db786_a5lylh.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140810/movile-bg/b7288b101857d765089512e99422262b_kahy9h.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140809/movile-bg/ac793ce8d40688c9882c51f8fab65968_ejhuxq.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140809/movile-bg/a3b8488391185f514fd984f850b166ec_fdqpu0.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140808/movile-bg/9530bbb4e4fdc7dd3530d1c0165afdf8_djyibb.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140807/movile-bg/93bd1d57ce5f5758124999b047a9f6dd_swtirj.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140806/movile-bg/8b7c3365ea02008105da2e15e737dc1d_b0jyln.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140805/movile-bg/8af32198cf55af7c696f0d282a7cfab3_ooat1w.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140804/movile-bg/679bda8a019f0ea156ea15545f4c1727_oimnpi.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140804/movile-bg/60d3fa1190e3d2e99521f4ba52de0cba_hefcnv.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140803/movile-bg/5b63c4d639e2b128112b5a8b41f17223_k3bk5c.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140802/movile-bg/57bae4459ef41658af58adfa29840ac8_oe1olg.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140801/movile-bg/4534fdeff4204d648e286120efb1ea26_ix4pah.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140801/movile-bg/3ef92f7757168fa6cc22b7f502e4150a_rbybu9.jpg',
        'https://res.cloudinary.com/dhq9acwqr/image/upload/v1723140799/movile-bg/34b55a5bf1fcbb3c78195acca38e0882_kygb6d.jpg'
    ];
    i INT := 1;
BEGIN
    FOR record IN SELECT id FROM products LOOP
        UPDATE products
        SET image = url_array[i]
        WHERE id = record.id;
        i := i + 1;
        IF i > array_length(url_array, 1) THEN
            EXIT;
        END IF;
    END LOOP;
END $$;
