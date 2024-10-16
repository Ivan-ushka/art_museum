import React, { useEffect, useState } from 'react';
import { Art } from '../../http/interfaces';
import { GridContainer } from './styled';
import { Title } from '../Title';
import { LargeArtCard } from '../Cards/LargeArtCard';
import { Pagination } from '../Pagination';
import { CenteredFlex, NoResultFound, Padding } from '../../pages/styled';
import { getSearchArtList } from '../../http/ArtActions';
import { SearchInput } from '../SearchInput';
import useDebounce from '../../hooks/useDebounce';
import Loader from '../Loader';

export const SearchArts: React.FC = () => {
   const [searchArtList, setSearchArtList] = useState<Art[]>([]);

   const [dataToSearch, setDataToSearch] = useState<string>('');
   const [currentPage, setCurrentPage] = useState<number>(1);

   const debouncedSearchTerm = useDebounce(dataToSearch, 200);

   const [error, setError] = useState<Error | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      (async () => {
         setIsLoading(true);
         try {
            const response = await getSearchArtList(dataToSearch, currentPage);
            setSearchArtList(response);
         } catch (e) {
            setError(e as Error);
         }
         setIsLoading(false);
      })();
   }, [currentPage]);

   useEffect(() => {
      if (debouncedSearchTerm) {
         (async () => {
            setIsLoading(true);
            try {
               const response = await getSearchArtList(debouncedSearchTerm);
               setSearchArtList(response);
            } catch (e) {
               setError(e as Error);
            }
            setIsLoading(false);
         })();
      }
   }, [debouncedSearchTerm]);

   function handleChangePage(page: number) {
      setCurrentPage(page);
   }

   const handleDataToSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDataToSearch(event.target.value);
   };

   if (error) return <div>{error.message}</div>;

   return (
      <CenteredFlex>
         <SearchInput
            dataToSearch={dataToSearch}
            handleDataToSearch={handleDataToSearch}
         />
         <Title preTitle={'Topics for you'} title={'Our special gallery'} />
         {isLoading ? (
            <CenteredFlex>
               <Padding $padding={'190px'}>
                  <Loader size={100} />
               </Padding>
            </CenteredFlex>
         ) : searchArtList && searchArtList.length > 0 ? (
            <GridContainer>
               {searchArtList.map(art => (
                  <LargeArtCard art={art} key={art.id} />
               ))}
            </GridContainer>
         ) : (
            <NoResultFound>No results found</NoResultFound>
         )}
         <Pagination
            currentPage={currentPage}
            totalPages={100}
            handleChangePage={handleChangePage}
         />
      </CenteredFlex>
   );
};
