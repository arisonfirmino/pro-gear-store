import { getProducts } from "@/app/helpers/getProducts";

import { Separator } from "@/app/components/ui/separator";
import Header from "@/app/(home)/components/header_components/header";
import Nav from "@/app/(home)/components/nav";
import Benefits from "@/app/(home)/components/benefits";
import ProductsList from "@/app/components/product/products-list";

const Home = async () => {
  const {
    deals,
    mouses,
    keyboards,
    headsets,
    mousepads,
    monitors,
    accessories,
  } = await getProducts();

  return (
    <>
      <Header />
      <Separator />
      <Nav />
      <Benefits />

      <ProductsList title="Promoções" products={deals} limit={4} />
      <ProductsList title="Mouses" products={mouses} limit={4} />
      <ProductsList title="Teclados" products={keyboards} limit={4} />
      <ProductsList title="Headsets" products={headsets} limit={4} />
      <ProductsList title="Mousepads" products={mousepads} limit={4} />
      <ProductsList title="Monitores" products={monitors} limit={4} />
      <ProductsList title="Acessórios Gamer" products={accessories} limit={4} />
    </>
  );
};

export default Home;
