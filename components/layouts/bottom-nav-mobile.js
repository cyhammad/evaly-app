import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { EvalyLogo } from '../icons/logo';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { Badge, styled } from '@mui/material';
import { inriaSans } from '../utils/getinriaFont';
import { Icon } from '@iconify/react';

import shoppingBag from '@iconify/icons-lucide/shopping-bag';
import userIcon from '@iconify/icons-lucide/user';
import bellIcon from '@iconify/icons-lucide/bell';
import messageSquare from '@iconify/icons-lucide/message-square';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length > 0) {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity;
      });
      setTotalItems(total);
    }
  }, [cart]);

  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0'>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          className='bottomNavigation'
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label={<p className={inriaSans.className}>Cart</p>}
            icon={
              <BadgeExt
                badgeContent={totalItems.toString()}
                badgeColor='#b91c1c'
              >
                <Icon
                  icon={shoppingBag}
                  width={22}
                  height={22}
                  color='inherit'
                />
              </BadgeExt>
            }
          />
          <BottomNavigationAction
            label={<p className={inriaSans.className}>Messages</p>}
            icon={
              <Icon
                icon={messageSquare}
                width={22}
                height={22}
                color='inherit'
              />
            }
          />
          <BottomNavigationAction
            sx={{
              height: 0,
              padding: { xs: '5px' },
            }}
            label=''
            icon={<Logo />}
          />
          <BottomNavigationAction
            label={<p className={inriaSans.className}>Notifications</p>}
            icon={
              <Icon icon={bellIcon} width={22} height={22} color='inherit' />
            }
          />
          <BottomNavigationAction
            label={<p className={inriaSans.className}>Account</p>}
            icon={
              <Icon icon={userIcon} width={22} height={22} color='inherit' />
            }
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

const Logo = () => {
  return (
    <Image
      className='bg-red-200 border border-red-400 translate-y-3 p-2 rounded-full w-[48px] h-[48px] sm:w-[55px] sm:h-[55px]'
      src={'/evaly-logo.png'}
      alt={'Logo'}
      width={40}
      height={40}
    />
  );
};

const BadgeExt = styled(Badge, {
  shouldForwardProp: (props) => props !== 'badgeColor',
})(({ badgeColor }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: badgeColor,
    color: '#fff',
  },
}));
