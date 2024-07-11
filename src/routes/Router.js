import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import EventsManagement from 'src/views/admin/events-management/EventsManagement';
import EmailsManagement from 'src/views/admin/emails-management/EmailsManagement';
import UsersManagement from 'src/views/admin/users-management/UsersManagement';
import Emails from 'src/views/user/emails/Emails';
import Event from 'src/views/user/events/Event';
import Students from 'src/views/user/students/Students';
import Blogs from 'src/views/user/blogs/Blogs';
import Profile from 'src/views/dashboard/Profile';
import AuthGuard from 'src/components/container/AuthGuard';
import BlogDetailsPage from 'src/views/user/blogs/BlogDetails';
import EventsDetails from 'src/views/user/events/EventDetails';
import StudentDetails from 'src/views/user/students/StudentDetails';
import HallOfFame from 'src/views/admin/hall-of-fame/HallOfFame';
import PendingRegistrations from 'src/views/admin/pending-registrations/PendingRegistrations';
import UnAuthGuard from 'src/components/container/UnAuthGuard';
import ForgotPassword from 'src/views/authentication/ForgotPassword';
import ResetPassword from 'src/views/authentication/ResetPassword';
import Payments from 'src/views/user/payments/Payments';


/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const NoSidebarLayout = Loadable(lazy(() => import('../layouts/full/NoSidebarLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const NonAuthenticatedDashboard = Loadable(lazy(() => import('../views/dashboard/NonAuthenticatedDashboard')));
const Icons = Loadable(lazy(() => import('../views/icons/Icons')));
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')));
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      {
        path: '/dashboard',
        exact: true,
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
      },
      {
        path: '/users-management',
        exact: true,
        element: (
          <AuthGuard>
            <UsersManagement />
          </AuthGuard>
        ),
      },
      {
        path: '/hall-of-fame',
        exact: true,
        element: (
          <AuthGuard>
            <HallOfFame />
          </AuthGuard>
        ),
      },
      {
        path: '/events-management',
        exact: true,
        element: (
          <AuthGuard>
            <EventsManagement />
          </AuthGuard>
        ),
      },
      {
        path: '/emails-management',
        exact: true,
        element: (
          <AuthGuard>
            <EmailsManagement />
          </AuthGuard>
        ),
      },
      {
        path: '/pending-registrations',
        exact: true,
        element: (
          <AuthGuard>
            <PendingRegistrations />
          </AuthGuard>
        ),
      },
      {
        path: '/emails-list',
        exact: true,
        element: (
          <AuthGuard>
            <Emails />
          </AuthGuard>
        ),
      },
      {
        path: '/payments',
        exact: true,
        element: (
          <AuthGuard>
            <Payments />
          </AuthGuard>
        ),
      },
      {
        path: '/events-list',
        exact: true,
        element: (
          <AuthGuard>
            <Event />
          </AuthGuard>
        ),
      },
      {
        path: '/events-list/:id',
        exact: true,
        element: (
          <AuthGuard>
            <EventsDetails />
          </AuthGuard>
        ),
      },
      {
        path: '/students-list',
        exact: true,
        element: (
          <AuthGuard>
            <Students />
          </AuthGuard>
        ),
      },
      {
        path: '/students-list/:username',
        exact: true,
        element: (
          <AuthGuard>
            <StudentDetails />
          </AuthGuard>
        ),
      },
      {
        path: '/blogs-list',
        exact: true,
        element: (
          <AuthGuard>
            <Blogs />
          </AuthGuard>
        ),
      },
      {
        path: '/blogs-list/:id',
        exact: true,
        element: (
          <AuthGuard>
            <BlogDetailsPage />
          </AuthGuard>
        ),
      },
      {
        path: '/accounts-management',
        exact: true,
        element: (
          <AuthGuard>
            <Profile />
          </AuthGuard>
        ),
      },
      {
        path: '/icons',
        exact: true,
        element: (
          <AuthGuard>
            <Icons />
          </AuthGuard>
        ),
      },
      {
        path: '/ui/typography',
        exact: true,
        element: (
          <AuthGuard>
            <TypographyPage />
          </AuthGuard>
        ),
      },
      {
        path: '/ui/shadow',
        exact: true,
        element: (
          <AuthGuard>
            <Shadow />
          </AuthGuard>
        ),
      },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: (
      <UnAuthGuard>
        <Register />
      </UnAuthGuard>
      ) },
      { path: '/auth/login', element: (
      <UnAuthGuard>
        <Login />
      </UnAuthGuard>
      ) },
      { path: '/auth/forgot-password', element: (
        <UnAuthGuard>
          <ForgotPassword />
        </UnAuthGuard>
        ) },
      { path: '/auth/reset-password', element: (
        <UnAuthGuard>
          <ResetPassword />
        </UnAuthGuard>
        ) },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/home',
    element: <NoSidebarLayout />,
    children: [
      { path: '/home', element: (
      <UnAuthGuard>
        <NonAuthenticatedDashboard />
      </UnAuthGuard>
      ) },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
