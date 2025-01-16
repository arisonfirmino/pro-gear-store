import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { ShoppingCartIcon } from "lucide-react";

const AddCartButton = () => {
  return (
    <Button variant="outline" className={cn("w-full")}>
      <ShoppingCartIcon />
      Adicionar ao carrinho
    </Button>
  );
};

export default AddCartButton;
