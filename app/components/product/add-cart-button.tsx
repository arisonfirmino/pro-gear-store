import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { ShoppingCartIcon } from "lucide-react";

interface AddCartButtonProps {
  variant: "outline" | "default";
}

const AddCartButton = ({ variant }: AddCartButtonProps) => {
  return (
    <Button variant={variant} className={cn("w-full")}>
      <ShoppingCartIcon />
      Adicionar ao carrinho
    </Button>
  );
};

export default AddCartButton;
