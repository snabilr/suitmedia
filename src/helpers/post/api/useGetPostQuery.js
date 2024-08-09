import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetPostQuery = (currentPage, pageSize, sort) => {
  const { data, isLoading } = useQuery({
    queryKey: ['post', currentPage, pageSize, sort],
    queryFn: async () => {
      // console.log(currentPage);
      // console.log(pageSize);
      // console.log(sort);
      return await axios.get(
        `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPage}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sort}`,
      );
    },
  });

  return { data, isLoading };
};
