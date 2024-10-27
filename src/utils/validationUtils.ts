export const validateSearchTerm = (term: string): boolean => {
   if (term.length === 0) {
      return true;
   }
   if (term.length <= 2) {
      return false;
   }

   return term.length <= 40;
};
