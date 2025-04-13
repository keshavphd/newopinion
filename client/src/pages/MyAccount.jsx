import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import PaymentMethod from "./Payment";
import { GrEdit } from "react-icons/gr";
const MyAccount = () => {
  const user = useSelector((state) => state?.user);
  const [openPayment,setOpenPayment] = useState(false);
  const [contact,setContact] = useState(false);
  console.log("fdhg", user);
  const formdils =
  user?.formdill1 + user?.formdill2 + user?.formdill3 + user?.formdill4 + user?.formdill5; 
  const formdills =
  user?.formdill1 +user?.formdill + user?.formdill2 + user?.formdill3 + user?.formdill4 + user?.formdill5;
  const dob = user?.dateOfBirth;
  const createdAt = user?.createdAt;
  const formattedDob = moment(dob).format("DD-MMM-YYYY");
  const create = moment(createdAt).format("DD-MMM-YYYY")
  console.log(formattedDob);
  const handlePayment = ()=>{
    setOpenPayment(true);
  }
const handleSetContact = ()=>{
  setContact(true)
}


  return (
    <div className="z-40 p-3 mt-12 md:mt-0 rounded-2xl lg:mt-0 bg-neutral-100">
      {openPayment && <div className="flex items-center justify-between "><PaymentMethod close={()=>setOpenPayment(false)}/></div>}
      <div className="grid grid-cols-1 gap-2 m-3 lg:grid-cols-3">
        <div className="flex flex-col gap-4 text-sm">
          <div className="bg-white rounded-3xl">
          <div className="flex flex-col p-3 m-3 rounded-2xl bg-neutral-200">
            <div className="flex justify-center gap-2">
              <div >
                <img
                  src="https://turn2opinion.com/assets/images/avatars/67e3c74c391eb7e2f79140ad.png"
                  alt="" className="rounded-full w-15 h-15"
                />
              </div>
              
                <div className="flex flex-col">
                  <div>{user?.firstname}</div>
                  <div>{user?.email}</div>
                  <div>{user?.gender}</div>
               
              </div>
            </div>
            <div className="flex justify-end w-full">
              
                <div className="flex flex-col mr-auto">
                  <div>Mobile</div>
                  <div>+91{user?.mobile}</div>
                </div>
                <div>
                <div className="flex flex-col">
                  <div className="w-full">Birth Date</div>
                  <div>{formattedDob}</div>
                </div>
                </div>
                </div>
              <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                {Array(5).fill(null).map((data,index)=>(
 <div className="text-amber-600"><FaStar size={18} /></div>
                  ))}
              
            </div>
            <div className="text-center">Created On :{create}</div>
              </div>
              
            
          </div>
          </div>
         
          {/* <div><PaymentMethod/></div> */}
          <div className="flex flex-col gap-2 p-5 rounded-2xl bg-amber-50">
            <div className="flex justify-between">
            <div>PAYMENT METHOD</div>
<button onClick={handlePayment}><GrEdit /></button>
            </div>
            <div className="border-[0.6px] opacity-20 "></div>
            <div className="text-neutral-400">UPI ID:abcd234523@upi</div>
          </div>
          <div className="flex flex-col gap-2 p-5 rounded-2xl bg-amber-50">
            <div className="flex justify-between">
            <div>CONTACTS</div>
<button onClick={handleSetContact}><GrEdit /></button>
            </div>
            <div className="border-[0.6px] opacity-20 "></div>
            <div className="text-neutral-400">Contact:+91 8345345345</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">CURRENT REWARDS</p>
              <h1 className="text-3xl font-bold">{200 + (formdills*10)} Points</h1>
              
            </div>
            <div>
              <img
                src="https://turn2opinion.com/dashboard/img/success.png"
                className="w-16 p-2 bg-white rounded-full"
                alt="image"
              />
            </div>
          </div>
          

          <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">CLAIMED REWARDS</p>
              <h1 className="text-3xl font-bold">$ 0 USD</h1>
              
            </div>
            <div>
              <img
                src="https://turn2opinion.com/dashboard/img/conversion.png"
                className="w-16 p-2 bg-white rounded-full"
                alt="image"
              />
            </div>
          </div>


          <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">PROFILE STATUS</p>
              <h1 className="text-3xl font-bold">{Math.floor((formdils / 5) * 100) + "%"}</h1>
              
            </div>
            <div>
              <img
                src="https://turn2opinion.com/dashboard/img/reward.png"
                className="w-16 p-2 bg-white rounded-full"
                alt="image"
              />
            </div>
          </div>


          <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">TOTAL REWARDS GENERATED</p>
              <h1 className="text-3xl font-bold">{(200 + (formdills*10))/100} $</h1>
              
            </div>
            <div>
              <img
                src="https://turn2opinion.com/dashboard/img/money-bag.png"
                className="w-16 p-2 bg-white rounded-full"
                alt="image"
              />
            </div>
          </div>

          
           </div>
        <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">TOTAL PROFILE COMPLETION</p>
              <h1 className="text-3xl font-bold">{formdils}/5</h1>
              
            </div>
            <div>
              <img
                src="https://turn2opinion.com/dashboard/img/man.png"
                className="w-16 p-2 bg-white rounded-full"
                alt="image"
              />
            </div>
          </div>
          

          <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">TOTAL SURVEY TAKEN</p>
              <h1 className="text-3xl font-bold">5</h1>
              
            </div>
            <div>
              <img
                src="https://turn2opinion.com/dashboard/img/online-survey.png"
                className="w-16 p-2 bg-white rounded-full"
                alt="image"
              />
            </div>
          </div>


          <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">COMPLETED SURVEYS</p>
              <h1 className="text-3xl font-bold">{formdils}</h1>
              
            </div>
            <div>
              <img
                src="https://turn2opinion.com/dashboard/img/completed-task.png"
                className="w-16 p-2 bg-white rounded-full"
                alt="image"
              />
            </div>
          </div>


          <div className="flex items-center justify-between w-full gap-1 p-4 shadow-md rounded-2xl bg-cyan-200">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">REMAINING SURVEYS</p>
              <h1 className="text-3xl font-bold">{Math.floor(5-(formdils))}</h1>
              
            </div>
            <div>
              <img
                src="https://turn2opinion.com/dashboard/img/fake.png"
                className="w-16 p-2 bg-white rounded-full"
                alt="image"
              />
            </div>
          </div>

           </div>
      </div>
    </div>
  );
};

export default MyAccount;
