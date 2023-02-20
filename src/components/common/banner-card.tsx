import Link from "@components/ui/link";
import Image from "next/image";
import { useWindowSize } from "@utils/use-window-size";
import cn from "classnames";
import { LinkProps } from "next/link";
import { useSsrCompatible } from "@utils/use-ssr-compatible";
import { parse } from "marked";
// import  DOMPurify from 'dompurify';
import DOMPurify from "isomorphic-dompurify";

interface BannerProps {
  image: any;
  label: string;
  variant?: "rounded" | "default";
  content: any;
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps["href"];
  disableBorderRadius?: boolean;
  classNameContent: string;
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function BannerCard({
  image,
  label,
  className,
  variant = "rounded",
  content,
  effectActive = false,
  classNameInner,
  href,
  disableBorderRadius = false,
  classNameContent,
}: BannerProps) {
  // const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
  // const { title, image } = banner;
  // const selectedImage = getImage(width, image);
  let sanitizedContent = DOMPurify.sanitize(content ? content : "");
  return (
    <div className={cn("mx-auto", className)}>
      <Link
        href={href}
        className={cn(
          "h-full group flex justify-center relative overflow-hidden",
          classNameInner
        )}
      >
        <div className="relative w-full">
          {image && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL}${image.url}`}
              width={2000}
              height={2000}
              alt={image.altText}
              quality={100}
              className={cn("bg-gray-300 object-cover w-full", {
                "rounded-md": variant === "rounded" && !disableBorderRadius,
              })}
            />
          )}
          <div
            style={{
              boxShadow: "0 10px 10px -3px rgba(0, 0, 0, 0.2)",
            }}
            className={classNameContent}
          >
            <div className="flex flex-col items-center justify-center">
              <div
                className="p-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: parse(sanitizedContent),
                }}
              ></div>
              <button
                className="mt-10 px-10 py-5 border border-black uppercase font-semibold tracking-wider leading-none transition duration-500 ease-in-out hover:bg-black hover:text-white"
                type="button"
              >
                {label}
              </button>
            </div>
          </div>
        </div>
        {effectActive && (
          <div className="absolute top-0 ltr:-left-[100%] h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
}
