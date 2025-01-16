import Header from "@/app/(home)/components/header_components/header";
import { Separator } from "@/app/components/ui/separator";
import Nav from "@/app/(home)/components/nav";
import Benefits from "@/app/(home)/components/benefits";
import ProductsList from "@/app/components/product/products-list";

const Home = () => {
  return (
    <>
      <Header />
      <Separator />
      <Nav />
      <Benefits />

      <ProductsList title="Promoções" />
      <ProductsList title="Mouses" />
      <ProductsList title="Teclados" />
      <ProductsList title="Headsets" />
      <ProductsList title="Mousepads" />
      <ProductsList title="Monitores" />
      <ProductsList title="Acessórios Gamer" />
    </>
  );
};

export default Home;
