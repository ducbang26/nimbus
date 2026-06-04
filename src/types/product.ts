import { ProductImage } from "@Modules/ProductDetailPage/ProductImages";

export interface ProductItemData {
  _id: string;
  name: string;
  price: number;
  description?: { children: { text: string }};
  shortDesc: string;
  category?: { name: string };
  images?: ProductImage[];
  slug: { current: string };
}
