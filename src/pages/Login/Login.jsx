import React from 'react';
import Lottie from 'lottie-react';
import loginAnimation from './../../assets/animation/loginAnimation.json';
import FormLogin from '../../components/Form/FormLogin/FormLogin';
const Login = () => {
  return (
    <div className="grid grid-cols-2 gap-10 h-screen">
      {/* animation  */}
      <div>
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
      {/* form  */}
      <div>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
