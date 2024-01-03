"use client";

import { Product } from "@/payload-types";
import { useState } from "react";

interface ProductListingProps {
  product: Product | null
  index: number
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState(false);

  if (!product || !isVisible) {
    return (
      <ProductPlaceholder />
    )
  }
};

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden">
        
      </div>
    </div>
  )
}

export default ProductListing;