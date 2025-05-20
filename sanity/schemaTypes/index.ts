import { type SchemaTypeDefinition } from "sanity";
import pageType from "./pageType";
import galleryType from "./galleryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, galleryType],
};
