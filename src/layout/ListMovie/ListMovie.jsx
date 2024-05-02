import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import './listMovie.scss';
import { getMovieApiThunk } from '../../redux/slice/phimSlice';
const ListMovie = () => {
  const dispatch = useDispatch();
  const { arrMovie } = useSelector(state => state.phimSlice);
  // const [arrMovie, setArrMovie] = useState([]);

  useEffect(() => {
    dispatch(getMovieApiThunk('1'));
    // quanLyPhimServ
    //   .layDanhSachPhim()
    //   .then(res => {
    //     console.log(res);
    //     setArrMovie(res.data.content);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="list_movie">
      <div className="container">
        <div className="list_movie_content">
          {arrMovie?.map((item, index) => {
            return (
              <div key={index} className="space-y-2">
                <img
                  className="h-96 w-full object-cover"
                  src={item.hinhAnh}
                  alt={item.biDanh}
                />
                <h3 className="line-clamp-2">
                  <span className="text-white bg-orange-500 p-1 rounded">
                    C18
                  </span>
                  <span className="ml-2 font-medium text-xl">
                    {item.tenPhim}
                  </span>
                </h3>
                <p className="line-clamp-2">{item.moTa}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
