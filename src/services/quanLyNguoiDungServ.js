import { http } from './config';

export const quanLyNguoiDungServ = {
  dangNhap: data => {
    return http.post('/QuanLyNguoiDung/DangNhap', data);
  },
};
