import { Products } from '@framework/types';
import http from '@framework/utils/http';
import { NEW_API_ENDPOINTS} from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const getPopularProducts = async () => {
  const { data } = await http.get(NEW_API_ENDPOINTS.GET_POPULAR_PRODUCTS);
  return data;
}

export const useGetPopularProductsQuery = () => {
  return useQuery<Products, Error>([NEW_API_ENDPOINTS.GET_POPULAR_PRODUCTS], getPopularProducts);
};
