import React, { useContext } from 'react';
import { useFormik } from 'formik';
import InputText from '../../Input/InputText/InputText';
import * as Yup from 'yup';
import { quanLyNguoiDungServ } from '../../../services/quanLyNguoiDungServ';
import { AlertContext } from '../../../App';
const FormLogin = () => {
  const { handleAlert } = useContext(AlertContext);
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: '',
        matKhau: '',
      },
      onSubmit: async values => {
        // khi sử dụng async await luôn có một try catch bọc lại để bắt các vấn đề về lỗi
        try {
          const res = await quanLyNguoiDungServ.dangNhap(values);
          console.log(res);
          handleAlert('success', 'Đăng nhập thành công');
        } catch (error) {
          console.log(error);
          handleAlert('error', error.response.data.content);
        }
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required('Vui lòng không bỏ trống'),
        matKhau: Yup.string().required('Vui lòng không bỏ trống'),
      }),
    });
  return (
    <div className="flex items-center justify-center h-full w-2/3">
      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <h1>Đăng nhập vào movie</h1>
        <InputText
          label="Tài khoản"
          name="taiKhoan"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.taiKhoan}
          touched={touched.taiKhoan}
          placeholder="Vui lòng nhập tài khoản"
          value={values.taiKhoan}
        />
        <InputText
          label="Mật khẩu"
          name="matKhau"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.matKhau}
          touched={touched.matKhau}
          placeholder="Vui lòng nhập mật khẩu"
          value={values.matKhau}
          type="password"
        />
        <div>
          <button
            className="bg-black text-white px-5 py-2 rounded-md w-full text-center"
            type="submit"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
