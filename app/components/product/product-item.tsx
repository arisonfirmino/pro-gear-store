import { cn } from "@/app/lib/utils";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import AddCartButton from "@/app/components/product/add-cart-button";
import ProductDetailsButton from "@/app/components/product/product-details-button";

import { ImageIcon } from "lucide-react";

const ProductItem = () => {
  return (
    <Card>
      <CardHeader
        className={cn("flex aspect-square items-center justify-center")}
      >
        <ImageIcon size={24} />
      </CardHeader>

      <CardContent className={cn("space-y-1.5 p-2.5")}>
        <CardTitle className={cn("line-clamp-1 text-base text-foreground")}>
          Título
        </CardTitle>

        <div>
          <span className="text-xs text-muted-foreground line-through">
            R$ 500,00
          </span>
          <p className="text-lg font-semibold text-primary">R$ 500,00</p>
        </div>

        <AddCartButton />
        <ProductDetailsButton id="123" />
      </CardContent>
    </Card>
  );
};

export default ProductItem;
