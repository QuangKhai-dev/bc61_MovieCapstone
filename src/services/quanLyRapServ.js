import { http } from './config';

export const quanLyRapServ = {
  layThongTinHeThongRap: () => {
    return http.get('/QuanLyRap/LayThongTinHeThongRap');
  },
  layThongTinLichChieuHeThongRap: rap => {
    return http.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${rap}&maNhom=GP01`
    );
  },
};
