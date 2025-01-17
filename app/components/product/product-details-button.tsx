import Link from "next/link";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

const ProductDetailsButton = ({ id }: { id: string }) => {
  return (
    <Button asChild variant="secondary" className={cn("w-full")}>
      <Link href={`/product/${id}`}>Ver Produto</Link>
    </Button>
  );
};

export default ProductDetailsButton;
