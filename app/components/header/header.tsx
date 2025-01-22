import Title from "@/app/components/header/title";
import Search from "@/app/components/header/search";
import Menu from "@/app/components/header/menu";
import Cart from "@/app/components/header/cart/cart";

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
