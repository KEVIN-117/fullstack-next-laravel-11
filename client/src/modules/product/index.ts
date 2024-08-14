export { ProductTable } from "./components/product-table/ProductTable";
export { ProductDetail } from "./components/product-details/ProductDetail";
export { CreateProduct } from "./components/CreateProduct";

export { getProducts } from "./actions/get-products";
export { getProduct } from "./actions/get-product";

export type { IProduct } from "@/modules/product/types/product";
export type { IProductResponsePagination, IProductResponse } from "@/modules/product/types/get-products-response";
