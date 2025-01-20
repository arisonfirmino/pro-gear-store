import { Separator } from "@/app/components/ui/separator";

import { ProductWithTotalPrice } from "@/app/helpers/computeProductTotalPrice";
import { formatCurrency } from "@/app/helpers/formatCurrency";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="w-full space-y-5">
      <div className="space-y-1.5">
        <h3 className="text-2xl font-medium">{product.name}</h3>

        <Separator />
      </div>

      <div className="space-y-1.5">
        <div>
          {product.discountPercentage > 0 && (
            <span className="text-base text-muted-foreground line-through">
              {formatCurrency(Number(product.basePrice))}
            </span>
          )}

          <p className="text-2xl font-medium text-primary">
            {formatCurrency(Number(product.totalPrice))}
          </p>
        </div>

        <p className="text-sm">
          Em até 12x de <span className="font-medium">R$ 47,65</span> sem juros
        </p>
      </div>

      <div className="space-y-1.5">
        <p className="text-lg font-medium text-primary">Sobre o produto</p>

        <Separator />

        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
