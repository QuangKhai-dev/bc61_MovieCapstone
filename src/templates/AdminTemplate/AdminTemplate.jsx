import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { path } from '../../common/path';
import { handleGetValueLocalStore } from '../../utils/utils';
const { Header, Content, Footer, Sider } = Layout;

// Phim, danh sách phim, tạo phim
// Người dùng danh sách phim
// Lịch chiếu

// Yêu cầu: thực hiện tạo thêm 2 component về page danh sách phim và page danh sách người dùng
// Cấu hình đường dẫn cho 2 page, với page danh sách phim đường dẫn sẽ là /admin/list-movie còn với danh sách người dùng sẽ là /admin/list-user
const arrMenu = [
  {
    label: 'Quản lí phim',
    type: 'group',
    children: [
      {
        label: <Link to={path.admin.managerMovie}>Danh sách phim</Link>,
        icon: <i className="fa-solid fa-video"></i>,
      },
      {
        label: <Link to={path.admin.base}>Tạo phim</Link>,
        icon: <i className="fa-solid fa-file-video"></i>,
      },
    ],
  },
  {
    label: 'Quản lí người dùng',
    type: 'group',
    children: [
      {
        label: <Link to={path.admin.managerUser}>Danh sách người dùng</Link>,
        icon: <i className="fa-solid fa-users"></i>,
      },
    ],
  },
];

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    // lấy dữ liệu từ local lên để kiểm tra
    // Nếu như localStore không có dữ liệu ==> Đá mông người dùng đi mất
    // Nếu như có dữ liệu và maLoaiNguoiDung không đúng ==> Đá mông người dùng đi mất
    const dataUser = handleGetValueLocalStore('dataUser');
    if (!dataUser) {
      window.location.href = 'https://google.com';
    } else {
      if (dataUser.maLoaiNguoiDung !== 'QuanTri') {
        window.location.href = 'https://google.com';
      }
    }
    // return () => {

    // }
  }, []);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={arrMenu}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
