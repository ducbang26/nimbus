import ProductDetailPage from '@Modules/ProductDetailPage';

const Page = ({ params }: { params: { slug: string } }): React.ReactElement => {
  return <ProductDetailPage slug={params.slug} />;
};

export default Page;
