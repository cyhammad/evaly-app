import React from 'react';
import { Inria_Sans } from '@next/font/google';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Button } from '@mui/material';

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function BottomNavigation() {
  const [value, setValue] = React.useState(2);
  return (
    <div class='w-full h-screen'>
      <section
        id='bottom-navigation'
        class='md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow'
      >
        <section
          id='bottom-navigation'
          class='block fixed inset-x-0 bottom-0 z-10 bg-white shadow'
        >
          <div id='tabs' class='flex justify-between'>
            {mobileNav.map((el) => (
              <>
                {/* <a
            key={el.label}
              href='#'
              class='w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1'
            > */}
                <button key={el.label} endIcon={el.icon}>
                  {el.label}
                </button>
                {/* <svg
                width='25'
                height='25'
                viewBox='0 0 42 42'
                class='inline-block mb-1'
              > 
              
             
             <span class='tab tab-home block text-xs'>Home</span>
             </a> */}
              </>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

const Logo = () => {
  return (
    <Image
      className='bg-red-200 border border-red-400 translate-y-3 p-2 rounded-full w-[48px] h-[48px] sm:w-[55px] h-[55px] mr-[-15px] xs:mr-[0px]'
      src={'/evaly-logo.png'}
      alt={'Logo'}
      width={40}
      height={40}
    />
  );
};

const mobileNav = [
  { label: 'Cart', icon: <LocalMallOutlinedIcon /> },
  { label: 'Messages', icon: <ChatBubbleOutlineOutlinedIcon /> },
  { label: 'Notifications', icon: <NotificationsNoneOutlinedIcon /> },
  { label: 'Account', icon: <AccountCircleOutlinedIcon /> },
];
