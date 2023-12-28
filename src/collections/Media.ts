import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        
      }
    ]
  }
}