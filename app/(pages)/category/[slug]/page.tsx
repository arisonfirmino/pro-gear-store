import { db } from "@/app/lib/prisma";
import { redirect } from "next/navigation";

import ProductsList from "@/app/components/product/products-list";
import BackButton from "@/app/components/back-button";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const resolvedParams = await params;

  let products = [];
  let categoryName = "";
  let categorySlug = "";

  if (resolvedParams.slug === "deals") {
    products = await db.product.findMany({
      where: {
        discountPercentage: {
          gt: 0,
        },
      },
    });

    categoryName = "Promoções";
    categorySlug = "deals";
  } else {
    const category = await db.category.findFirst({
      where: {
        slug: resolvedParams.slug,
      },
      include: {
        products: true,
      },
    });

    if (!category) redirect("/");

    products = category.products;
    categoryName = category.name;
    categorySlug = category.slug;
  }

  return (
    <>
      <BackButton />

      <ProductsList
        title={categoryName}
        products={JSON.parse(JSON.stringify(products))}
        category={categorySlug}
      />
    </>
  );
};

export default CategoryPage;
