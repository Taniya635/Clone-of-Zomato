import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/register.css'
import { useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const Register = () => {
  const navigate=useNavigate()
  const register=JSON.parse(localStorage.getItem("register")) || []
  

  const handleRegister = (values) => {
    // Handle registration logic here
    console.log('Registering user:', values);
    
    if(values.email=="" && values.password==""){
      alert("fill required details")
    }
    else{
      
      const registrationData = {
        email: values.email,
        password: values.password,
      };
      register.push(registrationData)
      localStorage.setItem('register', JSON.stringify(register));
      
      navigate('/login');
    }
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={(values) => {
        handleRegister(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="register-container">
          <div className="register-form">
            <form noValidate onSubmit={handleSubmit}>
              <span>Register</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email"
                className="form-control inp_text"
              />
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
                className="form-control"
              />
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder="Confirm your password"
                className="form-control"
              />
              <p className="error">
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
              </p>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
