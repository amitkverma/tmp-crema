import React from 'react';

const UserProfile = React.lazy(() => import('./UserProfile'));
export const profileConfig = [
  {
    path: '/my-profile',
    element: <UserProfile />,
  },
];
