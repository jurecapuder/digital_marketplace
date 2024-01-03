"use client";

import { Product } from "@/payload-types";
import { useState } from "react";

interface ProductListingProps {
  product: Product | null
  index: number
}

const ProductListing = ({  }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState(false);
};

export default ProductListing;