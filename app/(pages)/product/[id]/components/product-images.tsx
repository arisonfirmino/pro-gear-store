"use client";

import { useState } from "react";

import Image from "next/image";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

interface ProductImagesProps {
  images: string[];
  alt: string;
}

const ProductImages = ({ images, alt }: ProductImagesProps) => {
  const [imageUrl, setImageUrl] = useState(images[0]);

  return (
    <div className="flex flex-col items-center gap-5 md:flex-row">
      <div className="order-2 flex gap-5 md:order-1 md:flex-col">
        {images.map((image) => (
          <Button
            key={image}
            onClick={() => setImageUrl(image)}
            className={cn(
              "h-14 w-14 bg-gradient-to-t from-blue-200 to-transparent",
              imageUrl === image && "border border-primary",
            )}
          >
            <Image
              src={image}
              alt={alt}
              height={500}
              width={500}
              className="w-full"
            />
          </Button>
        ))}
      </div>

      <Image
        src={imageUrl}
        alt={alt}
        height={500}
        width={500}
        className="order-1 h-auto min-w-80 max-w-80 rounded-md border bg-gradient-to-t from-blue-200 to-transparent md:order-2"
      />
    </div>
  );
};

export default ProductImages;
