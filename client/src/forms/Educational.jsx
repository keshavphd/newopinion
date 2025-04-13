import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import SummaryAPI, { Axios } from '../utils/Axios';
import toast from 'react-hot-toast';
import { setUserDetails } from "../store/UserSlice";

const Educational = ({onFormSubmit}) => {
    const user = useSelector((state) => state?.user);
    // console.log(user);
const dispatch = useDispatch()

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
          educationlevel: user.educationlevel,
          enroll: user.enroll,
          institute: user.institute,
          onlineclasses: user.onlineclasses,
          consider: user.consider,
        },
      });
      const formdill2 = "abcd"
      const onSubmit = async(formData) => {
        try {
          const saveData = await Axios({
            ...SummaryAPI.updateEducation,
            data:{...formData,formdill2}

          })
    if(saveData){
      toast.success(saveData?.data?.msg);
      dispatch(setUserDetails(saveData?.data?.data))
    }
        } catch (error) {
          console.log(error);
        }
      };
      
      const optionra = [
        { value: "Primary - 1 to 4", label: "Primary - 1 to 4" },
        { value: "Secondary - 4 to 8", label: "Secondary - 4 to 8" },
        { value: "Higher Secondary", label: "Higher Secondary" },
        { value: "Graduate", label: "Graduate" },
        { value: "Post-Graduate", label: "Post-Graduate" },
      ];

      const optionrb = [
        { value: "Master's degree program", label: "Master's degree program" },
        { value: "Bachelor's degree program", label: "Bachelor's degree program" },
        { value: "Graduate Certificate Program", label: "Graduate Certificate Program" },
        { value: "Post-Doctrate Program", label: "Post-Doctrate Program" },
        { value: "Post-Graduate program", label: "Post-Graduate program" },
      ];

      const optionrc = [
        { value: "Specialised College(Tecnical)", label: "Specialised College(Tecnical)" },
        { value: "Online Courses", label: "Online Courses" },
        { value: "Womens College", label: "Womens College" },
        { value: "Private School", label: "Private School" },
        { value: "Boarding-day school", label: "Boarding-day school" },
      ];

      const optionrd = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ];

      const optionre = [
        { value: "Private University", label: "Private University" },
        { value: "Online Course", label: "Online Course" },
        
      ];


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="sticky p-3 text-lg font-bold text-white bg-orange-900 border rounded-tl-lg rounded-tr-lg top-10 md:-top-6">

              Educational Profile
            </h3>
            <div className='grid-cols-2 gap-2 lg:grid'>
            <label className="w-full text-sm">
            Educational level <span className="text-sm text-red-500">*</span>
            <select
              {...register("educationlevel", { required: "" })}
              className={`w-full ${
                errors.educationlevel ? "border-red-500" : "border-gray-300"
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
          Are You Planning To Enroll In One Of These Programs When You Return To School ?<span className="text-sm text-red-500">*</span>
            <select
              {...register("enroll", { required: "" })}
              className={`w-full ${
                errors.enroll ? "border-red-500" : "border-gray-300"
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
           <label className="w-full text-sm">
           At Which Type Of Institution Are You Intent To /Currently Pursuing/Completed Your Degree ? <span className="text-sm text-red-500">*</span>
            <select
              {...register("institute", { required: "Please select an institute type" })}
              className={`w-full ${
                errors.institute ? "border-red-500" : "border-gray-300"
              } p-2.5 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select an option</option>
              {optionrc?.map((option, _) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </label> <label className="w-full text-sm">
          Are You Also Considering Taking Any Online Classes?  <span className="text-sm text-red-500">*</span>
            <select
              {...register("onlineclasses", { required: "Please select an onlineclasses" })}
              className={`w-full ${
                errors.onlineclasses ? "border-red-500" : "border-gray-300"
              } p-2.5 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select an option</option>
              {optionrd?.map((option, _) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </label> <label className="w-full text-sm">
            At Which Type Of Institution Are You Considering Pursuing/Intent To Persuit Your Degree ? <span className="text-sm text-red-500">*</span>
            <select
              {...register("consider", { required: "Please select an option " })}
              className={`w-full ${
                errors.consider ? "border-red-500" : "border-gray-300"
              } p-2.5 mb-2 text-base border rounded-md outline-none border-neutral-300 focus-within:border-amber-800`}
            >
              <option value="">Select an option</option>
              {optionre?.map((option, _) => (
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
  )
}

export default Educational
