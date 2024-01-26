import { Product } from "../../payload-types";

interface ReceiptEmailProps {
  email: string,
  data: Date,
  oderId: string,
  products: Product[]
}

export const ReceiptEmail = ({ email, data, oderId, products }: ReceiptEmailProps) => {

}