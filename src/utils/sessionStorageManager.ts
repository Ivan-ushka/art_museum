import { Art } from '@/interfaces/interfaces';

export class SessionStorageManager {
   private static STORAGE_KEY = 'paintings';

   static getPaintings(): Art[] {
      return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY) || '[]');
   }

   static savePainting(art: Art): void {
      const paintings = this.getPaintings();

      if (!paintings.some(p => p.id === art.id)) {
         paintings.push(art);
      } else {
         const filtered = paintings.filter(item => item.id !== art.id);
         sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
         return;
      }

      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(paintings));
   }

   static isPaintingInStorage(art: Art): boolean {
      const paintings = this.getPaintings();
      return paintings.some(p => p.id === art.id);
   }
}
