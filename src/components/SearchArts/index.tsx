import React, { FC, useEffect, useState } from 'react';
import { Art } from '../../http/interfaces';
import { GridContainer, PositionRelative } from './styled';
import { Title } from '../Title';
import { LargeArtCard } from '../Cards/LargeArtCard';
import { Pagination } from '../Pagination';
import { CenteredFlex, NoResultFound, Padding } from '../../pages/styled';
import { getSearchArtList } from '../../http/ArtActions';
import { SearchInput } from '../SearchInput';
import useDebounce from '../../hooks/useDebounce';
import Loader from '../Loader';
import SortArts from '../SortArts';

interface SearchArtsProps {
   setError: (error: Error | null) => void;
}

export const SearchArts: FC<SearchArtsProps> = ({ setError }) => {
   const [searchArtList, setSearchArtList] = useState<Art[]>([]);

   const [dataToSearch, setDataToSearch] = useState<string>('');
   const [currentPage, setCurrentPage] = useState<number>(1);

   const debouncedSearchTerm = useDebounce(dataToSearch, 200);
   const [searchValidationMessage, setSearchValidationMessage] = useState<string>('');
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
   }, [currentPage, setError]);

   const validateSearchTerm = (term: string) => {
      if (term.length === 0) {
         setSearchValidationMessage('');
         return true;
      }
      console.log(1);
      if (term.length <= 2) {
         console.log(2);
         setSearchValidationMessage('Message length should be at least 3 letters');
         return false;
      }
      if (term.length > 40) {
         setSearchValidationMessage('Message length should be less than 40 letters');
         return false;
      }
      setSearchValidationMessage('');
      return true;
   };

   useEffect(() => {
      if (validateSearchTerm(debouncedSearchTerm)) {
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
   }, [debouncedSearchTerm, setError]);

   function handleChangePage(page: number) {
      setCurrentPage(page);
   }

   const handleDataToSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDataToSearch(event.target.value);
   };

   return (
      <CenteredFlex>
         <PositionRelative>
            <SortArts artList={searchArtList} setArtList={setSearchArtList} />
            <SearchInput
               dataToSearch={dataToSearch}
               handleDataToSearch={handleDataToSearch}
               searchValidationMessage={searchValidationMessage}
            />
         </PositionRelative>
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
