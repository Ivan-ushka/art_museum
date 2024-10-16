import React from 'react';
import { ArrowButton, PageButton, PaginationWrapper } from './styled';

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
   const getVisiblePages = (currentPage: number, totalPages: number) => {
      if (currentPage < 4) {
         return [1, 2, 3, 4, -1, totalPages];
      }

      if (currentPage > totalPages - 3) {
         return [1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      }

      return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
   };

   const visiblePages = getVisiblePages(currentPage, totalPages);

   return (
      <PaginationWrapper>
         {currentPage > 1 && (
            <ArrowButton onClick={() => handleChangePage(currentPage - 1)}>
               &lt;
            </ArrowButton>
         )}

         {visiblePages.map((pageNumber: number, index: number) => (
            <PageButton
               key={index}
               onClick={() => handleChangePage(pageNumber)}
               $active={pageNumber === currentPage}
            >
               {pageNumber === -1 ? '...' : pageNumber}
            </PageButton>
         ))}

         {currentPage < totalPages && (
            <ArrowButton onClick={() => handleChangePage(currentPage + 1)}>
               &gt;
            </ArrowButton>
         )}
      </PaginationWrapper>
   );
};
