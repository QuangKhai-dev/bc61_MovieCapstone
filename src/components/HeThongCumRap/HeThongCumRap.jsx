import React, { useState } from 'react';
import { Tabs } from 'antd';
import { useEffect } from 'react';
import { quanLyRapServ } from '../../services/quanLyRapServ';
import './heThongCumRap.scss';
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
          };
        })}
      />
    </div>
  );
};

export default HeThongCumRap;
