import React from 'react';

const Directions = React.lazy(() => import('./Directions'));
const DrawingView = React.lazy(() => import('./DrawingView'));
const EventHandler = React.lazy(() => import('./EventHandler'));
const GeoLocation = React.lazy(() => import('./GeoLocation'));
const KmLayer = React.lazy(() => import('./KmLayer'));
const MapClustering = React.lazy(() => import('./MapClustering'));
const MapOverlay = React.lazy(() => import('./MapOverlay'));
const MapWithSearchBox = React.lazy(() => import('./MapWithSearchBox'));
const PopUpInfo = React.lazy(() => import('./PopUpInfo'));
const Simple = React.lazy(() => import('./Simple'));
const StreetView = React.lazy(() => import('./StreetView'));
const Styled = React.lazy(() => import('./Styled'));
const TrafficLayer = React.lazy(() => import('./TrafficLayer'));

export const mapConfigs = [
  {
    path: '/third-party/google-map/directions',
    element: <Directions />,
  },
  {
    path: '/third-party/google-map/drawing-view',
    element: <DrawingView />,
  },
  {
    path: '/third-party/google-map/event-handler',
    element: <EventHandler />,
  },
  {
    path: '/third-party/google-map/geolocation',
    element: <GeoLocation />,
  },
  {
    path: '/third-party/google-map/km-layer',
    element: <KmLayer />,
  },
  {
    path: '/third-party/google-map/map-clustering',
    element: <MapClustering />,
  },
  {
    path: '/third-party/google-map/map-overlay',
    element: <MapOverlay />,
  },
  {
    path: '/third-party/google-map/map-with-search-box',
    element: <MapWithSearchBox />,
  },
  {
    path: '/third-party/google-map/popup-info',
    element: <PopUpInfo />,
  },
  {
    path: '/third-party/google-map/simple',
    element: <Simple />,
  },
  {
    path: '/third-party/google-map/street-view',
    element: <StreetView />,
  },
  {
    path: '/third-party/google-map/styled',
    element: <Styled />,
  },
  {
    path: '/third-party/google-map/traffic-layer',
    element: <TrafficLayer />,
  },
];
