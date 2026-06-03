import ProductDetailPage from '@Modules/ProductDetailPage';

const Page = ({ params }: { params: Promise<{ slug: string }> }): React.ReactElement => {
  return <ProductDetailPage params={params} />;
};

export default Page;
