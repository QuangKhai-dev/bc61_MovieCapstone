import React, { useState } from 'react';
import { Tabs } from 'antd';
import { useEffect } from 'react';
import { quanLyRapServ } from '../../services/quanLyRapServ';
import './heThongCumRap.scss';
import moment from 'moment';
const HeThongCumRap = ({ maHeThongRap }) => {
  const [arrCumRap, setArrCumRap] = useState([]);
  useEffect(() => {
    // console.log(maHeThongRap);
    quanLyRapServ
      .layThongTinLichChieuHeThongRap(maHeThongRap)
      .then(res => {
        console.log(res);
        setArrCumRap(res.data.content[0].lstCumRap);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="he_thong_cum_rap">
      <Tabs
        tabPosition="left"
        // tabBarStyle={{
        //   overflowY: 'auto',
        // }}
        style={{
          height: '600px',
        }}
        items={arrCumRap.map((cumRap, index) => {
          console.log(cumRap);
          return {
            label: (
              <div key={index} className="text-left w-[250px]">
                <h3 className="uppercase text-green-600 font-medium truncate">
                  {cumRap.tenCumRap}
                </h3>
                <p className="truncate text-xs text-gray-400">
                  {cumRap.diaChi}
                </p>
              </div>
            ),
            key: index,
            children: (
              <div className="overflow-y-scroll h-full">
                {cumRap.danhSachPhim.map((phim, index) => {
                  {
                    /* console.log(phim) */
                  }
                  return (
                    phim.dangChieu && (
                      <div key={index} className="flex my-5 ml-5">
                        {/* hình ảnh  */}
                        <div className="mr-5">
                          <img
                            className="h-40 w-40 object-cover"
                            src={phim.hinhAnh}
                            alt=""
                          />
                        </div>
                        {/* thông tin phim  */}
                        <div>
                          {/* tên phim  */}
                          <h3>
                            <span className="bg-orange-500 text-white px-2 py-1 rounded mr-2">
                              C18
                            </span>
                            <span className="text-xl font-medium">
                              {phim.tenPhim}
                            </span>
                          </h3>
                          <div className="grid grid-cols-2 gap-5 mt-4">
                            {phim.lstLichChieuTheoPhim
                              .slice(0, 4)
                              .map((lichChieu, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="py-2 px-5 bg-slate-100 rounded-md space-x-2 flex items-center"
                                  >
                                    <span className="text-green-600 font-medium text-lg">
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format('DD-MM-YYYY')}
                                    </span>
                                    <span className="text-orange-600 font-medium text-lg">
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format('hh:mm')}
                                    </span>
                                    {/* {lichChieu.ngayChieuGioChieu} */}
                                    <span className="text-white bg-red-600 py-1 px-2 rounded-md">
                                      {lichChieu.tenRap}
                                    </span>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default HeThongCumRap;
