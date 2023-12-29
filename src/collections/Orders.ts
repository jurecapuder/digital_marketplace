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
        read: ({ req }) => req.user?.role === "admin",
        create: () => false,
        update: () => false,
      },
      admin: {
        hidden: true
      },
      required: true
    },
  ]
}