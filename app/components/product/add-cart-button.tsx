"use client";

import { useContext } from "react";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { ShoppingCartIcon } from "lucide-react";

import { CartContext } from "@/app/providers/cart";
import { ProductWithTotalPrice } from "@/app/helpers/computeProductTotalPrice";

interface AddCartButtonProps {
  product: ProductWithTotalPrice;
  quantity?: number;
  variant: "outline" | "default";
}

const AddCartButton = ({
  variant,
  product,
  quantity = 1,
}: AddCartButtonProps) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <Button
      variant={variant}
      onClick={() => addProductToCart({ ...product, quantity })}
      className={cn("w-full")}
    >
      <ShoppingCartIcon />
      Adicionar ao carrinho
    </Button>
  );
};

export default AddCartButton;
