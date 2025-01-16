import Title from "@/app/(home)/components/header_components/title";
import Search from "@/app/(home)/components/header_components/search";
import Menu from "@/app/(home)/components/header_components/menu";
import Cart from "@/app/(home)/components/header_components/cart";

const Header = () => {
  return (
    <header className="flex items-center gap-5">
      <Title />
      <Search />
      <Menu />
      <Cart />
    </header>
  );
};

export default Header;
