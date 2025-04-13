import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { loginSchema } from "./LoginSchema";
import SummaryAPI, { Axios } from "../utils/Axios";
import toast from "react-hot-toast";
import { setUserDetails } from "../store/UserSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 
const Login = ({ close, open, opensignup }) => {
  const [data,setData] = useState({
    email:"",
    password:""
  })
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues:{
      email:data?.email,
      password:data?.password
    }
  });


  const onSubmit = async(formData) => {
    try {
      const saveData = await Axios({
        ...SummaryAPI.login,
        data:formData
      })
      // console.log(saveData);
      
if(saveData?.data?.msg == "Login Successfull"){
  toast.success(saveData?.data?.msg);
  localStorage.setItem("token",saveData.data.userToken);
 
  const data = await Axios({
    ...SummaryAPI.getUser
  })
  console.log(data);
  
  dispatch(setUserDetails(data.data.data));
  setData([])
  close();
  navigate("/dashboard/dasboard");
}
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 mt-16 ">
      <div className="flex justify-center w-full">
        <div className="p-2 pb-3 bg-white bg-opacity-100 lg:p-5 min-w-screen lg:min-w-lg rounded-2xl">
          <div className="pr-0 text-black md:pr-4 lg:pr-0 text-end">
            <button onClick={close}>
              <IoCloseSharp size={28} />
            </button>
          </div>
          <div className="flex items-center ml-3">
            <div className="items-center mx-auto">
              <div className="flex font-semibold border-4 rounded-3xl border-b-amber-700">
                <button
                  onClick={open}
                  className="px-3 py-1.5 border-r-2 hover:rounded-2xl hover:bg-gradient-to-b from-red-500 to-blue-500  hover:text-white border-amber-950"
                >
                  SIGN IN
                </button>

                <button
                  onClick={opensignup}
                  className="px-3 py-1.5 border-l-2 hover:rounded-2xl hover:bg-gradient-to-b from-red-500 to-blue-500 hover:text-white border-amber-950"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
          <div className="w-auto min-w-[90%]">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-1 lg:min-w-lg">
                <label className="w-full">
                  <div className="mt-3">Email:</div>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email id"
                    autoFocus
                    className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                  />
                     {errors.email && (
                      <div className="text-sm text-red-500">
                        {errors.email.message}
                      </div>
                    )}
                </label>
                <label>
                  <div className="mt-3">Password:</div>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password"
                    className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                  />
                  {errors.password && (
                      <div className="text-sm text-red-600">
                        {errors.password.message}
                      </div>
                    )}
                </label>
                <button
                  className="w-full py-1.5 mt-3 font-semibold text-white bg-orange-800 rounded-2xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
