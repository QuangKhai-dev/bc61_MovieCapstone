import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import './banner.scss';
import { useDispatch } from 'react-redux';
import {
  handleTurnOffLoading,
  handleTurnOnLoading,
} from '../../redux/slice/loadingSlice';

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
};

const Banner = () => {
  const dispatch = useDispatch();
  const [arrBanner, setArrBanner] = useState([]);
  useEffect(() => {
    dispatch(handleTurnOnLoading());
    quanLyPhimServ
      .layDanhSachBanner()
      .then(res => {
        console.log(res);
        setArrBanner(res.data.content); // [{"hinhAnh","tenBanner"}]
        dispatch(handleTurnOffLoading());
      })
      .catch(err => {
        console.log(err);
        dispatch(handleTurnOffLoading());
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
