import { Art } from '@/interfaces/interfaces';

export interface SortCardArgs {
   artList: Art[];
   howToSort: string;
}

export const sortCard = ({ artList, howToSort }: SortCardArgs): Art[] => {
   if (howToSort === 'A-Z') {
      return [...artList].sort((a, b) => a.title.localeCompare(b.title));
   } else if (howToSort === 'Z-A') {
      return [...artList].sort((a, b) => b.title.localeCompare(a.title));
   } else {
      return artList;
   }
};
