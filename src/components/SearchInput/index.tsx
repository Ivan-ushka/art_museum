import { images } from '@assets/images';
import { HugeTitle, Icon, YellowText } from '@pages/styled';
import { ChangeEvent, FC } from 'react';

import { ErrorDiv, Input, InputWrapper, SearchWrapper } from './styled';

interface SearchInputProps {
   dataToSearch: string;
   handleDataToSearch: (search: ChangeEvent<HTMLInputElement>) => void;
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
            <Icon src={images.loop} alt='loop' />
         </InputWrapper>
         <ErrorDiv>{searchValidationMessage}</ErrorDiv>
      </SearchWrapper>
   );
};
