import React from 'react';
import ReactPaginate from 'react-paginate';


const Page = ({info, pageNum, setPageNum}) => {
  return(<ReactPaginate 
    className="pagination justify-content-center gap-4"
    nextLabel="next"
    nextClassName="btn btn-info"
    previousLabel="prev"
    previousClassName="btn btn-info"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="active"
    forcePage={pageNum ===1? 0 : pageNum -1 }
    onPageChange={(data) =>{
        setPageNum(data.selected + 1)
    }}
    pageCount={info?.pages}
    />)
}

export default Page