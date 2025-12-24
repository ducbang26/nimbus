import ShopPageHero from '@Modules/ShopPage/Hero';
import s from './styles.module.scss';
import ShopPageModelGrid from '@Modules/ShopPage/ModelGrid';
import ShopPageCollection from '@Modules/ShopPage/Collection';

const ShopPage = () => {
  return (
    <main className={s.shop}>
      <ShopPageHero />
      <ShopPageModelGrid />
      <ShopPageCollection />
    </main>
  );
};

export default ShopPage;
