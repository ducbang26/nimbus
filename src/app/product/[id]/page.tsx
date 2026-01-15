import ProductDetailPage from '@Modules/ProductDetailPage';

const Page = ({ params }: { params: { id: string } }): React.ReactElement => {
  return <ProductDetailPage id={params.id} />;
};

export default Page;