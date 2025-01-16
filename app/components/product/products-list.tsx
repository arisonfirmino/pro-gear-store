import ProductsListTitle from "@/app/components/product/products-list-title";
import ProductItem from "@/app/components/product/product-item";

interface ProductsListProps {
  title: string;
}

const ProductsList = ({ title }: ProductsListProps) => {
  return (
    <section className="space-y-2.5">
      <ProductsListTitle title={title} />

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <li>
          <ProductItem />
        </li>
      </ul>
    </section>
  );
};

export default ProductsList;
