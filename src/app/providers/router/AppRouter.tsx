import { createBrowserRouter, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import Layout from './Layout';
import Preloader from '../../../shared/ui/Preloader/Preloader';

const PostsPage = lazy(() => import('../../../pages/Posts/PostsPage.tsx'));
const PostDetailsPage = lazy(() => import('../../../pages/Posts/PostDetailsPage.tsx'));
const UsersPage = lazy(() => import('../../../pages/Users/UsersPage.tsx'));
const UserDetailsPage = lazy(() => import('../../../pages/Users/UserDetailsPage.tsx'));
const UserPostsPage = lazy(() => import('../../../pages/User_Posts/UserPostsPage.tsx'));
const UserTodosPage = lazy(() => import('../../../pages/User_Todos/UserTodosPage.tsx'));
const UserAlbumsPage = lazy(() => import('../../../pages/User_Albums/UserAlbumsPage.tsx'));
const AlbumPhotosPage = lazy(() => import('../../../pages/Album_Photos/AlbumPhotosPage.tsx'));
const withSuspense = (element: React.ReactNode) => {
  return <React.Suspense fallback={<Preloader />}>{element}</React.Suspense>;
};

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="posts" replace /> },
      { path: 'posts', element: withSuspense(<PostsPage />) },
      { path: 'posts/:id', element: withSuspense(<PostDetailsPage />) },
      { path: 'users', element: withSuspense(<UsersPage />) },
      { path: 'users/:id', element: withSuspense(<UserDetailsPage />) },
      { path: 'users/:id/posts', element: withSuspense(<UserPostsPage />) },
      { path: 'users/:id/albums', element: withSuspense(<UserAlbumsPage />) },
      { path: 'users/:id/todos', element: withSuspense(<UserTodosPage />) },
      { path: 'albums/:id/photos', element: withSuspense(<AlbumPhotosPage />) },
    ],
  },
]);
