import React, { FC } from 'react';
import { Input, InputWrapper, SearchTitle, SearchWrapper } from './styled';
import { Icon, YellowText } from '../../pages/styled';
import loop from '../../assets/loop.svg';

interface SearchInputProps {
   dataToSearch: string;
   handleDataToSearch: (search: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
   dataToSearch,
   handleDataToSearch,
}) => {
   return (
      <SearchWrapper>
         <SearchTitle>
            Let&apos;s Find Some <YellowText>Art</YellowText> Here!
         </SearchTitle>
         <InputWrapper>
            <Input
               placeholder='Search art, artist, work...'
               onChange={e => handleDataToSearch(e)}
               value={dataToSearch}
            />
            <Icon src={loop} alt='loop' />
         </InputWrapper>
      </SearchWrapper>
   );
};
