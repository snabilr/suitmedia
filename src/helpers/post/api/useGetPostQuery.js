import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { axiosInstance } from '@/lib/axiosInstance';

export const useGetPostQuery = (currentPage, pageSize, sort) => {
  const { data, isLoading } = useQuery({
    queryKey: ['post', currentPage, pageSize, sort],
    queryFn: async () => {
      return await axiosInstance.get(
        `?page[number]=${currentPage}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sort}`,
      );
    },
  });

  return { data, isLoading };
};
