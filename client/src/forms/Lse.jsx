import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SummaryAPI, { Axios } from "../utils/Axios";
import toast from "react-hot-toast";
import { setUserDetails } from "../store/UserSlice";

const Lse = ({ onFormSubmit }) => {
  const user = useSelector((state) => state?.user);
  // console.log(user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      abroad: user.abroad,
      visit: user.visit,
    },
  });

  const formdill5 = "abcdef";
  const onSubmit = async (formData) => {
    try {
      const saveData = await Axios({
        ...SummaryAPI.updateFLifeStyle,
        data: { ...formData, formdill5 },
      });
      if (saveData) {
        toast.success(saveData?.data?.msg);
        dispatch(setUserDetails(saveData?.data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const optionra = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9 or above", label: "9 or above" },
   
  ];

  const optionrb = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "UK", label: "UK" },
    { value: "Singapore", label: "Singapore" },
    { value: "Nepal", label: "Nepal" },
    { value: "Australia", label: "Australia" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 bg-white rounded-lg shadow-md"
        >
          <h3 className="sticky top-0 p-3 text-lg font-bold text-white bg-orange-900 border rounded-tl-lg rounded-tr-lg">
            Shopping Profile
          </h3>
          <div className="">
            <label className="w-full text-sm">
              How you explore other country,in a year how many times you go abroad <span className="text-sm text-red-500">*</span>
              <select
                {...register("abroad", { required: "" })}
                className={`w-full ${
                  errors.abroad ? "border-red-500" : "border-gray-300"
                } p-2.5 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
              >
                <option value="">Select an option</option>
                {optionra?.map((option, _) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="w-full text-sm">
              Which country do you visit most ?
              <span className="text-sm text-red-500">*</span>
              <select
                {...register("visit", { required: "" })}
                className={`w-full ${
                  errors.visit ? "border-red-500" : "border-gray-300"
                } p-2.5 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
              >
                <option value="">Select an option</option>
                {optionrb?.map((option, _) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="text-end">
            <button
              type="submit"
              onClick={onFormSubmit}
              className="px-5 py-2 ml-3 text-white bg-blue-800 rounded-3xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Lse;
