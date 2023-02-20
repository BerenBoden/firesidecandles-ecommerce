import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { saleBannerGrid } from "@framework/static/banner";
import { useWindowSize } from "@utils/use-window-size";
import { ROUTES } from "@utils/routes";
import { useSsrCompatible } from "@utils/use-ssr-compatible";

const breakpoints = {
  "1025": {
    slidesPerView: 3,
    spaceBetween: 28,
  },
  "768": {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  "480": {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

interface BannerProps {
  className?: string;
  limit?: number;
  data?: any;
}

const SaleBannerGrid: React.FC<BannerProps> = ({
  className = "mb-12 lg:mb-14 xl:mb-16 lg:pb-1 xl:pb-0",
  limit = 3,
  data = saleBannerGrid,
}) => {
  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
  return (
    <div className={`${className}`}>
      {width < 768 ? (
        <div>
          <Carousel
            breakpoints={breakpoints}
            prevActivateId="prev"
            nextActivateId="next"
          >
            {data
              ?.slice(0, limit)
              .map(({ id, image, call_to_action, content }: any) => (
                <SwiperSlide key={id}>
                  <BannerCard
                    image={image}
                    label={call_to_action.label}
                    content={content}
                    href={call_to_action.link}
                    className="h-full"
                    effectActive={true}
                    classNameContent="shadow-lg bg-white absolute w-1/3 h-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded"
                  />
                </SwiperSlide>
              ))}
          </Carousel>
        </div>
      ) : (
        <div className="md:grid md:grid-cols-3 md:gap-5 xl:gap-7 relative">
          {data
            ?.slice(0, limit)
            .map(({ id, image, call_to_action, content }: any) => (
              <BannerCard
                key={id}
                image={image}
                label={call_to_action.label}
                content={content}
                href={`${ROUTES.COLLECTIONS}/${call_to_action.link}`}
                className={""}
                effectActive={true}
                classNameContent="shadow-lg bg-white absolute w-3/4 opacity-90 text-black h-3/4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded"
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default SaleBannerGrid;
