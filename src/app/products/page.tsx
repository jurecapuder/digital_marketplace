import { PRODUCT_CATEGORIES } from "@/config";

type Param = string | string[] | undefined;

interface ProductPageProps {
  searchParams: {[key: string]: Param};
}

const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
}

const ProductPage = ({ searchParams }: ProductPageProps) => {
  const sort = parse(searchParams.sort);

  const category = parse(searchParams.category);

  const label = PRODUCT_CATEGORIES.find(({ value }) => value === category)?.label;

  return (
    <>
    </>
  )
}

export default ProductPage;