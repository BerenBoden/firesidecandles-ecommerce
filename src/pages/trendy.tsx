import Container from "@components/ui/container";
import HeroSlider from "@containers/hero-slider";
import Layout from "@components/layout/layout";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
  API_ENDPOINTS,
  NEW_API_ENDPOINTS,
} from "@framework/utils/api-endpoints";
import { fetchFlashSaleProducts } from "@framework/product/get-all-flash-sale-products";
import {
  fetchCategories,
  getProductCategories,
} from "@framework/category/get-all-categories";
import { fetchNewArrivalProducts } from "@framework/product/get-all-new-arrival-products";
import { fetchBrands } from "@framework/brand/get-all-brands";
import ProductsFeatured from "@containers/products-featured";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CategoryBlockIcon from "@containers/category-block-icon";
import { ROUTES } from "@utils/routes";
import { homeSixCoupons as banner } from "@framework/static/banner";
import SaleBannerGrid from "@containers/sale-banner-grid";
import ProductsFlashSaleCarousel from "@containers/product-flash-sale-carousel";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import BannerCard from "@components/common/banner-card";
import SaleBannerWithProducts from "@containers/sale-banner-with-products";
import BrandGridBlock from "@containers/brand-grid-block";
import TestimonialCarousel from "@containers/testimonial-carousel";
import SubscriptionWithBg from "@components/common/subscription-with-bg";
import { homeSixHeroSlider as banners } from "@framework/static/banner";
import { getHomePageContent } from "@framework/content/get-home-page-content";
import { HomePageData } from "@framework/types";
import BannerWithProducts from "@containers/banner-with-products";

export default function Home({ content }: { content: HomePageData }) {
  const { hero, featured }: any = content;

  return (
    <>
      <Container>
        <HeroSlider data={hero} buttonGroupClassName="hidden" />
        <BannerWithProducts
					sectionHeading="Our Bestsellers"
					categorySlug="/search"
					variant="reverse"
				/>
        <SaleBannerGrid data={featured} />
        {/* <ProductsFlashSaleCarousel /> */}
        {/* <BannerCard
					key={`banner--key${banner.id}`}
					banner={banner}
					href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/> */}
        <NewArrivalsProductFeed />
        <CategoryBlockIcon sectionHeading="featured categories" />
        <SaleBannerWithProducts
          sectionHeading="Best selling products"
          categorySlug="/search"
        />
        <BrandGridBlock
          sectionHeading="Top Categories"
          limit={12}
          variant="6column"
        />
        {/* <TestimonialCarousel sectionHeading="text-testimonial" /> */}
        <SubscriptionWithBg />
      </Container>
    </>
  );
}

Home.Layout = Layout;
export const getStaticProps: GetStaticProps = async () => {
  const { data: content } = await getHomePageContent();
  //   const { data: categories } = await getProductCategories();
  return {
    props: {
      content,
      //   categories,
    },
  };
};
