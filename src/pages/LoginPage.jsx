import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import stackedWaves from "../assets/stackedWaves2.svg";
import { motion } from "framer-motion";
import Spinner from "../components/Spinner";
import { login } from "../services/authService";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/features/auth/authSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please Enter Email"),
    password: Yup.string().required("Please eneter your password"),
  });

  const handleLogin = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await login(values);
      if (!response.success) {
        toast.error(response.error);
        setSubmitting(false);
        resetForm();
        return;
      }
      toast.success(response.data.message || "Login successful");
      console.log("Login successful:", response);
      dispatch(
        loginSuccess({
          user: response.data.user,
          token: response.data.token,
        })
      );
      navigate("/redirect");
      resetForm();
    } catch (error) {
      console.error("Login failed in form:", error);
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <div className="  flex items-center justify-center ">
      <motion.div
        className="bg-[#1d2c4f] rounded-lg shadow-lg max-w-md w-full relative flex flex-col items-center register-card mt-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl font-bold text-primary text-center absolute -top-6  bg-blueHighlight px-8 py-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          SIGN IN
        </motion.h1>
        <div className="w-full  flex  flex-col items-center  -m-4  rounded-lg">
          <img src={stackedWaves} alt="Layered Waves" className="rounded-lg " />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#e8eaed"
            className="size-32 -top-14 -mb-8 text-[#7a839e]  relative  fill-[#7a839e] "
            strokeWidth={10}
          >
            <path
              d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
              className=" "
            />
          </svg>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={true}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="w-full mx-2 px-4">
              {/* Floating Label Input */}
              {[
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email",
                  icon: "mail",
                },
                {
                  name: "password",
                  type: "password",
                  placeholder: "Enter password",
                  icon: "lock",
                },
              ].map((field, index) => (
                <motion.div
                  className="w-full px-6 py-3"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <div key={index} className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3  text-gray-400">
                      <span className="material-icons border-r border-[#7a839e] pr-1">
                        {field.icon}
                      </span>
                    </div>
                    <Field
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      className="w-full pl-10 pr-3 py-2 px-2 bg-[#4d5974] border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blueHighlight focus:border-blueHighlight peer text-gray-300 font-semibold"
                      placeholder=" "
                    />
                    <label
                      htmlFor={field.name}
                      className="absolute -top-4 text-xs 
                  left-12 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all 
                  peer-placeholder-shown:text-gray-400
                  peer-focus:text-blueHighlight peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
                  peer-placeholder:text-white
                  text-blueHighlight

                  "
                    >
                      {field.placeholder}
                    </label>
                  </div>
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-sm "
                  />
                </motion.div>
              ))}
              {/* Remeber me and forgot password */}
              <div>
                <div className="flex justify-between items-center px-6 py-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="
                      
                      "
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-gray-300 text-sm"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-blueHighlight text-sm hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Submit Button with spinng */}
              <div className="w-full px-6 py-3">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className=" bg-blueHighlight text-dark hover:text-light py-2 rounded-md font-semibold px-8 w-full hover:bg-primary transition duration-300 "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <span className="flex justify-center items-center">
                      Logging in... <Spinner />
                    </span>
                  ) : (
                    <span>LOGIN</span>
                  )}
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-center text-sm py-4 text-gray-400 mx-4">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blueHighlight hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default LoginPage;
