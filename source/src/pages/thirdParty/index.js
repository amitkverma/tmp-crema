import {mapConfigs} from './googleMap';
import {rechartsConfigs} from './recharts';
import React from 'react';
import {calendarConfigs} from './calendar';

const ReactColor = React.lazy(() => import('./reactColor'));
const ReactNotification = React.lazy(() => import('./reactNotification'));
const ReactDropzone = React.lazy(() => import('./reactDropzone'));
const ReactPhotoGallery = React.lazy(() => import('./reactPhotoGallery'));
const ReactPlayer = React.lazy(() => import('./reactPlayer'));
const ReactBeautifulDnd = React.lazy(() => import('./reactBeautifulDnd'));
const TimeLine = React.lazy(() => import('./timeLine'));

export const thirdPartyConfigs = [
  ...mapConfigs,
  ...rechartsConfigs,
  {
    path: '/third-party/react-color',
    element: <ReactColor />,
  },
  {
    path: '/third-party/react-notification',
    element: <ReactNotification />,
  },
  {
    path: '/third-party/react-dropzone',
    element: <ReactDropzone />,
  },
  {
    path: '/third-party/react-gallery',
    element: <ReactPhotoGallery />,
  },
  {
    path: '/third-party/react-player',
    element: <ReactPlayer />,
  },
  {
    path: '/third-party/react-dnd',
    element: <ReactBeautifulDnd />,
  },
  {
    path: '/third-party/time-line',
    element: <TimeLine />,
  },
  ...calendarConfigs,
];
