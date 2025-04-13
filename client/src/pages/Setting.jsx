import React from 'react'
import { useForm } from 'react-hook-form';
import SummaryAPI, { Axios } from '../utils/Axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
const navigate = useNavigate()
const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async(formData) => {
    try {
      const saveData = await Axios({
        ...SummaryAPI.updatePassword,
        data:formData
      })
if(saveData){
  toast.success(saveData?.data?.msg)
 navigate("/dashboard/dasboard")
}
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[80%] mx-auto pt-20'>
      <div className="sticky top-0 p-3 text-lg font-bold bg-amber-500">Update Password</div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
                  <label className="w-full">
                    <div className="mt-3"> Password:</div>
                    <input
                      type="password"
                      {...register("password",{required:"This field is required"})}
                      placeholder="Enter password"
                      className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                    />
                    {errors.password && (
                      <div className="text-sm text-red-600">
                        {errors.password.message}
                      </div>
                    )}
                  </label>
                  <label className="w-full">
                    <div className="mt-3"> Confirm Password:</div>
                    <input
                      type="password"
                      {...register("confirmpassword",{required:"This field is required"})}
                      placeholder="Enter password again"
                      className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                    />
                    {errors.confirmpassword && (
                      <div className="text-sm text-red-600">
                        {errors.confirmpassword.message}
                        </div>
                    )}
                  </label>
                </div>
                <button
                  className="w-full py-1.5 mt-3 font-semibold text-white bg-orange-800 rounded-2xl"
                  type="submit"
                  disabled={isSubmitting}
                >Submit</button>
      </form>
    </div>
  )
}

export default Setting