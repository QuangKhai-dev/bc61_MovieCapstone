import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { quanLyRapServ } from '../../services/quanLyRapServ';
import './heThongLichChieu.scss';
import HeThongCumRap from '../../components/HeThongCumRap/HeThongCumRap';
const HeThongLichChieu = () => {
  const [arrRap, setArrRap] = useState([]);
  // const [maHeThongRap, setMaHeThongRap] = useState('');
  // console.log(maHeThongRap);
  useEffect(() => {
    quanLyRapServ
      .layThongTinHeThongRap()
      .then(res => {
        // console.log(res);
        setArrRap(res.data.content);
        // setMaHeThongRap(res.data.content[0].maHeThongRap);
      })
      .catch(err => {
        // console.log(err);
      });
  }, []);
  return (
    <div className="he_thong_lich_chieu">
      <div className="container">
        <Tabs
          tabPosition="left"
          items={arrRap.map((rap, index) => {
            return {
              label: <img className="w-16" src={rap.logo} />,
              key: rap.maHeThongRap,
              children: <HeThongCumRap maHeThongRap={rap.maHeThongRap} />,
            };
          })}
          onChange={activeKey => {
            // console.log(activeKey);
            // setMaHeThongRap(activeKey);
          }}
          // activeKey="CGV"
        />
      </div>
    </div>
  );
};

export default HeThongLichChieu;
