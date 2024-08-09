'use client';

import { RiArrowDownSFill } from 'react-icons/ri';
import PostCard from './PostCard';
import { useGetPost } from '@/helpers/post/hooks/userGetPost';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Pagination from './Pagination';
import { useSearchParams, useRouter } from 'next/navigation';

const showItemPerPage = [10, 20, 50];
const sortBy = [
  {
    name: 'Newest',
    value: '-published_at',
  },
  {
    name: 'Latest',
    value: 'published_at',
  },
];

const createQueryString = (searchParams, paramsToUpdate) => {
  const params = new URLSearchParams(searchParams);
  Object.entries(paramsToUpdate).forEach(([key, value]) => {
    params.set(key, value);
  });
  return params.toString();
};

export default function ListPost() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialPage = Number(searchParams.get('page')) || 1;
  const initialPageSize = Number(searchParams.get('pageSize')) || 10;
  const initialSort = searchParams.get('sort') || 'published_at';

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [sort, setSort] = useState(initialSort);

  const { postData, postLoading } = useGetPost(currentPage, pageSize, sort);
  const dataPostFromAPI = postData?.data?.data;
  const totalPageFromAPI = postData?.data?.meta?.last_page;
  const fromPost = postData?.data?.meta?.from;
  const toPost = postData?.data?.meta?.to;
  const totalPost = postData?.data?.meta?.total;

  const [totalPage, setTotalPage] = useState();

  const updateUrlParams = (newParams) => {
    const queryString = createQueryString(searchParams, newParams);
    router.push(`?${queryString}`);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Number(prevPage) + 1;
      updateUrlParams({ page: newPage });
      return newPage;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Number(prevPage) - 1;
      updateUrlParams({ page: newPage });
      return newPage;
    });
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    updateUrlParams({ pageSize: newSize, page: 1 });
    setCurrentPage(1);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    updateUrlParams({ sort: newSort, page: 1 });
    setCurrentPage(1);
  };

  useEffect(() => {
    if (totalPageFromAPI) {
      setTotalPage(totalPageFromAPI);
    }
  }, [totalPageFromAPI]);

  if (postLoading) return <Loading />;

  return (
    <div
      id='listPost'
      className='flex w-full flex-col items-center justify-between gap-10 p-20'
    >
      <div className='flex w-full items-center justify-between'>
        <div>{`Showing ${fromPost}-${toPost} of ${totalPost}`}</div>
        <div className='flex gap-10'>
          <div className='flex items-center justify-between'>
            <div>Show per page:</div>
            <select
              className='select select-bordered m-1 flex w-[150px] max-w-xs justify-between rounded-full border-2 border-black bg-white text-black hover:bg-slate-200'
              value={pageSize}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
            >
              {showItemPerPage.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center justify-between'>
            <div>Sort by:</div>
            <select
              className='select select-bordered m-1 flex w-[150px] max-w-xs justify-between rounded-full border-2 border-black bg-white text-black hover:bg-slate-200'
              value={sort}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              {sortBy.map((sortOption) => (
                <option key={sortOption.value} value={sortOption.value}>
                  {sortOption.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {dataPostFromAPI?.map((post) => (
          <PostCard
            key={post?.id}
            title={post.title}
            postDate={post.published_at}
            image={post.small_image[0]}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        nextPageFn={handleNextPage}
        prevPageFn={handlePrevPage}
      />
    </div>
  );
}
