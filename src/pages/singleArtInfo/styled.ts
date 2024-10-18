import styled from 'styled-components';

export const ArtInfoContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 120px 0;
   gap: 80px;

   @media (max-width: 1920px) {
      padding: 80px 0;
      gap: 60px;
   }

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

export const ArtInfoImageWrap = styled.div`
   flex: 1;
   position: relative;
`;

export const ArtInfoImage = styled.img`
   height: 100%;
   max-height: 600px;
   width: 100%;
   border-radius: 2px;
`;

export const ArtInfoDetails = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   justify-content: start;
   align-items: stretch;
   font-family: 'Lexend Deca', sans-serif;
`;

export const ArtInfoTitleContainer = styled.div`
   display: flex;
   flex-direction: column;

   @media (max-width: 768px) {
      text-align: center;
   }
`;

export const ArtInfoTitle = styled.div`
   font-size: 32px;
   margin-bottom: 32px;

   @media (max-width: 1200px) {
      font-size: 26px;
      margin-bottom: 26px;
   }

   @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 20px;
   }
`;

export const ArtInfoArtist = styled.div`
   font-size: 24px;
   margin-bottom: 16px;

   @media (max-width: 768px) {
      font-size: 20px;
   }
`;

export const ArtInfoYear = styled.div`
   font-size: 16px;
   font-weight: bold;
   margin-bottom: 172px;

   @media (max-width: 1920px) {
      margin-bottom: 60px;
   }

   @media (max-width: 1600px) {
      margin-bottom: 50px;
   }

   @media (max-width: 768px) {
      margin-bottom: 40px;
   }
`;

export const ArtInfoOverview = styled.div`
   @media (max-width: 1600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      flex: 1;
   }
`;

export const ArtInfoOverviewItem = styled.div``;

export const ArtInfoOverviewTitle = styled.div`
   font-weight: 500;
   font-size: 32px;
   margin-bottom: 32px;

   @media (max-width: 768px) {
      text-align: center;
      font-size: 28px;
   }
`;

export const ZContainer = styled.div`
   position: absolute;
   right: 10px;
   top: 10px;
   z-index: 100;
`;
