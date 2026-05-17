export const PRODUCTS_QUERY = `*[
  _type=="product"
 && inStock == true 
] 
| order(_createdAt desc)
{
  _id,
  name,
  price,
  category->{name},
  description[0]{children[0]{text}},
  shortDesc,
  images,
  slug{current}
}`;
