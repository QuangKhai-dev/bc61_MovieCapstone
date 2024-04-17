import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import HomePage from '../pages/HomePage/HomePage';
import { path } from '../common/path';
import Login from '../pages/Login/Login';
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
  ]);
  return route;
};

export default useRouteCustom;
