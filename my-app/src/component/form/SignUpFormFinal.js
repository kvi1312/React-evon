import React from "react";
import { useFormik, Formik, Form, ErrorMessage, Field, useField } from "formik";
import { values } from "lodash";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm({
          firstName: "",
          lastName: "",
          email: "",
          intro: "",
          job: "",
          terms: false,
        });
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log("🚀 ~ SignUpFormFinal ~ formik", formik);
        return (
          <Form className="p-10 w-full max-w-[500px] mx-auto">
            <MyInput
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>

            <MyInput
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>

            <MyInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              id="email"
              type="email"
            ></MyInput>

            <MyTextArea
              label="Introduce"
              name="intro"
              id="intro"
              placeholder="Tell me about yourself"
            ></MyTextArea>

            <MyDropBox
              label="job"
              name="job"
              id="job"
              placeholder="Select your job"
            >
              <option value="frontend">Front End Developer</option>
              <option value="backend">Back End Developer</option>
              <option value="fullstack">Full Stack Developer</option>
            </MyDropBox>

            <MyCheckBox name="terms">I accept terms and conditions</MyCheckBox>

            {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            className="border rounded-md p-4 border-gray-300"
            placeholder="Enter your first name"
          ></Field>
          <div className="text-md text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div> */}

            {/* last name */}

            {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            className="border rounded-md p-4 border-gray-300"
            placeholder="Enter your first name"
          ></Field>
          <div className="text-md text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div> */}

            {/*EMAIL  */}

            {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">email</label>
          <Field
            name="email"
            type="email"
            className="border rounded-md p-4 border-gray-300"
            placeholder="Enter your email"
          ></Field>
          <div className="text-md text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div> */}

            {/* intro */}

            {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Introduce </label>
          <Field
            name="intro"
            className="border rounded-md p-4 border-gray-300  h-[150px] resize-none"
            placeholder="tell about yourself"
            as="textarea"
          ></Field>
          <div className="text-md text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div> */}

            {/* JOB */}

            {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">job</label>
          <Field
            name="job"
            className="border rounded-md p-4 border-gray-300"
            placeholder="Select your job"
            as="select"
          >
            <option value="frontend">FrontEnd Developer</option>
            <option value="backend">BackEnd Developer</option>
            <option value="fullstack">FullStack Developer</option>
          </Field>
          <div className="text-md text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div> */}

            {/* <div className="flex items-center gap-2 mb-5">
          <Field
            name="terms"
            type="checkbox"
            className="border rounded-md p-4 border-gray-300"
          ></Field>
          <p>I accept terms and conditions</p>
          <div className="text-md text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div> */}

            <div className="mt-3">
              <button
                type="submit"
                className="p-4 w-full bg-blue-600 text-white font-semibold rounded-lg"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  // const field = useField(props)
  const [field, meta] = useField(props); // dòng này là destructuring của field dòng const field = useField(props)

  console.log("🚀 ~ MyInput ~ [field, meta]", [field, meta]);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <input
        type="text"
        className="border rounded-md p-4 border-gray-300"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-md text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  // const field = useField(props)
  const [field, meta] = useField(props); // dòng này là destructuring của field dòng const field = useField(props)

  console.log("🚀 ~ MyInput ~ [field, meta]", [field, meta]);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <textarea
        type="text"
        className="border rounded-md p-4 border-gray-300  h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-md text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyDropBox = ({ label, ...props }) => {
  const [field, meta] = useField(props); // dòng này là destructuring của field dòng const field = useField(props)
  console.log("🚀 ~ MyInput ~ [field, meta]", [field, meta]);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.name || props.id}>{label}</label>
      <select
        type="text"
        className="border rounded-md p-4 border-gray-300"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-md text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props); // dòng này là destructuring của field dòng const field = useField(props)
  console.log("🚀 ~ MyInput ~ [field, meta]", [field, meta]);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <div className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-md text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
