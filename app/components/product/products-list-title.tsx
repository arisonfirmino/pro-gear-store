import Link from "next/link";

import { Separator } from "@/app/components/ui/separator";

const ProductsListTitle = ({ title }: { title: string }) => {
  return (
    <div className="space-y-1 text-secondary-foreground">
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium">{title}</p>
        <Link href="#" className="text-sm active:text-foreground">
          ver mais
        </Link>
      </div>
      <Separator />
    </div>
  );
};

export default ProductsListTitle;
