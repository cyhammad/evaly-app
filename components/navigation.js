import { Inria_Sans } from '@next/font/google';
import React, { Component, useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
const DotsTabletMenu = dynamic(() => import('./ui/options-menu'), {
  ssr: false,
});
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiOutlineChatBubbleLeft } from 'react-icons/hi2';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { BsBucket } from 'react-icons/bs';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StoreIcon from '@mui/icons-material/Store';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { EvalyLogo } from './icons/logo';

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material';
import CategoriesMenu from './common/CategoriesMenu';
import MenuButton from './common/MenuButton';

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

import SearchBar from './search-bar';
import NavbarButtonsMain from './navbarButtonsMain';
import CartMenuWeb from './cart/CartMenuWeb';

const Navigation = (props) => {
  return (
    <nav className={inriaSans.className}>
      <div className='h-[64px] mb-2 sm:h-[100px] md:hidden'>
        <MobileNavigation />
      </div>
      <div className='hidden md:block lg:hidden'>
        <div className='fixed w-full z-30 bg-[#fff] backdrop-blur-xl'>
          <TabletNavigation />
        </div>
        <div className='h-40' />
      </div>
      <div className='hidden lg:block'>
        <div className='fixed w-full z-30 bg-[#fff] backdrop-blur-xl'>
          <WebNavigation />
        </div>
        <div className='h-40' />
      </div>
    </nav>
  );
};

export default Navigation;

// Mobile

const MobileNavigation = (props) => {
  return <MobileNav />;
};

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      toggleSearch: false,
    };
  }

  handleSearchOpen() {
    this.setState({ toggleSearch: true });
  }
  handleSearchClose() {
    this.setState({ toggleSearch: false });
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles = {
      container: {
        height: '60px',
        zIndex: '99',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
        width: '100%',
        color: 'black',
        gap: '0.5rem',
      },
      search: {
        margin: '0',
        width: '90%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
    };

    return (
      <div className='z-50 fixed top-0 w-full'>
        <div className='hidden sm:block'>
          <ContactNavigation />
        </div>
        <div style={styles.container} className='px-4'>
          <div className={this.state.menuOpen ? 'ml-1' : ''}>
            <MenuButton
              open={this.state.menuOpen}
              onClick={() => this.handleMenuClick()}
              color='black'
            />
          </div>
          <div className='hidden sm:block'>
            <EvalyLogo height={22} />
          </div>
          <div className='flex justify-end w-full pl-3'>
            <div style={styles.search}>
              <div className='w-full flex items-center justify-end'>
                <input
                  className='w-full py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 border border-black'
                  type='text'
                  onBlur={() => {
                    this.handleSearchClose();
                  }}
                  onFocus={() => {
                    this.handleSearchOpen();
                  }}
                  onChange={() => {
                    this.handleSearchOpen();
                  }}
                  onScroll={() => {
                    this.handleSearchClose();
                  }}
                  placeholder='Search for ...'
                />
              </div>
              {this.state.toggleSearch && (
                <SearchBar
                  onClose={() => {
                    this.handleSearchClose();
                  }}
                />
              )}
            </div>
            <button className='py-[9px] rounded-tr-md rounded-br-md px-3 bg-black'>
              <AiOutlineSearch color='white' />
            </button>
          </div>
        </div>
        <div>
          <Drawer
            anchor={'left'}
            open={this.state.menuOpen}
            onClose={() => {
              this.handleMenuClick();
            }}
          >
            <MobileDrawerContent />
          </Drawer>
        </div>
      </div>
    );
  }
}

