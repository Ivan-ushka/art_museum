import { images } from '@assets/images';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const DropDownMenu = () => {
   const [isOpen, setIsOpen] = useState(false);
   const imgRef = useRef<HTMLImageElement>(null);

   const handleClickOutside = (event: MouseEvent) => {
      if (imgRef.current && !imgRef.current.contains(event.target as Node)) {
         setIsOpen(false);
      } else {
         setIsOpen(prev => !prev);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <>
         <img
            className='menu-mobile-img'
            src={images.burgerMenu}
            alt='burgerMenu'
            ref={imgRef}
         />
         <div className={`dropdown-menu ${!isOpen ? 'hidden' : 'open'}`}>
            <Link to='/'>
               <div className='dropdown-menu-item'>Home</div>
            </Link>
            <Link to='/favorites'>
               <div className='dropdown-menu-item'>Your favorites</div>
            </Link>
         </div>
      </>
   );
};
