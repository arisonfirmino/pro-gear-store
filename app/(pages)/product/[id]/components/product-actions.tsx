"use client";

import { useState } from "react";

import { Separator } from "@/app/components/ui/separator";

import ProductQuantity from "@/app/(pages)/product/[id]/components/product-quantity";
import AddCartButton from "@/app/components/product/add-cart-button";
import CalculateShipping from "@/app/(pages)/product/[id]/components/calculate-shipping";

import { ProductWithTotalPrice } from "@/app/helpers/computeProductTotalPrice";

interface ProductActionsProps {
  product: ProductWithTotalPrice;
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full space-y-5 xl:max-w-xs">
      <ProductQuantity value={quantity} setValue={setQuantity} />
      <AddCartButton product={product} quantity={quantity} variant="default" />
      <Separator />
      <CalculateShipping />
    </div>
  );
};

export default ProductActions;
