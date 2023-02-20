import BannerCard from "@components/common/banner-card";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductCardListSmallLoader from "@components/ui/loaders/product-card-small-list-loader";
import { useGetPopularProductsQuery } from "@framework/product/get-all-popular-products";
import { homeThreeProductsBanner as banner } from "@framework/static/banner";
import Alert from "@components/ui/alert";
import { ROUTES } from "@utils/routes";
import { Product } from "@framework/types";

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  variant?: "default" | "reverse";
}

const BannerWithProducts: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  variant = "default",
  className = "mb-12 md:mb-14 xl:mb-16",
}) => {
  // const { data, isLoading, error } = useOnSellingProductsQuery({
  // 	limit: 10,
  // });

  const { data, isLoading, error } = useGetPopularProductsQuery();
  // data?.map((product: any) => console.log(product))
  console.log(data?.data);
  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
      />
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div className="grid grid-cols-4 gap-3 lg:gap-5 xl:gap-7">
          {/* {variant === "reverse" ? (
						<BannerCard
							image={banner[1]}
							href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
							className="hidden 3xl:block"
							effectActive={true}
						/>
					) : (
						<BannerCard
							image={banner[0]}
							href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
							className="hidden 3xl:block"
							effectActive={true}
						/>
					)} */}
          <div className="mr-10">
            <h1
              className="text-black text-3xl"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Top selling products
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod. Tempor incididunt ut labore…
            </p>
          </div>
          <div
            className={`col-span-full 3xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 ${
              variant === "reverse" ? "row-span-full" : ""
            }`}
          >
            {isLoading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <ProductCardListSmallLoader
                    key={idx}
                    uniqueKey={`on-selling-${idx}`}
                  />
                ))
              : data?.data.slice(0,6).map(({ id, attributes }) => (
                  <ProductCard
                    key={`product--key${id}`}
                    product={attributes}
					variant="gridModern"
                  />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerWithProducts;
