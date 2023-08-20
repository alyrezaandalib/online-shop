import { FcGoogle } from "react-icons/fc";
import Input from "./input";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phoneNumber: "",
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
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: Yup.string()
    .required("phone Number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits"),
  passwordConfirmation: Yup.string()
    .required("passwordConfirmation is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "at least enter 8 character")
    .max(20, "at last you can enter 20 character"),
});

const SignUp = () => {
  const [formValues, setFormValues] = useState(null);
  useEffect(() => {}, []);

  // const formik = useFormik({
  //   initialValues: formValues || initialValues,
  //   onSubmit,
  //   validationSchema,
  //   validateOnMount: true,
  //   enableReinitialize: true,
  // });

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <form
      className="bg-white px-14 py-5 rounded-3xl border-2 shadow-xl"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-3xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-sm text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-6">
        <Input formik={formik} label="Name" name="name" />
        <Input formik={formik} label="Email" name="email" />
        <Input formik={formik} label="Phone Number" name="phoneNumber" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="Password Confirmation"
          name="passwordConfirmation"
          type="password"
        />
        <div className="flex justify-start items-center mt-8 ">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={true}
            // onChange={formik.handleChange}
            // checked={formik.values.terms}
          />
          <label htmlFor="terms" className="ml-2 font-medium text-base ">
            Terms and conditions
          </label>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <Button color="deep-purple">Sign Up</Button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
