import { values } from "lodash";
import React from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schemaValidation = Yup.object({
  firstName: Yup.string().required().max(10),
});
//CÁC PHƯƠNG THỨC CỦA USEFORM
const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid, dirtyFields },
    watch,
    reset,
    setFocus,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mod: "onchange",
  }); // useform hỗ trợ các phương thức, để nó dưới dạng destructuring để sử dụng, errors là destructuring của thằng formState

  // console.log("🚀 ~ SignUpFormHook ~ dirtyFields", dirtyFields);
  // console.log("🚀 ~ SignUpFormHook ~ isDirty", isDirty);
  console.log("🚀 ~ SignUpFormHook ~ isValid", isValid);
  // console.log("🚀 ~ SignUpFormHook ~ errors", errors);
  const watchShowAge = watch("showage", false);

  const onSubmit = (values) => {
    console.log("send data to backend");
    setFocus("firstName");
    if (isValid) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
  };
  return (
    <form
      className="p-10 w-full max-w-[500px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="">
          First Name
        </label>
        <input
          type="text"
          className="border rounded-md p-4 border-gray-300"
          placeholder="Enter your first name"
          id="firstName"
          // {...register("fistName", { required: true, maxLength: 10 })}
          {...register("firstName")}
        />
        {errors?.firstName && (
          <div className="text-sm text-red-500">{errors.firstName.message}</div>
        )}
      </div>

      {/* last name */}
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName" className="mt-3">
          Last Name
        </label>
        <input
          type="text"
          className="border rounded-md p-4 border-gray-300"
          placeholder="Enter your last name"
          id="lastName"
          name="lastName"
          {...register("lastName")}
        />
      </div>

      {/* email */}
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email" className="mt-3">
          Email
        </label>
        <MyInput
          placeholder="Enter your email"
          name="email"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          name="email"
          type="email"
          className="border rounded-md p-4 border-gray-300"
          placeholder="Enter your email"
          {...register("email")}
        /> */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showage")} />
        {watchShowAge && <input placeholder="enter your age"></input>}
      </div>

      <div className="mt-3">
        <button
          type="submit"
          className="p-4 w-full bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-4 border-white border-t-4 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-400"
//           {...field}
//           {...props}
//         ></input>
//       )}
//     ></Controller>
//   );
// };

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-400"
      {...field}
      {...props}
    ></input>
  );
};

export default SignUpFormHook;
