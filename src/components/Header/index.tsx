import { images } from '@assets/images';
import { DropDownMenu } from '@components/DropDownMenu';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
   const location = useLocation();
   const isHome: boolean = location.pathname === '/';

   return (
      <header className='main-container gradient'>
         <div className='between-flex'>
            <Link to='/'>
               <img className='logo' src={images.museumLogo} alt='museumLogo' />
            </Link>
            <div className='menu-desktop'>
               {!isHome && (
                  <Link to='/'>
                     <div className='menu-desktop-item'>
                        <img
                           className='menu-desktop-image'
                           src={images.home}
                           alt='home'
                        />
                        <div className='menu-desktop-text'>Home</div>
                     </div>
                  </Link>
               )}

               <Link to='/favorites'>
                  <div className='menu-desktop-item'>
                     <img
                        className='menu-desktop-image'
                        src={images.bookmark}
                        alt='bookmark'
                     />
                     <div className='menu-desktop-text'>Your favorites</div>
                  </div>
               </Link>
            </div>
            <DropDownMenu />
         </div>
      </header>
   );
};
