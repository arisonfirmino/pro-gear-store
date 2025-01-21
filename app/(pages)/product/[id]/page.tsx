import { db } from "@/app/lib/prisma";
import { redirect } from "next/navigation";

import { Separator } from "@/app/components/ui/separator";
import BackButton from "@/app/components/back-button";
import ProductImages from "@/app/(pages)/product/[id]/components/product-images";
import ProductInfo from "@/app/(pages)/product/[id]/components/product-info";
import ProductQuantity from "@/app/(pages)/product/[id]/components/product-quantity";
import AddCartButton from "@/app/components/product/add-cart-button";
import CalculateShipping from "@/app/(pages)/product/[id]/components/calculate-shipping";
import ProductsList from "@/app/components/product/products-list";

import { computeProductTotalPrice } from "@/app/helpers/computeProductTotalPrice";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;

  const product = await db.product.findUnique({
    where: {
      id: resolvedParams.id,
    },
    include: {
      category: true,
    },
  });

  if (!product) redirect("/");

  const related = await db.product.findMany({
    where: {
      categoryId: product.categoryId,
      NOT: {
        id: product.id,
      },
    },
  });

  return (
    <>
      <BackButton />

      <div className="flex flex-col gap-5 xl:flex-row">
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <ProductImages images={product.imageUrls} alt={product.name} />
          <ProductInfo product={computeProductTotalPrice(product)} />
        </div>

        <div className="w-full space-y-5 xl:max-w-xs">
          <ProductQuantity />
          <AddCartButton variant="default" />
          <Separator />
          <CalculateShipping />
        </div>
      </div>

      <Separator />

      <ProductsList
        title="Relacionados"
        products={JSON.parse(JSON.stringify(related))}
        limit={4}
        category={product.category.slug}
      />
    </>
  );
};

export default ProductPage;
