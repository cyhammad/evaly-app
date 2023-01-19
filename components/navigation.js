import { Inria_Sans } from '@next/font/google';
import { Component, useState } from 'react';
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
import CustomizedMenus from './ui/options-menu';

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

import SearchBar from './search-bar';

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
  return (
    // <div className='h-[64px]'>
    <MobileNav />
    // </div>
  );
};

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : 'black',
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        // minWidth: '32px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        cursor: 'pointer',
        paddingRight: 7,
        // padding: '4px',
      },
      line: {
        height: '2.2px',
        width: '17px',
        background: this.state.color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '4px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? 'translateX(-16px)' : 'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-2px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '4px',
      },
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      toggleSearch: false,
    };
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
        // position: 'fixed',
        // top: 0,
        // left: 0,
        height: '60px',
        zIndex: '99',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
        width: '100%',
        color: 'black',
        gap: '0.5rem',
        // padding: '0 12px',
        // paddingRight: '8px',
      },
      search: {
        margin: '0',
        width: '90%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
          <div style={styles.search}>
            <div className='w-full pl-3 flex items-center justify-end'>
              <input
                className='w-[90%] py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 border border-black'
                type='text'
                onFocus={() => {
                  this.setState({ toggleSearch: true });
                }}
                onChange={() => {
                  this.setState({ toggleSearch: true });
                }}
                placeholder='Search for ...'
              />
              <button className='py-[9px] rounded-tr-md rounded-br-md px-2 bg-black'>
                <AiOutlineSearch color='white' />
              </button>
            </div>
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
        {this.state.toggleSearch && (
          <SearchBar
            onClose={() => {
              this.setState({ toggleSearch: false });
            }}
          />
        )}
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
        <div className='w-[60%] flex items-center'>
          <input
            className='w-[90%] py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 sm:px-4 border border-black'
            onFocus={() => {
              setToggleSearch(true);
            }}
            onChange={() => {
              setToggleSearch(true);
            }}
            type='text'
            placeholder='Search for ...'
          />
          <button className='py-[9px] rounded-tr-md rounded-br-md px-5 bg-black'>
            <AiOutlineSearch color='white' />
          </button>
        </div>
        <div className='flex gap-2'>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            className='border border-[#ccc] rounded-full shadow-md'
          >
            <BsBucket className='h-4 w-4' />
          </IconButton>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            className='border border-[#ccc] rounded-full shadow-md'
          >
            <IoMdNotificationsOutline className='h-4 w-4' />
          </IconButton>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            className='border border-[#ccc] rounded-full shadow-md'
          >
            <HiOutlineChatBubbleLeft className='h-4 w-4' />
          </IconButton>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            className='border border-[#ccc] rounded-full shadow-md'
          >
            <AiOutlineUser className='h-4 w-4' />
          </IconButton>
        </div>
      </div>
      <div className='bg-[#040720] px-10 justify-between flex text-white h-12'>
        <div className='flex items-center bg-red-700 px-5'>
          <button
            className='flex items-center gap-3'
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuButton
              open={toggle}
              onClick={() => {
                setToggle(!toggle);
              }}
              color='white'
            />
            <p className={`${inriaSans.className} text-white`}>CATEGORIES</p>
            <div className='ml-3'>
              {!toggle ? (
                <KeyboardArrowRightIcon sx={{ color: '#fff' }} />
              ) : (
                <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
              )}
            </div>
          </button>
          <Menu
            sx={{ transform: 'translate(-21px,12px)' }}
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {[
              'Desktop',
              'Laptop',
              "Men's Watch",
              'Microwave Oven',
              'Motor Bike',
              'Refrigerator',
              'Smart Phone',
              'Smart TV & Android TV',
              'Speaker',
              'Split AC',
            ].map((item, i, arr) => {
              return (
                <div key={item}>
                  <MenuItem
                    key={item}
                    sx={{ width: 210 }}
                    onClick={handleClose}
                  >
                    <div
                      className={`${inriaSans.className} flex items-center justify-between w-full`}
                    >
                      <p>{item}</p>
                      <KeyboardArrowRightIcon sx={{ height: 17 }} />
                    </div>
                  </MenuItem>
                  {!(i === arr.length - 1) && <Divider />}
                </div>
              );
            })}
          </Menu>
        </div>
        <ul className='flex-1 flex justify-evenly items-center'>
          <li className='hover:text-gray-300 cursor-pointer'>All Shops</li>
          <li className='hover:text-gray-300 cursor-pointer'>Campaigns</li>
          <li className='hover:text-gray-300 cursor-pointer'>Top-up</li>
          <li className='hover:text-gray-300 cursor-pointer'>Express</li>
          <li className='hover:text-gray-300 cursor-pointer'>T10</li>
        </ul>
        {/* <IconButton className="translate-x-3"> */}
        {/* <MoreVertOutlinedIcon sx={{ color: "#fff" }} /> */}
        <DotsTabletMenu />
        {/* </IconButton> */}
        {toggleSearch && (
          <SearchBar
            onClose={() => {
              setToggleSearch(false);
            }}
          />
        )}
      </div>
    </>
  );
};

// Notebooks & Desktops

const WebNavigation = (props) => {
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggleSearch, setToggleSearch] = useState(false);
  const open = Boolean(anchorEl);
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
      <div className='flex items-center max-w-7xl mx-auto justify-between h-16 px-10 xl:px-12 m-1'>
        <div>
          <EvalyLogo height={25} />
        </div>
        <div className='flex w-[65%] xl:w-[73%] items-center'>
          <input
            className='w-[100%] py-[7px] rounded-tl-md outline-none rounded-bl-md px-3 border border-black'
            type='text'
            onFocus={() => {
              setToggleSearch(true);
            }}
            onChange={() => {
              setToggleSearch(true);
            }}
            placeholder='Search for ...'
          />
          <button className='py-[12px] rounded-tr-md rounded-br-md px-8 bg-black'>
            <AiOutlineSearch color='white' />
          </button>
        </div>
        <div className='flex gap-2 md:gap-3'>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            className='border border-[#ccc] rounded-full shadow-md'
          >
            <BsBucket className='h-5 w-5' />
          </IconButton>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            className='border border-[#ccc] rounded-full shadow-md'
          >
            <IoMdNotificationsOutline className='h-5 w-5' />
          </IconButton>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            className='border border-[#ccc] rounded-full shadow-md'
          >
            <HiOutlineChatBubbleLeft className='h-5 w-5' />
          </IconButton>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            className='border border-[#ccc] rounded-full shadow-md'
          >
            <AiOutlineUser className='h-5 w-5' />
          </IconButton>
        </div>
      </div>
      <div className='bg-[#040720]'>
        <div className='mx-auto max-w-7xl flex text-white h-12 px-10 xl:px-12'>
          <div className='flex items-center bg-red-700 px-4 w-[22%]'>
            <div
              className='flex items-center justify-between gap-3 w-full'
              id='basic-button'
              aria-haspopup='true'
            >
              <MenuIcon color='white' />
              <p className={`${inriaSans.className} text-white`}>CATEGORIES</p>
              <div className='ml-3'>
                <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
              </div>
            </div>
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
        {toggleSearch && (
          <SearchBar
            onClose={() => {
              setToggleSearch(false);
            }}
          />
        )}
      </div>
    </>
  );
};

const ContactNavigation = () => {
  return (
    <div className='bg-[#f7f8fb]'>
      <div className='flex items-center max-w-7xl mx-auto justify-between h-10 md:h-12 px-5 md:px-10'>
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
