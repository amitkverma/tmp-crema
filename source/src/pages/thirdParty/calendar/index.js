import React from 'react';

const Basic = React.lazy(() => import('./Basic'));
const Cultures = React.lazy(() => import('./Cultures'));
const Dnd = React.lazy(() => import('./Dnd'));
const Popup = React.lazy(() => import('./Popup'));
const Rendering = React.lazy(() => import('./Rendering'));
const Selectable = React.lazy(() => import('./Selectable'));
const Timeslots = React.lazy(() => import('./Timeslots'));

export const calendarConfigs = [
  {
    path: '/third-party/big-calendar/basic',
    element: <Basic />,
  },
  {
    path: '/third-party/big-calendar/cultures',
    element: <Cultures />,
  },
  {
    path: '/third-party/big-calendar/dnd',
    element: <Dnd />,
  },
  {
    path: '/third-party/big-calendar/popup',
    element: <Popup />,
  },
  {
    path: '/third-party/big-calendar/rendering',
    element: <Rendering />,
  },
  {
    path: '/third-party/big-calendar/selectable',
    element: <Selectable />,
  },
  {
    path: '/third-party/big-calendar/timeslots',
    element: <Timeslots />,
  },
];
