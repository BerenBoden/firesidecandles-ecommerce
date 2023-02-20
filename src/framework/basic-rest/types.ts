import { QueryKey } from "react-query";

export type CollectionsQueryOptionsType = {
  text?: string;
  collection?: string;
  status?: string;
  limit?: number;
};

export type CategoriesQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  demoVariant?: "ancient";
};
export type ProductsQueryOptionsType = {
  type: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type QueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
  demoVariant?: "ancient";
};

export type ShopsQueryOptionsType = {
  text?: string;
  shop?: Shop;
  status?: string;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
};
export type Category = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Collection = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Brand = {
  id: number | string;
  name: string;
  slug: string;
  image?: Attachment;
  background_image?: any;
  [key: string]: unknown;
};
export type Tag = {
  id: string | number;
  name: string;
  slug: string;
};
// export type Product = {
//   id: number | string;
//   name: string;
//   slug: string;
//   price: number;
//   quantity: number;
//   sale_price?: number;
//   image: Attachment;
//   sku?: string;
//   gallery?: Attachment[];
//   category?: Category;
//   tag?: Tag[];
//   meta?: any[];
//   description?: string;
//   variations?: object;
//   [key: string]: unknown;
//   isNewArrival?: boolean;
// };
export type OrderItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
};
export type Order = {
  id: string | number;
  name: string;
  slug: string;
  products: OrderItem[];
  total: number;
  tracking_number: string;
  customer: {
    id: number;
    email: string;
  };
  shipping_fee: number;
  payment_gateway: string;
};

export type Shop = {
  id: string | number;
  owner_id: string | number;
  owner_name: string;
  address: string;
  phone: string;
  website: string;
  ratings: string;
  name: string;
  slug: string;
  description: string;
  cover_image: Attachment;
  logo: Attachment;
  socialShare: any;
  created_at: string;
  updated_at: string;
};

//NEW TYPES

export type Categories = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    meta_description: string;
  };
};

type CallToAction = {
  id: number;
  link: string;
  label: string;
};
type Image = {
  url: string;
  altText: string;
};

export type Hero = {
  id: number;
  content: any;
  call_to_action: CallToAction;
  image: Image;
};

export type Featured = {
  id: number;
  content: any;
  call_to_action: CallToAction;
  image: Image;
};

export type HomePageData = {
  featured: Featured[];
  hero: Hero[];
};

export type Product = {
  id: number;
  attributes: {
    title: string;
    description: string;
    price: number;
    slug: string;
    reviews: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image_header: any;
    stock: number;
    product_tags: {
      data: [ItemTags];
    };
    product_categories: ItemCategories;
  };
};

export type Products = {
  data: Product[];
  meta: {
    pagination: {
      limit: number;
    };
  };
};

type ItemTags = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    meta_description: string;
  };
};

type ItemCategories = {
  data: [
    {
      id: number;
      attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
        meta_description: string;
      };
    }
  ];
};
