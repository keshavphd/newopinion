import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import SummaryAPI, { Axios } from '../utils/Axios';
import toast from 'react-hot-toast';
import { setUserDetails } from "../store/UserSlice";

const Financial = ({onFormSubmit}) => {

    const user = useSelector((state) => state?.user);
    const dispatch = useDispatch()
    // console.log(user);
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
          decisin: user.decisin,
          incom: user.incom,
        },
      });
      const formdill3 = "abcde"

      const onSubmit = async(formData) => {
        try {
          const saveData = await Axios({
            ...SummaryAPI.updateFinance,
            data:{...formData,formdill3}

          })
    if(saveData){
      toast.success(saveData?.data?.msg);
      console.log(saveData?.data?.data);
      dispatch(setUserDetails(saveData?.data?.data))
    }
        } catch (error) {
          console.log(error);
        }
      };

      const optionra = [
        { value: "less than ₹20,000", label: "less than ₹20,000" },
        { value: "₹50,000.00 to ₹74,999.00", label: "₹50,000.00 to ₹74,999.00" },
        { value: "₹10,000,000,000.00 or above", label: "₹10,000,000,000.00 or above" },
      ];

      const optionrb = [
        { value: "Less than ₹1,500", label: "Less than ₹1,500" },
        { value: "₹1,500-₹7,499", label: "₹1,500-₹7,499" },
        { value: "₹50,000-₹99,999", label: "₹50,000-₹99,999" },
      ];


  return (
    <div>
          <div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="sticky top-0 p-3 text-lg font-bold text-white bg-orange-900 border rounded-tl-lg rounded-tr-lg">
              Financial Profile
            </h3>
            <div className=''>
            <label className="w-full text-sm">
            How Would You Best Describe Your Ability In Your Financial Decision Making <span className="text-sm text-red-500">*</span>
            <select
              {...register("decisin", { required: "" })}
              className={`w-full ${
                errors.decisin ? "border-red-500" : "border-gray-300"
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
          What Is Your Personal Income, Before Tax ?<span className="text-sm text-red-500">*</span>
            <select
              {...register("incom", { required: "" })}
              className={`w-full ${
                errors.incom ? "border-red-500" : "border-gray-300"
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
            <button type='submit' onClick={onFormSubmit} className="px-5 py-2 ml-3 text-white bg-blue-800 rounded-3xl">
            Submit
          </button>
            </div>
          </form>
    </div>
    </div>
  )
}

export default Financial
