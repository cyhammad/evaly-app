import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Badge from './badge';
import CartMenuWeb from './cart/CartMenuWeb';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Icon as IconifyIcon } from '@iconify/react';
import shoppingBag from '@iconify/icons-lucide/shopping-bag';
import userIcon from '@iconify/icons-lucide/user';
import bellIcon from '@iconify/icons-lucide/bell';
import messageSquare from '@iconify/icons-lucide/message-square';

const Icon = ({ iconName }) => {
  return (
    <>
      <IconifyIcon
        className='block lg:hidden'
        icon={iconName}
        width={20}
        height={19}
        color='inherit'
      />
      <IconifyIcon
        className='hidden lg:block'
        icon={iconName}
        width={24}
        height={23}
        color='inherit'
      />
    </>
  );
};

import { useSelector } from 'react-redux';

const NavbarButtonsMain = ({ size }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [totalItems, setTotalItems] = useState(0);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    let total = 0;
    cart.length > 0 &&
      cart.forEach((item) => {
        total += item.quantity;
      });
    setTotalItems(total);
  }, [cart]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setAnchorEl(null);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anchorEl]);

  return (
    <React.Fragment>
      <div className='flex gap-2 md:gap-3'>
        <IconButton
          sx={{ border: '1px solid #ccc' }}
          className='border border-[#ccc] rounded-full shadow-md'
          aria-describedby='cart-button'
          onClick={handleClick}
          color='inherit'
        >
          <Badge number={totalItems}>
            <Icon iconName={shoppingBag} />
          </Badge>
        </IconButton>
        <IconButton
          sx={{ border: '1px solid #ccc' }}
          className='border border-[#ccc] rounded-full shadow-md'
          color='inherit'
        >
          <Icon iconName={bellIcon} />
          {/* <HomeIcon className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`} /> */}
        </IconButton>
        <IconButton
          sx={{ border: '1px solid #ccc' }}
          className='border border-[#ccc] rounded-full shadow-md'
          color='inherit'
        >
          <Icon iconName={messageSquare} />
          {/* <EmojiEventsIcon
            className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`}
          /> */}
        </IconButton>
        <IconButton
          sx={{ border: '1px solid #ccc' }}
          className='border border-[#ccc] rounded-full shadow-md'
          color='inherit'
        >
          <Icon iconName={userIcon} />
          {/* <PersonIcon className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`} /> */}
        </IconButton>
      </div>
      <CartMenuWeb open={open} toggleMenu={handleClose} anchorEl={anchorEl} />
    </React.Fragment>
  );
};

export default NavbarButtonsMain;
