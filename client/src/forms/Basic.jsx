import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SummaryAPI, { Axios } from "../utils/Axios";
import toast from "react-hot-toast";
import { setUserDetails } from "../store/UserSlice";

const Basic = ({onFormSubmit}) => {
  const user = useSelector((state) => state?.user);
  console.log(user);
  const dob = user?.dateOfBirth;
const dispatch = useDispatch()
  const formattedDob = moment(dob).format("DD-MMM-YYYY");
  console.log("hi", formattedDob);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      country: user.country,
      state: user.state,
      city: user.city,
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      mobile: user?.mobile,
      alternatenumber:user?.alternatenumber,
      ethnicity:user?.ethnicity,
      origin:user?.origin,
      pincode:user?.pincode,
      rstatus:user?.rstatus,
      workemail:user?.workemail,
      dateOfBirth:
        user?.dateOfBirth && moment(user?.dateOfBirth).format("YYYY-MM-DD"),
      age: user?.age,
      gender: user?.gender,
    },
  });
const formdill1 = "abd"
  const onSubmit = async(formData) => {
    try {
      const saveData = await Axios({
        ...SummaryAPI.updateBasic,
        data:{...formData,formdill1}
      })
if(saveData){
  toast.success(saveData?.data?.msg);
  dispatch(setUserDetails(saveData?.data?.data))
}
    } catch (error) {
      console.log(error);
    }
  };

  const optionr = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "UK", label: "UK" },
  ];

  const optiont = [
    { value: "Delhi", label: "Delhi" },
    { value: "UP", label: "UP" },
    { value: "Bihar", label: "Bihar" },
  ];

  const optiony = [
    { value: "New Delhi", label: "New Delhi" },
    { value: "South Delhi", label: "South Delhi" },
    { value: "East Delhi", label: "East Delhi" },
    { value: "West Delhi", label: "West Delhi" },
  ];
  const optione = [
    { value: "Asian", label: "Asian" },
    { value: "European", label: "European" },
    { value: "African", label: "African" },
    { value: "Antartican", label: "Antartican" },
  ];

  const optionc = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const optionp = [
    { value: "Married", label: "Married" },
    { value: "Unmarried", label: "Unmarried" },
  ];

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-white rounded-lg shadow-md"
      >
        <h3 className="sticky p-3 text-lg font-bold text-white bg-orange-900 border rounded-tl-lg rounded-tr-lg top-10 md:-top-6">
          Basic Profile
        </h3>
        <div className="w-full gap-2 mt-2 md:flex">
          <label className="w-full text-sm">
            First Name <span className="text-sm text-red-500">*</span>
            <input
              type="text"
              placeholder="Enter first name"
              {...register("firstname")}
              readOnly
              className="w-full p-2 mb-2 text-base border rounded-md outline-none bg-neutral-100 border-neutral-300 focus-within:border-amber-800"
            />
          </label>
          <label className="w-full text-sm">
            Last Name <span className="text-sm text-red-500">*</span>
            <input
              type="text"
              placeholder="Enter last name"
              {...register("lastname")}
              readOnly
              className="w-full p-2 mb-2 text-base border rounded-md outline-none bg-neutral-100 border-neutral-300 focus-within:border-amber-800"
            />
          </label>
        </div>
        <div className="w-full gap-2 mt-2 md:flex">
          <label className="w-full text-sm">
            Email <span className="text-sm text-red-500">*</span>
            <input
              type="email"
              {...register("email")}
              readOnly
              className="w-full p-2 mb-2 text-base border rounded-md outline-none bg-neutral-100 border-neutral-300 focus-within:border-amber-800"
            />
          </label>
          <label className="w-full text-sm">
            Work email <span className="text-sm text-red-500"></span>
            <input
              type="email"
              placeholder="Enter work email"
              {...register("workemail", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full ${
                errors.workemail ? "border-red-500" : "border-gray-300"
              } p-2 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            />
          </label>
        </div>
        <div className="w-full gap-2 mt-2 md:flex">
          <label className="w-full text-sm">
            Mobile <span className="text-sm text-red-500">*</span>
            <input
              type="number"
              placeholder="Enter first name"
              {...register("mobile")}
              readOnly
              className="w-full p-2 mb-2 text-base border rounded-md outline-none bg-neutral-100 border-neutral-300 focus-within:border-amber-800"
            />
          </label>
          <label className="w-full text-sm">
            Alternate number <span className="text-sm text-red-500"></span>
            <input
              type="number"
              placeholder="Enter alternate mobile number"
              {...register("alternatenumber")}
              className="w-full p-2 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800"
            />
          </label>
        </div>
        <div className="w-full gap-2 mt-2 md:flex">
          <label className="w-full text-sm">
            Date of Birth <span className="text-sm text-red-500">*</span>
            <input
              type="string"
              {...register("dateOfBirth")}
              readOnly
              className="w-full p-2 mb-2 text-base border rounded-md outline-none bg-neutral-100 border-neutral-300 focus-within:border-amber-800"
            />
          </label>
          <label className="w-full text-sm">
            Age <span className="text-sm text-red-500">*</span>
            <input
              type="number"
              {...register("age")}
              readOnly
              className="w-full p-2 mb-2 text-base border rounded-md outline-none bg-neutral-100 border-neutral-300 focus-within:border-amber-800"
            />
          </label>
        </div>
        <div className="w-full gap-2 mt-2 md:flex">
          <label className="w-full text-sm">
            Gender <span className="text-sm text-red-500">*</span>
            <input
              type="string"
              {...register("gender",{required: "Gender is required"})}
              readOnly
              className={`w-full ${
                errors.gender ? "border-red-500" : "border-gray-300"
              } p-2 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            />
          </label>
          <label className="w-full text-sm">
            Country <span className="text-sm text-red-500">*</span>
            <select
              {...register("country", { required: "Please select a country" })}
              className={`w-full ${
                errors.country ? "border-red-500" : "border-gray-300"
              } p-2.5 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select a country</option>
              {optionr?.map((option, _) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="w-full gap-2 mt-2 md:flex">
        <label className="w-full text-sm">
            State <span className="text-sm text-red-500">*</span>
            <select
              {...register("state", { required: "Please select state" })}
              className={`w-full ${
                errors.state ? "border-red-500" : "border-gray-300"
              } p-2 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select a State</option>
              {optiont?.map((option, _) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </label>
          <label className="w-full text-sm">
            City <span className="text-sm text-red-500">*</span>
            <select
              {...register("city", { required: "Please select city" })}
              className={`w-full ${
                errors.city ? "border-red-500" : "border-gray-300"
              } p-2 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select a city</option>
              {optiony?.map((option, _) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="w-full gap-2 mt-2 md:flex">
          <label className="w-full text-sm">
            Zip Code <span className="text-sm text-red-500">*</span>
            <input
              type="string"
              {...register("pincode", { required: "Please enter pin" })}
              className={`w-full ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              } p-2 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            />
          </label>
          <label className="w-full text-sm">
            Ethnicity <span className="text-sm text-red-500">*</span>
            <select
              {...register("ethnicity", { required: "Please select a value" })}
              className={`w-full ${
                errors.ethnicity ? "border-red-500" : "border-gray-300"
              } p-2.5 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select a value</option>
              {optione?.map((option, _) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="w-full gap-2 mt-2 md:flex">
        <label className="w-full text-sm">
        Hispanic, Latino, Or Spanish Origin? <span className="text-sm text-red-500">*</span>
            <select
              {...register("origin", { required: "Please select option" })}
              className={`w-full ${
                errors.origin ? "border-red-500" : "border-gray-300"
              } p-2 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select a option</option>
              {optionc?.map((option, _) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </label>
          <label className="w-full text-sm">
          Relationship Status <span className="text-sm text-red-500">*</span>
            <select
              {...register("rstatus", { required: "Please select a value" })}
              className={`w-full ${
                errors.rstatus ? "border-red-500" : "border-gray-300"
              } p-2 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select a value</option>
              {optionp?.map((option, _) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="text-end">
          
          <button type="submit" onClick={onFormSubmit} className="px-5 py-2 ml-3 text-white bg-blue-800 rounded-3xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Basic;
