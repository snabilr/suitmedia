import { useGetPostQuery } from '../api/useGetPostQuery';

export const useGetPost = (currentPage, pageSize, sort) => {
  const { data: postData, isLoading: postLoading } = useGetPostQuery(
    currentPage,
    pageSize,
    sort,
  );

  return { postData, postLoading };
};
