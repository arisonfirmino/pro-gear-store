"use client";

import { useContext } from "react";

import { cn } from "@/app/lib/utils";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";

import CartItem from "@/app/components/header/cart/cart-item";
import CartTotals from "@/app/components/header/cart/cart-totals";

import { ShoppingCart, ShoppingCartIcon } from "lucide-react";

import { CartContext } from "@/app/providers/cart";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn("w-10 text-foreground md:w-auto")}
        >
          <ShoppingCartIcon />
          <span className="hidden md:flex">Carrinho</span>
        </Button>
      </SheetTrigger>
      <SheetContent className={cn("space-y-5 overflow-y-auto pb-44")}>
        <SheetHeader className={cn("flex items-center justify-between")}>
          <SheetTitle className={cn("flex items-center gap-2")}>
            <ShoppingCart size={16} />
            Meu carrinho
          </SheetTitle>

          <SheetDescription>{products.length} itens</SheetDescription>
        </SheetHeader>

        <ul className="space-y-5">
          {products.map((product) => (
            <li key={product.id}>
              <CartItem product={product} />
            </li>
          ))}
        </ul>

        <CartTotals />
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
