"use server";

import { db } from "@/app/lib/prisma";

export const getProducts = async () => {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const mouses = await db.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const keyboards = await db.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const headsets = await db.product.findMany({
    where: {
      category: {
        slug: "headsets",
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const mousepads = await db.product.findMany({
    where: {
      category: {
        slug: "mousepads",
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const monitors = await db.product.findMany({
    where: {
      category: {
        slug: "monitors",
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const accessories = await db.product.findMany({
    where: {
      category: {
        slug: "accessories",
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return {
    deals,
    mouses,
    keyboards,
    headsets,
    mousepads,
    monitors,
    accessories,
  };
};
