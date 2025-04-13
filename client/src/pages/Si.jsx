import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { allSchema, calculateAge, genderOptions } from "./SchemaCheck";
import toast from "react-hot-toast";
import SummaryAPI, { Axios } from "../utils/Axios";

const Si = ({ close, opens, openlogin }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(allSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const clientID = localStorage.getItem("referal")

  const dOB = watch("dateOfBirth");
  const ageTillNow = calculateAge(dOB);
   
  const onSubmit = async(formData) => {
    try {
      if(clientID === "null"){
       
        
        const age = ageTillNow;
        const saveData = await Axios({
          ...SummaryAPI.register,
          data:{...formData,age}
        })
  if(saveData){
    toast.success(saveData?.data?.msg);
   close();
  }
      }else{
      console.log("hi1");

        if(clientID !== "null"){
          console.log("hi1");

        const age = ageTillNow;
        const datas={...formData,age,clientID}
        console.log("sdfds",datas);

        const saveData = await Axios({
          ...SummaryAPI.registerviaref,
          data:{...formData,age,clientID,formdill:1},
        })
        console.log(datas);

  if(saveData){
    toast.success(saveData?.data?.msg)
   close();
      }
    
    } 
  }}catch (error) {
      console.log(error);
    
  };
  }


  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 mx-1 mt-16 overflow-y-auto ">
      <div className="flex justify-center w-full">
        <div className="p-2 pb-3 bg-white bg-opacity-100 lg:p-5 min-w-screen lg:min-w-lg rounded-2xl">
          <div className="pr-0 text-black sm:pr-4 lg:pr-0 text-end">
            <button onClick={close}>
              <IoCloseSharp size={28} />
            </button>
          </div>
          <div className="flex items-center ml-3">
            <div className="items-center mx-auto">
              <div className="flex font-semibold border-4 rounded-3xl border-b-amber-700">
                <button
                  onClick={openlogin}
                  className="px-3 py-1.5 border-r-2 hover:rounded-2xl hover:bg-gradient-to-b from-red-500 to-blue-500  hover:text-white border-amber-950"
                >
                  SIGN IN
                </button>

                <button
                  onClick={opens}
                  className="px-3 py-1.5 border-l-2 hover:rounded-2xl hover:bg-gradient-to-b from-red-500 to-blue-500 hover:text-white border-amber-950"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full ">
            <div className="w-auto min-w-[90%]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full mx-1 lg:min-w-lg"
              >
                <div className="w-full gap-2 lg:flex">
                  <label className="w-full">
                    <div className="mt-3">First name:</div>
                    <input
                      type="text"
                      {...register("firstname")}
                      placeholder="Enter your first name"
                      autoFocus
                      className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                    />
                    {errors.firstname && (
                      <div className="text-sm text-red-500">
                        {errors.firstname.message}
                      </div>
                    )}
                  </label>
                  <label className="w-full">
                    <div className="mt-3">Last name:</div>
                    <input
                      type="text"
                      {...register("lastname")}
                      placeholder="Enter your last name"
                      className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                    />
                    {errors.lastname && (
                      <div className="text-sm text-red-500">
                        {errors.lastname.message}
                      </div>
                    )}
                  </label>
                </div>
                <label className="w-full">
                  <div className="mt-3">Email:</div>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                  />
                  {errors.email && (
                    <div className="text-sm text-red-500">
                      {errors.email.message}
                    </div>
                  )}
                </label>
                <div className="gap-2 lg:flex">
                  <label className="w-[50%]">
                    <div className="mt-3">Mobile:</div>
                    <input
                      type="number"
                      {...register("mobile")}
                      placeholder="Enter your phone no."
                      className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                    />
                    {errors.mobile && (
                      <div className="text-sm text-red-500">
                        {errors.mobile.message}
                      </div>
                    )}
                  </label>
                  <div className="w-[50%]">
                    <div className="mt-3">Gender:</div>
                    <div className="flex gap-2">
                      {genderOptions.map((option, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-0.5"
                        >
                          <input
                            type="radio"
                            value={option}
                            {...register("gender")}
                            className="h-8 pl-2 border rounded outline-none border-neutral-300 w-fit focus-within:border-amber-800 bg-blue-50"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    
                  {errors.gender && (
                    <div className="text-sm text-red-600">
                      {errors.gender.message}
                    </div>
                  )}
                  </div>

                </div>

                <div className="flex gap-2">
                  <label className="w-full">
                    <div className="mt-3"> Date of Birth:</div>
                    <input
                      type="date"
                      {...register("dateOfBirth")}
                      placeholder=""
                      className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                    />
                    {errors.dateOfBirth && (
                      <div className="text-sm text-red-600">
                        {errors.dateOfBirth.message}
                      </div>
                    )}
                  </label>
                  <label className="w-full">
                    <div className="mt-3"> Age:</div>
                    <input
                      type="Number"
                      {...register("age")}
                      value={ageTillNow}
                      readOnly
                      className="w-full h-8 pl-2 border rounded outline-none border-neutral-300 focus-within:border-amber-800 bg-blue-50"
                    />
                  </label>
                </div>
                <div className="gap-2 lg:flex">
                  <label className="w-full">
                    <div className="mt-3"> Password:</div>
                    <input
                      type="password"
                      {...register("password")}
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
                      {...register("confirmpassword")}
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

export default Si;
