import { db } from "@/app/lib/prisma";

import Link from "next/link";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { CATEGORY_ICON } from "@/app/constants/category-icon";

const Nav = async () => {
  const categories = await db.category.findMany();

  return (
    <nav className="flex justify-between md:justify-center md:gap-10">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="ghost"
          asChild
          className={cn("w-10 uppercase md:w-auto")}
        >
          <Link href={`/category/${category.slug}`}>
            <span className="hidden xl:flex">{category.name}</span>
            <span className="xl:hidden">
              {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
            </span>
          </Link>
        </Button>
      ))}
    </nav>
  );
};

export default Nav;
