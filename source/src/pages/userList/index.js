import React from 'react';

const Flat = React.lazy(() => import('./Flat'));
const Morden = React.lazy(() => import('./Morden'));
const Standard = React.lazy(() => import('./Standard'));

export const userListConfig = [
  {
    path: '/extra-pages/list-type/flat',
    element: <Flat />,
  },
  {
    path: '/extra-pages/list-type/morden',
    element: <Morden />,
  },
  {
    path: '/extra-pages/list-type/standard',
    element: <Standard />,
  },
];
