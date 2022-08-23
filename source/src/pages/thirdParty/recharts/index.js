import React from 'react';

const Area = React.lazy(() => import('./Area'));
const Bar = React.lazy(() => import('./Bar'));
const Composed = React.lazy(() => import('./Composed'));
const Line = React.lazy(() => import('./Line'));
const Pie = React.lazy(() => import('./Pie'));
const Radar = React.lazy(() => import('./Radar'));
const Radial = React.lazy(() => import('./Radial'));
const Treemap = React.lazy(() => import('./Treemap'));
const Scatter = React.lazy(() => import('./Scatter'));
const Funnel = React.lazy(() => import('./Funnel'));

export const rechartsConfigs = [
  {
    path: '/third-party/recharts/area',
    element: <Area />,
  },
  {
    path: '/third-party/recharts/bar',
    element: <Bar />,
  },
  {
    path: '/third-party/recharts/composed',
    element: <Composed />,
  },
  {
    path: '/third-party/recharts/line',
    element: <Line />,
  },
  {
    path: '/third-party/recharts/pie',
    element: <Pie />,
  },
  {
    path: '/third-party/recharts/radar',
    element: <Radar />,
  },
  {
    path: '/third-party/recharts/radial',
    element: <Radial />,
  },
  {
    path: '/third-party/recharts/treemap',
    element: <Treemap />,
  },
  {
    path: '/third-party/recharts/scatter',
    element: <Scatter />,
  },
  {
    path: '/third-party/recharts/funnel',
    element: <Funnel />,
  },
];
