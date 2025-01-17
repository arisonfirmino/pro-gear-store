import ProductsListTitle from "@/app/components/product/products-list-title";
import ProductItem from "@/app/components/product/product-item";

import { computeProductTotalPrice } from "@/app/helpers/computeProductTotalPrice";

import { Product } from "@prisma/client";

interface ProductsListProps {
  title: string;
  products: Product[];
  limit?: number;
}

const ProductsList = ({ title, products, limit }: ProductsListProps) => {
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="space-y-2.5">
      <ProductsListTitle title={title} />

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {displayedProducts.map((product) => (
          <li key={product.id}>
            <ProductItem product={computeProductTotalPrice(product)} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
