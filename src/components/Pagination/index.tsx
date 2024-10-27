import { getVisiblePages } from '@utils/paginationUtils';

interface PaginationProps {
   currentPage: number;
   totalPages: number;
   handleChangePage: (page: number) => void;
}

export const Pagination = ({
   currentPage,
   totalPages,
   handleChangePage,
}: PaginationProps) => {
   const visiblePages = getVisiblePages(currentPage, totalPages);

   return (
      <div className='pagination-wrapper'>
         {currentPage > 1 && (
            <div
               className='arrow-button'
               onClick={() => handleChangePage(currentPage - 1)}
            >
               &lt;
            </div>
         )}

         {visiblePages.map((pageNumber: number) => (
            <button
               className={`page-button ${pageNumber === currentPage ? 'active' : ''}`}
               key={pageNumber}
               onClick={() => handleChangePage(pageNumber)}
            >
               {pageNumber === -1 ? '...' : pageNumber}
            </button>
         ))}

         {currentPage < totalPages && (
            <div
               className='arrow-button'
               onClick={() => handleChangePage(currentPage + 1)}
            >
               &gt;
            </div>
         )}
      </div>
   );
};
