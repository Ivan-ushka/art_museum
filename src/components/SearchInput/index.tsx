import React, { FC } from 'react';
import { ErrorDiv, Input, InputWrapper, SearchWrapper } from './styled';
import { HugeTitle, Icon, YellowText } from '../../pages/styled';
import loop from '../../assets/loop.svg';

interface SearchInputProps {
   dataToSearch: string;
   handleDataToSearch: (search: React.ChangeEvent<HTMLInputElement>) => void;
   searchValidationMessage: string;
}

export const SearchInput: FC<SearchInputProps> = ({
   dataToSearch,
   handleDataToSearch,
   searchValidationMessage,
}) => {
   return (
      <SearchWrapper>
         <HugeTitle>
            Let&apos;s Find Some <YellowText>Art</YellowText> Here!
         </HugeTitle>
         <InputWrapper>
            <Input
               required
               maxLength={50}
               minLength={2}
               placeholder='Search art, artist, work...'
               onChange={e => handleDataToSearch(e)}
               value={dataToSearch}
            />
            <Icon src={loop} alt='loop' />
         </InputWrapper>
         <ErrorDiv>{searchValidationMessage}</ErrorDiv>
      </SearchWrapper>
   );
};
