import { useContext } from "react";

import { Separator } from "@/app/components/ui/separator";

import { CartContext } from "@/app/providers/cart";
import InfoRow from "./info-row";

const CartTotals = () => {
  const { total, subtotal, totalDiscount } = useContext(CartContext);

  return (
    <div className="fixed bottom-0 right-0 w-3/4 space-y-2.5 border-t bg-background p-5 pt-1.5 sm:max-w-sm">
      <InfoRow title="Subtotal" value={subtotal} />

      <Separator />

      <div className="flex items-center justify-between text-sm">
        <p>Entrega</p>
        <p>GRATIS</p>
      </div>

      <Separator />

      <InfoRow title="Descontos" value={totalDiscount} />

      <Separator />

      <InfoRow title="Total" value={total} />
    </div>
  );
};

export default CartTotals;
