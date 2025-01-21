"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { Separator } from "@/app/components/ui/separator";

const ProductsListTitle = ({
  title,
  category,
}: {
  title: string;
  category: string;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-1 text-secondary-foreground">
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium">{title}</p>

        {pathname !== `/category/${category}` && (
          <Link
            href={`/category/${category}`}
            className="text-sm active:text-foreground"
          >
            ver mais
          </Link>
        )}
      </div>
      <Separator />
    </div>
  );
};

export default ProductsListTitle;
