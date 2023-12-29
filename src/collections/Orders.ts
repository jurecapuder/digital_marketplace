import { CollectionConfig } from "payload/types";

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "Yours Orders",
    description: "A summary of all your orders on DigitalHippo.",
  },
  fields: [
    {
      name: "_isPaid",
      type: "checkbox",
      access: {
        
      }
    }
  ]
}