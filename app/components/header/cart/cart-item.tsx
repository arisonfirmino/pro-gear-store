import { useContext } from "react";

import { cn } from "@/app/lib/utils";

import Image from "next/image";

import { Card, CardFooter, CardHeader } from "@/app/components/ui/card";

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";

import { CartContext, CartProduct } from "@/app/providers/cart";

import { formatCurrency } from "@/app/helpers/formatCurrency";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  return (
    <Card className={cn("space-y-2.5 bg-muted p-2.5 shadow")}>
      <CardHeader className={cn("flex items-center gap-2.5")}>
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={500}
          width={500}
          className="h-16 w-16 rounded-md bg-gradient-to-t from-blue-200 to-transparent"
        />

        <div className="flex h-16 flex-col justify-between">
          <p className="text-sm font-medium">{product.name}</p>
          <p className="line-clamp-1 text-xs text-muted-foreground">
            {product.description}
          </p>

          <div className="flex items-center gap-1.5">
            <p className="text-base font-medium">
              {formatCurrency(Number(product.totalPrice))}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs text-muted-foreground line-through">
                {formatCurrency(Number(product.basePrice))}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardFooter className={cn("justify-between")}>
        <div className="flex w-full max-w-16 items-center">
          <button
            onClick={() => decreaseProductQuantity(product.id)}
            className="flex h-5 min-w-5 max-w-5 items-center justify-center rounded-full border bg-background shadow hover:bg-muted hover:text-muted-foreground"
          >
            <ChevronLeftIcon size={12} />
          </button>

          <span className="w-full text-center text-xs">{product.quantity}</span>

          <button
            onClick={() => increaseProductQuantity(product.id)}
            className="flex h-5 min-w-5 max-w-5 items-center justify-center rounded-full border bg-background shadow hover:bg-muted hover:text-muted-foreground"
          >
            <ChevronRightIcon size={12} />
          </button>
        </div>

        <button
          onClick={() => removeProductFromCart(product.id)}
          className="flex h-5 w-5 items-center justify-center rounded-full border bg-background text-red-600 shadow hover:bg-muted hover:text-muted-foreground"
        >
          <XIcon size={12} />
        </button>
      </CardFooter>
    </Card>
  );
};

export default CartItem;
