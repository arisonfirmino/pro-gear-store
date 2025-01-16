import Header from "@/app/(home)/components/header_components/header";
import { Separator } from "@/app/components/ui/separator";
import Nav from "@/app/(home)/components/nav";
import Benefits from "@/app/(home)/components/benefits";

const Home = () => {
  return (
    <>
      <Header />
      <Separator />
      <Nav />
      <Benefits />
    </>
  );
};

export default Home;
