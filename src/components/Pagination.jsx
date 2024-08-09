export default function Pagination(props) {
  const { totalPage, currentPage, nextPageFn, prevPageFn } = props;

  return (
    <div>
      <div className='join'>
        <button
          className='join-item btn bg-white hover:bg-slate-300'
          disabled={currentPage == 1}
          onClick={prevPageFn}
        >
          «
        </button>
        <button className='join-item btn bg-white hover:bg-slate-300'>
          {`Page ${currentPage}/${totalPage}`}
        </button>
        <button
          className='join-item btn bg-white hover:bg-slate-300'
          disabled={currentPage == totalPage}
          onClick={nextPageFn}
        >
          »
        </button>
      </div>
    </div>
  );
}
