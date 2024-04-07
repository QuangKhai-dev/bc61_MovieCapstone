import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import './banner.scss';

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
};

const Banner = () => {
  const [arrBanner, setArrBanner] = useState([]);
  useEffect(() => {
    quanLyPhimServ
      .layDanhSachBanner()
      .then(res => {
        console.log(res);
        setArrBanner(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="banner_home">
      <Carousel prevArrow={<PrevArrow />} arrows={true}>
        {arrBanner.map((item, index) => {
          return (
            <div className="h-[80vh]" key={index}>
              <img
                className="w-full h-full object-cover"
                src={item.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
