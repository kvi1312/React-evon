import React from "react";
import { useFormik } from "formik";
import { values } from "lodash";
import * as Yup from "yup";
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   return errors;
// };
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="border rounded-md p-4 border-gray-300"
          placeholder="Enter your first name"
          // id="firstName"
          // name="firstName"
          // value={formik.values.firstName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("firstName")}
        />
      </div>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="text-sm text-red-600">{formik.errors.firstName}</div>
      ) : null}

      {/* last name */}

      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          className="border rounded-md p-4 border-gray-300"
          placeholder="Enter your last name"
          // id="lastName"
          // name="lastName"
          // value={formik.values.lastName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("lastName")}
        />
      </div>
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="text-sm text-red-600">{formik.errors.lastName}</div>
      ) : null}

      <div className="mt-3">
        <button
          type="submit"
          className="p-4 w-full bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
