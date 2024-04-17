import React from 'react';

const InputText = ({
  label,
  name,
  handleChange,
  handleBlur,
  type = 'text',
  placeholder,
  error,
  touched,
  className,
  value,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        // giá trị name nhận vào sẽ tương ứng với thuộc tính cần lấy dữ liệu trên initialValues
        name={name}
        // handleChange là phương thức giúp lấy dữ liệu cho formik
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
        placeholder={placeholder}
        value={value}
      />
      {/* nếu như người dùng đã bấm vào input và có lỗi thì mới hiện thông báo lỗi lên và việc kiểm tra xem người dùng bấm vào input hay chưa sẽ được formik.touched quản lí  */}
      {touched && error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputText;
