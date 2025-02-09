import React from 'react';

// mui
import { Container } from '@mui/material';

// component
import CartMain from 'src/components/_main/cart';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';

// Meta information
export const metadata = {
  title: 'MATRiX Mall Shopping Cart | MATRiX Mall - Convenient Shopping Cart for Easy Checkout',
  description:
    'View your shopping cart on MATRiX Mall for easy checkout. Add, remove, and manage items effortlessly. Enjoy a seamless shopping experience with secure transactions and personalized recommendations. Explore your cart now!',
  applicationName: 'MATRiX Mall',
  authors: 'MATRiX Mall',
  keywords:
    'shopping cart, MATRiX Mall, view cart, cart items, add to cart, remove from cart, manage cart, checkout, online shopping, secure transactions, personalized recommendations, seamless shopping, convenient shopping'
};

export default async function Cart() {
  return (
    <Container maxWidth="xl">
      <HeaderBreadcrumbs
        heading="Cart"
        links={[
          {
            name: 'Home',
            href: '/'
          },
          {
            name: 'Products',
            href: '/products'
          },
          {
            name: 'Cart'
          }
        ]}
      />
      <CartMain />
    </Container>
  );
}
