import { FcGoogle } from "react-icons/fc";
import Input from "./input";
import { Button } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
  terms: false,
};

// 2.
const onSubmit = (values) => {
  // console.log(values);
  axios
    .post("", values)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "at least enter 8 character")
    .max(20, "at last you can enter 20 character"),
});

const LogIn = () => {
  const [formValues, setFormValues] = useState(null);
  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <form
      className="bg-white px-14 py-10 rounded-3xl border-2 shadow-xl"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-4xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-6">
        <Input formik={formik} label="Email" name="email" />
        <Input
          formik={formik}
          label="Password Confirmation"
          name="password"
          type="password"
        />
        <div className="flex justify-between items-center mt-8">
          <div>
            <input type="checkbox" className="" id="checkBox" />
            <label htmlFor="checkBox" className="ml-2 font-medium text-base">
              Terms and conditions
            </label>
          </div>
          <button className="font-medium text-[#673AB7] text-base">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <Button color="deep-purple">log in</Button>
          <Button color="white" className="flex justify-center items-center">
            <FcGoogle className="mr-2" />
            Continue with Google
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
