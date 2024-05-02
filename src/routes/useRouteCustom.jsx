import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import HomePage from '../pages/HomePage/HomePage';
import { path } from '../common/path';
import Login from '../pages/Login/Login';
import AdminTemplate from '../templates/AdminTemplate/AdminTemplate';
import CreateMovie from '../pages/CreateMovie/CreateMovie';
import MovieManager from '../pages/MovieManager/MovieManager';
import UserManager from '../pages/UserManager/UserManager';
// đây là một customHook hỗ trợ quản lí các tuyến đường của trang
const useRouteCustom = () => {
  const route = useRoutes([
    {
      path: path.trangChu,
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: path.dangNhap,
      element: <Login />,
    },
    {
      path: path.admin.base, // /admin
      element: <AdminTemplate />,
      children: [
        {
          index: true,
          element: <CreateMovie />,
        },
        {
          path: path.admin.managerMovie,
          element: <MovieManager />,
        },
        {
          path: path.admin.managerUser,
          element: <UserManager />,
        },
      ],
    },
    {
      path: '*',
      element: <div>Not found</div>,
    },
  ]);
  return route;
};

export default useRouteCustom;