const MobileDrawerContent = (props) => {
  return (
    <div className={`${inriaSans.className} w-[75vw]`}>
      <div className='px-6 mt-9'>
        <button className='flex bg-[#f3ceb0] border border-black py-2 rounded-md items-center gap-2 w-full justify-center'>
          <p className='lg:text-lg'>Login</p>
        </button>
      </div>
      <div className='h-6'></div>
      <Divider className='pt-2' />
      <div className='h-[77vh] overflow-y-scroll'>
        <List>
          {[
            'Orders',
            'Gift Cards',
            'Mobile Topup',
            'Campaigns',
            'Shop',
            'Followed Shops',
            'Vouchers',
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton className='my-1'>
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center'>
                    <ListItemIcon>
                      {index === 0 && (
                        <ReceiptLongOutlinedIcon sx={{ height: 17 }} />
                      )}
                      {index === 1 && <CardGiftcardIcon sx={{ height: 17 }} />}
                      {index === 2 && (
                        <MobileFriendlyOutlinedIcon sx={{ height: 17 }} />
                      )}
                      {index === 3 && <AcUnitIcon sx={{ height: 17 }} />}
                      {index === 4 && <StoreIcon sx={{ height: 17 }} />}
                      {index === 5 && (
                        <FavoriteBorderIcon sx={{ height: 17 }} />
                      )}
                      {index === 6 && (
                        <ConfirmationNumberOutlinedIcon sx={{ height: 17 }} />
                      )}
                    </ListItemIcon>
                    <p>{text}</p>
                  </div>
                  <div>
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <ul className='flex mt-3 font-light gap-[1px] text-[11px] mx-auto px-2'>
        <li>About Us</li>
        <li className='mx-[2px]'>&#x2022;</li>
        <li>Contact Us</li>
        <li className='mx-[2px]'>&#x2022;</li>
        <li>Privacy Policy</li>
        <li className='mx-[2px]'>&#x2022;</li>
        <li>Purchasing Policy</li>
      </ul>
    </div>
  );
};

// Tablet

const TabletNavigation = (props) => {
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggleSearch, setToggleSearch] = useState(false);
  const open = Boolean(anchorEl);
  function handleSearchOpen() {
    setToggleSearch(true);
  }
  function handleSearchClose() {
    setToggleSearch(false);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToggle(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setToggle(false);
  };
  return (
    <>
      <ContactNavigation />
      <div className='flex px-10 items-center w-full justify-between h-16'>
        <div>
          <EvalyLogo height={25} />
        </div>
        <div className='flex w-full px-5'>
          <div className='w-full relative'>
            <div className='flex items-center'>
              <input
                className='w-full py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 sm:px-4 border border-black'
                onBlur={handleSearchClose}
                onFocus={handleSearchOpen}
                onChange={handleSearchOpen}
                onScroll={handleSearchClose}
                type='text'
                placeholder='Search for ...'
              />
            </div>
            {toggleSearch && <SearchBar onClose={handleSearchClose} />}
          </div>
          <button className='py-[9px] rounded-tr-md rounded-br-md px-5 bg-black'>
            <AiOutlineSearch color='white' />
          </button>
        </div>
        <NavbarButtonsMain size='sm' />
      </div>
      <div className='bg-[#040720] px-10 justify-between flex text-white h-12'>
        <div className='flex items-center bg-red-700 px-5 w-[255px]'>
          <CategoriesMenu type='normal' />
        </div>
        <ul className='flex-1 flex justify-evenly items-center'>
          <li className='hover:text-gray-300 cursor-pointer'>All Shops</li>
          <li className='hover:text-gray-300 cursor-pointer'>Campaigns</li>
          <li className='hover:text-gray-300 cursor-pointer'>Top-up</li>
          <li className='hover:text-gray-300 cursor-pointer'>Express</li>
          <li className='hover:text-gray-300 cursor-pointer'>T10</li>
        </ul>
        <DotsTabletMenu />
      </div>
    </>
  );
};

// Notebooks & Desktops

const WebNavigation = (props) => {
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [visible, setVisible] = useState(false);
  const open = Boolean(anchorEl);

  const ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToggle(true);
  };
  function handleSearchOpen() {
    setToggleSearch(true);
  }
  function handleSearchClose() {
    setToggleSearch(false);
  }
  const handleClose = () => {
    setAnchorEl(null);
    setToggle(false);
  };
  return (
    <>
      <ContactNavigation />
      <div className='flex items-center max-w-7xl mx-auto justify-between h-16 px-10 xl:px-12 m-1'>
        <div>
          <EvalyLogo height={25} />
        </div>
        <div className='flex w-full'>
          <div className='ml-5 relative w-full'>
            <div className='flex items-center'>
              <input
                className='w-[100%] py-[7px] rounded-tl-md outline-none rounded-bl-md px-3 border border-black'
                type='text'
                onBlur={handleSearchClose}
                onFocus={handleSearchOpen}
                onChange={handleSearchOpen}
                onScroll={handleSearchClose}
                placeholder='Search for ...'
              />
            </div>
            {toggleSearch && (
              <SearchBar
                onClose={() => {
                  setToggleSearch(false);
                }}
              />
            )}
          </div>
          <button className='py-[12px] rounded-tr-md rounded-br-md px-8 bg-black mr-5'>
            <AiOutlineSearch color='white' />
          </button>
        </div>
        <NavbarButtonsMain size='md' />
      </div>
      <div className='bg-[#040720]'>
        <div className='mx-auto max-w-7xl flex text-white h-12 px-10 xl:px-12'>
          <div ref={ref} className='flex items-center bg-red-700 px-4 w-[23%]'>
            {!visible ? (
              <div
                className='flex items-center justify-between gap-3 w-full'
                id='basic-button'
                aria-haspopup='true'
              >
                <MenuIcon color='white' />
                <p className={`${inriaSans.className} text-white`}>
                  CATEGORIES
                </p>
                <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
              </div>
            ) : (
              <CategoriesMenu ref={ref} type='toggle' />
            )}
          </div>
          <ul className='flex-1 gap-6 xl:gap-14  flex items-center px-4'>
            <li className='hover:text-gray-300 cursor-pointer'>All Shops</li>
            <li className='hover:text-gray-300 cursor-pointer'>Gift Card</li>
            <li className='hover:text-gray-300 cursor-pointer'>Campaigns</li>
            <li className='hover:text-gray-300 cursor-pointer'>Express</li>
            <li className='hover:text-gray-300 cursor-pointer'>Cyclone</li>
          </ul>
          <ul className='flex gap-4 xl:gap-9 items-center'>
            <li className='hover:text-gray-300 cursor-pointer'>NewsFeed</li>
            <li className='hover:text-gray-300 cursor-pointer'>
              Merchant Zone
            </li>
            <li className='hover:text-gray-300 cursor-pointer mr-1'>Help</li>
          </ul>
        </div>
      </div>
      <CartMenuWeb open={open} anchorEl={anchorEl} toggleMenu={handleClose} />
    </>
  );
};

const ContactNavigation = () => {
  return (
    <div className='bg-[#f7f8fb]'>
      <div className='flex items-center max-w-7xl mx-auto justify-between h-10 md:h-12 px-4 md:px-10 xl:px-12'>
        <div className='flex items-center justify-between gap-8'>
          <div className='flex items-center gap-2' aria-haspopup='true'>
            <PhoneInTalkOutlinedIcon
              sx={{ width: 18, height: 18, color: '#b91c1c' }}
            />
            <p className={`${inriaSans.className} text-sm `}>09638111666</p>
          </div>
          <div className='flex items-center gap-2' aria-haspopup='true'>
            <EmailOutlinedIcon
              sx={{ width: 18, height: 18, color: '#b91c1c' }}
            />
            <p className={`${inriaSans.className} text-sm `}>
              Support@evaly.com
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2' aria-haspopup='true'>
          <PhoneIphoneOutlinedIcon
            sx={{ width: 18, height: 18, color: '#b91c1c' }}
          />
          <p className={`${inriaSans.className} text-sm `}>
            Save big on our app
          </p>
        </div>
      </div>
    </div>
  );
};
