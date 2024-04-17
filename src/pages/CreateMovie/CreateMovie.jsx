import React from 'react';
import InputText from '../../components/Input/InputText/InputText';
import { DatePicker, Rate, Switch } from 'antd';
import { useFormik } from 'formik';
const CreateMovie = () => {
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
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: {},
  });
  return (
    <div>
      <h1 className="text-2xl font-bold">Trang tạo phim</h1>
      <form>
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
              />
            </div>
            {/* Sắp chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Sắp chiếu
              </label>
              <Switch />
            </div>
            {/* Hot */}
            <div>
              <label htmlFor="" className="block mb-2">
                Hot
              </label>
              <Switch />
            </div>
            {/* Đánh giá  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Đánh giá
              </label>
              <Rate />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block" htmlFor="">
              Mô tả
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-gray-300 w-full"
            ></textarea>
          </div>
          <div className="col-span-2">
            {/* hình demo  */}
            <label htmlFor="">Hình ảnh phim</label>
            <img src="" alt="" />
            <input type="file" />
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
