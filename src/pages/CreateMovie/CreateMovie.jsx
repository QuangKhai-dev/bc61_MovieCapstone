import React, { useState } from 'react';
import InputText from '../../components/Input/InputText/InputText';
import { DatePicker, Rate, Switch } from 'antd';
import { useFormik } from 'formik';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
const CreateMovie = () => {
  const [image, setImage] = useState('');
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      maNhom: 'GP01',
      ngayKhoiChieu: '',
      sapChieu: true,
      dangChieu: true,
      hot: true,
      danhGia: 0,
      hinhAnh: '',
    },
    onSubmit: values => {
      console.log(values);
      // tạo đối tượng formData
      const formData = new FormData();
      // thực hiện sử dụng vòng lặp for in để truyền dữ liệu vào formData
      for (let key in values) {
        if (key == 'hinhAnh') {
          formData.append('File', values[key]);
        } else {
          formData.append(key, values[key]);
        }
      }
      quanLyPhimServ
        .themPhimUploadHinh(formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // validationSchema: {},
  });
  return (
    <div>
      <h1 className="text-2xl font-bold">Trang tạo phim</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <InputText
            value={values.tenPhim}
            name="tenPhim"
            handleChange={handleChange}
            label="Tên phim"
            placeholder="Nhập tên phim"
          />
          <InputText
            value={values.trailer}
            name="trailer"
            handleChange={handleChange}
            label="Trailer"
            placeholder="Nhập trailer"
          />
          <div className="flex justify-between col-span-2">
            {/* Ngày khởi chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Ngày khởi chiếu
              </label>
              {/* về nhà validation dữ liệu của datepicker nếu người dùng chọn ngày trong quá khứ sẽ báo lỗi  */}
              <DatePicker
                format="DD-MM-YYYY"
                onChange={(date, dateString) => {
                  // console.log(date);
                  // console.log(dateString);
                  setFieldValue('ngayKhoiChieu', dateString);
                }}
              />
            </div>
            {/* Đang chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Đang chiếu
              </label>
              <Switch
                onChange={checked => {
                  console.log(checked);
                  setFieldValue('dangChieu', checked);
                  // console.log(event.target.value);
                }}
                value={values.dangChieu}
              />
            </div>
            {/* Sắp chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Sắp chiếu
              </label>
              <Switch
                onChange={checked => {
                  console.log(checked);
                  setFieldValue('sapChieu', checked);
                  // console.log(event.target.value);
                }}
                value={values.sapChieu}
              />
            </div>
            {/* Hot */}
            <div>
              <label htmlFor="" className="block mb-2">
                Hot
              </label>
              <Switch
                onChange={checked => {
                  console.log(checked);
                  setFieldValue('hot', checked);
                  // console.log(event.target.value);
                }}
                value={values.hot}
              />
            </div>
            {/* Đánh giá  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Đánh giá (trên thang điểm 10, mỗi ngôi sao 2đ)
              </label>
              <Rate
                onChange={value => {
                  console.log(value * 2);
                  setFieldValue('danhGia', value * 2);
                }}
                allowHalf
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block" htmlFor="">
              Mô tả
            </label>
            <textarea
              name="moTa"
              onChange={handleChange}
              cols="30"
              rows="10"
              className="border border-gray-300 w-full"
            ></textarea>
          </div>
          <div className="col-span-2">
            {/* hình demo  */}
            <label htmlFor="">Hình ảnh phim</label>
            <img className="w-40" src={image} alt="" />
            {/* setImage("") */}
            <button>X</button>
            <input
              name="hinhAnh"
              onChange={event => {
                const img = event.target.files[0];
                // tạo đường dẫn cho tấm hình
                if (img) {
                  const urlImg = URL.createObjectURL(img);
                  console.log(urlImg);
                  setImage(urlImg);
                  setFieldValue('hinhAnh', img);
                }
              }}
              type="file"
              accept="image/*"
            />
          </div>
          <div>
            <button className="py-2 px-5 bg-black text-white rounded">
              Thêm phim
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateMovie;
