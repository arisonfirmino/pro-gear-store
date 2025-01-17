import Image from "next/image";

import { cn } from "@/app/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import AddCartButton from "@/app/components/product/add-cart-button";
import ProductDetailsButton from "@/app/components/product/product-details-button";

import { BadgePercentIcon } from "lucide-react";

import { formatCurrency } from "@/app/helpers/formatCurrency";

import { ProductWithTotalPrice } from "@/app/helpers/computeProductTotalPrice";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Card>
      <CardHeader
        className={cn(
          "relative flex aspect-square items-center justify-center bg-gradient-to-t from-blue-200 to-transparent p-0.5",
        )}
      >
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={500}
          width={500}
          className="h-auto w-full max-w-xs rounded-md"
        />

        {product.discountPercentage > 0 && (
          <Badge className={cn("absolute left-2.5 top-2.5 gap-1")}>
            <BadgePercentIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </CardHeader>

      <CardContent className={cn("space-y-1.5 p-2.5")}>
        <CardTitle
          className={cn("line-clamp-1 text-base font-semibold text-foreground")}
        >
          {product.name}
        </CardTitle>

        <div className="flex items-center gap-1.5">
          <p className="text-lg font-semibold text-primary">
            {formatCurrency(Number(product.totalPrice))}
          </p>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(Number(product.basePrice))}
            </span>
          )}
        </div>

        <CardDescription className={cn("line-clamp-2")}>
          {product.description}
        </CardDescription>

        <AddCartButton />
        <ProductDetailsButton id={product.id} />
      </CardContent>
    </Card>
  );
};

export default ProductItem;
