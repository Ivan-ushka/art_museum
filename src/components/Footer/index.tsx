import { images } from '@assets/images';
import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <footer className='main-container white'>
         <div className='between-flex'>
            <Link to='/'>
               <img className='logo' src={images.museumLogoDark} alt='museumLogo' />
            </Link>
            <img className='logo' src={images.logoModsen} alt='modsenLogo' />
         </div>
      </footer>
   );
};
