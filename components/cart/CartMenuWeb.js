import { Box, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import Button from '../Button';
import MenuPopover from '../MenuPopover';
import CartItem from './CardItem';
import MenuAnchor from '../MenuAnchor';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CartMenuWeb = ({ open, toggleMenu, anchorEl }) => {
  const { cart } = useSelector((st) => st.cart);
  const [totalItems, setTotalItems] = useState(0);

  const router = useRouter();

  useEffect(() => {
    let total = 0;
    cart.length > 0 &&
      cart.forEach((item) => {
        total += item.quantity;
      });
    setTotalItems(total);
  }, [cart]);
  return (
    <>
      <Menu
        id='cart-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={toggleMenu}
        disableScrollLock={true}
        MenuListProps={{
          'aria-labelledby': 'cart-button',
          sx: {
            borderRadius: '5px',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            overflow: 'inherit',
            borderRadius: '5px',
            border: '1px solid #c5c5c5',
            marginTop: '0.425rem',
          },
        }}
        sx={{
          '& ul': {
            paddingBlock: '0 !important',
          },
        }}
      >
        <MenuAnchor />
        <div className='bg-white overflow-hidden rounded-t'>
          <h5 className='px-4 py-3 text-lg font-bold border-b border-slate-200'>
            Cart Items
          </h5>
          <Box
            className='max-h-[330px] flex flex-col gap-1 overflow-y-auto'
            width='350px'
            maxHeight='400'
          >
            {cart[0] == undefined ? (
              <Typography className='text-center text-gray-500 py-24'>
                No items in cart
              </Typography>
            ) : null}
            {cart.length > 0 &&
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  prod={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  img={item.image}
                />
              ))}
          </Box>
          <div className='px-4 py-4  border-t border-slate-200'>
            <Button
              onClick={() => router.push('/order')}
              disabled={cart[0] == undefined}
              className='w-full'
              color='bg-black'
              title='Checkout'
            />
          </div>
        </div>
      </Menu>
    </>
  );
};

export default CartMenuWeb;
