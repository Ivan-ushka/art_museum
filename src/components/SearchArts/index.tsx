import { getSearchArtList } from '@api/ArtActions';
import { CenteredFlex, NoResultFound, Padding } from '@pages/styled';
import { validateSearchTerm } from '@utils/validationUtils';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import { Art } from '@/interfaces/interfaces';

import useDebounce from '../../utils/hooks/useDebounce';
import { LargeArtCard } from '../Cards/LargeArtCard';
import { Loader } from '../Loader';
import { Pagination } from '../Pagination';
import { SearchInput } from '../SearchInput';
import { SortArts } from '../SortArts';
import { Title } from '../Title';
import { GridContainer, PositionRelative } from './styled';

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
      if (validateSearchTerm(debouncedSearchTerm)) {
         setSearchValidationMessage('');
         setIsLoading(true);

         getSearchArtList(debouncedSearchTerm, currentPage)
            .then(response => {
               setSearchArtList(response);
            })
            .catch(e => {
               setError(e as Error);
            })
            .finally(() => {
               setIsLoading(false);
            });
      } else {
         setSearchValidationMessage('Message length should be from 2 to 40');
      }
   }, [debouncedSearchTerm, currentPage, setError]);

   function handleChangePage(page: number) {
      setCurrentPage(page);
   }

   const handleDataToSearch = (event: ChangeEvent<HTMLInputElement>) => {
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
