import { CategoriesQueryOptionsType, Category } from "@framework/types";
import http from "@framework/utils/http";
import {
  NEW_API_ENDPOINTS,
  API_ENDPOINTS,
} from "@framework/utils/api-endpoints";
import { Categories } from "@framework/types";
import { useQuery } from "react-query";

export const fetchCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.CATEGORIES);
  return { categories: { data: data as Category[] } };
};

const fetchAncientCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.CATEGORIES_ANCIENT);
  return { categories: { data: data as Category[] } };
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  if (options.demoVariant === "ancient") {
    return useQuery<{ categories: { data: Category[] } }, Error>(
      [API_ENDPOINTS.CATEGORIES, options],
      fetchAncientCategories
    );
  }
  return useQuery<{ categories: { data: Category[] } }, Error>(
    [API_ENDPOINTS.CATEGORIES, options],
    fetchCategories
  );
};

export const getCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(NEW_API_ENDPOINTS.GET_CATEGORIES);
  return data.data.map((category: Categories) => ({
    ...category.attributes,
    id: category.id,
  }));
};
