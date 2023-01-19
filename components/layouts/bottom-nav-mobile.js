import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { EvalyLogo } from '../icons/logo';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Image from 'next/image';

import { Inria_Sans } from '@next/font/google';

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(2);

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
            icon={<LocalMallOutlinedIcon />}
          />
          <BottomNavigationAction
            label={<p className={inriaSans.className}>Messages</p>}
            icon={<ChatBubbleOutlineOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{
              height: 0,
              padding: { xs: '5px' },
              // '& img': {
              //   marginRight: { xs: '-6px' },
              // },
            }}
            label=''
            icon={<Logo />}
          />
          <BottomNavigationAction
            label={<p className={inriaSans.className}>Notifications</p>}
            icon={<NotificationsNoneOutlinedIcon />}
          />
          <BottomNavigationAction
            label={<p className={inriaSans.className}>Account</p>}
            icon={<AccountCircleOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

const Logo = () => {
  return (
    <Image
      className='bg-red-200 border border-red-400 translate-y-3 p-2 rounded-full w-[48px] h-[48px] sm:w-[55px] h-[55px] mr-[-15px] sm:mr-[0px]'
      src={'/evaly-logo.png'}
      alt={'Logo'}
      width={40}
      height={40}
    />
  );
};
