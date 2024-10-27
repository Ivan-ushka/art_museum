import { images } from '@assets/images';
import { ChangeEvent, FC } from 'react';

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
      <div className='search-wrapper'>
         <div className='huge-title'>
            Let&apos;s Find Some <span className='yellow-text'>Art</span> Here!
         </div>
         <div className='input-wrapper'>
            <input
               className='search-input'
               required
               maxLength={50}
               minLength={2}
               placeholder='Search art, artist, work...'
               onChange={e => handleDataToSearch(e)}
               value={dataToSearch}
            />
            <img className='icon' src={images.loop} alt='loop' />
         </div>
         <div className='search-error'>{searchValidationMessage}</div>
      </div>
   );
};
