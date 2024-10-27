import { images } from '@assets/images';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
   const location = useLocation();
   const isHome: boolean = location.pathname === '/';

   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

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

            <img
               className='menu-mobile-img'
               src={images.burgerMenu}
               alt='burgerMenu'
               onClick={toggleDropdown}
            />
            <div className={`dropdown-menu ${isOpen ? 'hidden' : 'open'}`}>
               <Link to='/'>
                  <div className='dropdown-menu-item'>Home</div>
               </Link>
               <Link to='/favorites'>
                  <div className='dropdown-menu-item'>Your favorites</div>
               </Link>
            </div>
         </div>
      </header>
   );
};
