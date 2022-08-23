import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Products = React.lazy(() => import('./Products'));
const ProductDetail = React.lazy(() => import('./ProductDetail'));
const Customers = React.lazy(() => import('./Customers'));
const Checkout = React.lazy(() => import('./Checkout'));
const Carts = React.lazy(() => import('./Carts'));
const Orders = React.lazy(() => import('./Orders'));
const Confirmation = React.lazy(() => import('./Confirmation'));
const Invoice1 = React.lazy(() => import('./Invoice1'));
const Invoice2 = React.lazy(() => import('./Invoice2'));

export const ecommerceConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/ecommerce/products',
    element: <Products />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: [
      '/apps/ecommerce/product_detail/',
      '/apps/ecommerce/product_detail/:id',
    ],
    element: <ProductDetail />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/ecommerce/customers',
    element: <Customers />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/ecommerce/checkout',
    element: <Checkout />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/ecommerce/cart',
    element: <Carts />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/ecommerce/orders',
    element: <Orders />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/ecommerce/confirmation',
    element: <Confirmation />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/ecommerce/invoice-1',
    element: <Invoice1 />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/apps/ecommerce/invoice-2',
    element: <Invoice2 />,
  },
];
