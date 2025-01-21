import { getProducts } from "@/app/helpers/getProducts";

import Nav from "@/app/(home)/components/nav";
import Benefits from "@/app/(home)/components/benefits";
import ProductsList from "@/app/components/product/products-list";

const Home = async () => {
  const {
    deals,
    mouses,
    keyboards,
    headphones,
    mousepads,
    monitors,
    accessories,
  } = await getProducts();

  return (
    <>
      <Nav />
      <Benefits />

      <ProductsList
        title="Promoções"
        products={JSON.parse(JSON.stringify(deals))}
        limit={4}
        category="deals"
      />

      <ProductsList
        title="Mouses"
        products={JSON.parse(JSON.stringify(mouses))}
        limit={4}
        category="mouses"
      />

      <ProductsList
        title="Teclados"
        products={JSON.parse(JSON.stringify(keyboards))}
        limit={4}
        category="keyboards"
      />

      <ProductsList
        title="Headphones"
        products={JSON.parse(JSON.stringify(headphones))}
        limit={4}
        category="headphones"
      />

      <ProductsList
        title="Mousepads"
        products={JSON.parse(JSON.stringify(mousepads))}
        limit={4}
        category="mousepads"
      />

      <ProductsList
        title="Monitores"
        products={JSON.parse(JSON.stringify(monitors))}
        limit={4}
        category="monitors"
      />

      <ProductsList
        title="Acessórios Gamer"
        products={JSON.parse(JSON.stringify(accessories))}
        limit={4}
        category="accessories"
      />
    </>
  );
};

export default Home;
