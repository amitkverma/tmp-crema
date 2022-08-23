import React from 'react';

const Signin = React.lazy(() => import('./UserPages/Signin'));
const Signup = React.lazy(() => import('./UserPages/Signup'));
const ForgetPassword = React.lazy(() => import('./UserPages/ForgetPassword'));
const ResetPassword = React.lazy(() => import('./UserPages/ResetPassword'));
const UnlockScreen = React.lazy(() => import('./UserPages/UnlockScreen'));
const StyledSignin = React.lazy(() => import('./StyledUserPages/Signin'));
const StyledSignup = React.lazy(() => import('./StyledUserPages/Signup'));
const StyledForgetPassword = React.lazy(() =>
  import('./StyledUserPages/ForgetPassword'),
);
const StyledResetPassword = React.lazy(() =>
  import('./StyledUserPages/ResetPassword'),
);
const StyledUnlockScreen = React.lazy(() =>
  import('./StyledUserPages/UnlockScreen'),
);
export const userPagesConfig = [
  {
    path: '/extra-pages/user/sign-in-1',
    element: <Signin />,
  },
  {
    path: '/extra-pages/user/sign-in-2',
    element: <StyledSignin />,
  },
  {
    path: '/extra-pages/user/sign-up-1',
    element: <Signup />,
  },
  {
    path: '/extra-pages/user/sign-up-2',
    element: <StyledSignup />,
  },
  {
    path: '/extra-pages/user/forgot-password-1',
    element: <ForgetPassword />,
  },
  {
    path: '/extra-pages/user/forgot-password-2',
    element: <StyledForgetPassword />,
  },
  {
    path: '/extra-pages/user/reset-password-1',
    element: <ResetPassword />,
  },
  {
    path: '/extra-pages/user/reset-password-2',
    element: <StyledResetPassword />,
  },
  {
    path: '/extra-pages/user/lock-1',
    element: <UnlockScreen />,
  },
  {
    path: '/extra-pages/user/lock-2',
    element: <StyledUnlockScreen />,
  },
];
