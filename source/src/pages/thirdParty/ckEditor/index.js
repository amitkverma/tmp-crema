import React from 'react';

export const ckEditorConfigs = [
  {
    auth: 'user',
    routes: [
      {
        path: '/ck-editor/balloon',
        element: React.lazy(() => import('./Balloon')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/ck-editor/balloon-block',
        element: React.lazy(() => import('./BalloonBlock')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/ck-editor/classic',
        element: React.lazy(() => import('./Classic')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/ck-editor/document',
        element: React.lazy(() => import('./Document')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/ck-editor/inline',
        element: React.lazy(() => import('./Inline')),
      },
    ],
  },
];
