import React from 'react';
import { ArrowButton, PageButton, PaginationWrapper } from './styled';

interface PaginationProps {
   currentPage: number;
   totalPages: number;
   handleChangePage: (page: number) => void;
}

const getVisiblePages = (currentPage: number, totalPages: number) => {
   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
   const totalPagesToShow = 5;
   let startPage = 1;

   if (currentPage > Math.floor(totalPagesToShow / 2) + 1) {
      startPage = currentPage - Math.floor(totalPagesToShow / 2);
   }

   if (startPage + totalPagesToShow > totalPages) {
      startPage = totalPages - totalPagesToShow + 1;
   }

   const visiblePages = pageNumbers.slice(
      startPage - 1,
      startPage - 2 + totalPagesToShow,
   );
   const first = visiblePages[0];
   const last = visiblePages[visiblePages.length - 1];

   if (first === 2) {
      visiblePages.unshift(1);
   }

   if (first >= 3) {
      visiblePages.shift();
      visiblePages.unshift(-1);
      visiblePages.unshift(1);
   }

   if (last + 3 <= totalPages) {
      visiblePages.push(-1);
      visiblePages.push(totalPages);
   }

   if (last >= totalPages - 2) {
      if (last === totalPages - 2) {
         visiblePages.push(totalPages - 1);
         visiblePages.push(totalPages);
      } else {
         visiblePages.push(totalPages);
      }
   }

   return visiblePages;
};

export const Pagination = ({
   currentPage,
   totalPages,
   handleChangePage,
}: PaginationProps) => {
   const visiblePages = getVisiblePages(currentPage, totalPages);

   return (
      <PaginationWrapper>
         {currentPage > 1 && (
            <ArrowButton onClick={() => handleChangePage(currentPage - 1)}>
               &lt;
            </ArrowButton>
         )}
         {visiblePages.map((pageNumber: number) => (
            <PageButton
               key={pageNumber}
               onClick={() => handleChangePage(pageNumber)}
               active={pageNumber === currentPage}
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
