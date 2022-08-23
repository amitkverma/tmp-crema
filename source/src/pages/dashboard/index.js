import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const HealthCare = React.lazy(() => import('./HealthCare'));
const ECommerce = React.lazy(() => import('./ECommerce'));
const CRM = React.lazy(() => import('./CRM'));
const Crypto = React.lazy(() => import('./Crypto'));
const Analytics = React.lazy(() => import('./Analytics'));
const Academy = React.lazy(() => import('./Academy'));
const Metrics = React.lazy(() => import('./Metrics'));
const Widgets = React.lazy(() => import('./Widgets'));

export const dashboardConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/health-care',
    element: <HealthCare />,
  },
  {
    path: '/dashboards/e-commerce',
    element: <ECommerce />,
  },
  {
    path: '/dashboards/crm',
    element: <CRM />,
  },
  {
    path: '/dashboards/crypto',
    element: <Crypto />,
  },
  {
    path: '/dashboards/analytics',
    element: <Analytics />,
  },

  {
    path: '/dashboards/academy',
    element: <Academy />,
  },

  {
    path: '/dashboards/metrics',
    element: <Metrics />,
  },

  {
    path: '/dashboards/widgets',
    element: <Widgets />,
  },
];
