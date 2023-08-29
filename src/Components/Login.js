import React, { useEffect } from "react";
import { Formik } from "formik"; // import Formik from formik
import * as Yup from "yup"; // import Yup from yup
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css'

// create a schema for validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 8 characters"),
});

const Login = () => {
  const login=JSON.parse(localStorage.getItem("register")) ||[]
  const navigate=useNavigate()

  const handleLogin=(values)=>{
    if (!login) {
      alert("No registered user found. Please register first.");
      return;
    }
    else{
      let isAlready=false;
            for(let i=0; i<login.length; i++){
                if(login[i].email==values.email && login[i].password==values.password){
                    isAlready=true;

                    break;
                    
                }
            }
            console.log(isAlready);
            if(isAlready==true){
                navigate('/')
                
            }else if(isAlready==false){
              alert('Wrong credentials')
          }
    }
    // if (values.email === login.email && values.password === login.password) {
    //   alert("Login successful!");
    //   // Perform any additional actions, such as redirecting to a dashboard or home page
    // } else {
    //   alert("Invalid credentials. Please check your email and password.");
    // }
  }

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleLogin(values);
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
          <div className="login-container">
            <div className="login-form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
                <p>New user? <Link to='/register' color="blue">Create account</Link></p>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;