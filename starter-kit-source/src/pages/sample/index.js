import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));

export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/sample/page-1',
    element: <Page1 />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/sample/page-2',
    element: <Page2 />,
  },
];
