export const PRODUCTS_PAGINATION_QUERY = `
{
  "total": count(*[
    _type == "product" &&
    inStock == true
  ]),
  "products": *[
    _type == "product" &&
    inStock == true
  ]
  | order(_createdAt desc)
  [$start...$end]
  {
    _id,
    name,
    price,
    category->{name},
    shortDesc,
    "images": images[]{
      "url": asset->url
    },
    slug{current}
  }
}
`;
