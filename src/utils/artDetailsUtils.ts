import { ArtById } from '@interfaces/interfaces';

interface ArtDetail {
   label: string;
   value: string | undefined | null;
}

export const getArtDetails = (art: ArtById | undefined): ArtDetail[] => [
   { label: 'Artist Nationality:', value: art?.place_of_origin },
   { label: 'Dimensions: Sheet:', value: art?.dimensions },
   { label: 'Credit Line:', value: art?.credit_line },
   { label: 'Repository:', value: art?.place_of_origin },
];
