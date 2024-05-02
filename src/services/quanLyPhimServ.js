import { http } from './config';

export const quanLyPhimServ = {
  layDanhSachBanner: () => {
    return http.get('/QuanLyPhim/LayDanhSachBanner');
  },
  layDanhSachPhim: () => {
    return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  },
  themPhimUploadHinh: data => {
    return http.post('/QuanLyPhim/ThemPhimUploadHinh', data);
  },
};
