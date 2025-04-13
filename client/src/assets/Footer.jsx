import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TbLocationFilled } from "react-icons/tb"; 
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6"; 
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state?.user);
 
  return (
    <div>
      {!(user?.email) && (<div className="w-full grid-cols-3 px-10 lg:grid gap-7">
      <div>
        <div className="pb-4">
          <img src="https://turn2opinion.com/images/logo.png" alt="image" />
        </div>
        <p className="pb-2">
          Turn2Opinion is a world wide Consumer and Business Community of
          Frequent Research. Turn2Opinion welcomes you as our new panel members
          to take participate and share your opinion and perspective to
          wide-ranging market research survey campaigns.
        </p>
      </div>
      <div>
        <h1 className="pt-4 pb-2 text-3xl font-semibold lg:pt-0 md:pt-0 text-amber-700 ">
          Quick links
        </h1>
        <ul>
          <li className="flex gap-1 pb-2 hover:text-amber-500">
            <FaAngleRight size={20} className="text-amber-600" />
            <button>Privacy Policy</button>
          </li>
          <li className="flex gap-1 pb-2 hover:text-amber-500">
            <FaAngleRight size={20} className="text-amber-600" />
            <button>GDPR Compilance</button>
          </li>
          <li className="flex gap-1 pb-2 hover:text-amber-500">
            <FaAngleRight size={20} className="text-amber-600" />
            <button>Cookie Policy</button>
          </li>
          <li className="flex gap-1 pb-2 hover:text-amber-500">
            <FaAngleRight size={20} className="text-amber-600" />
            <button>FAQ</button>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-amber-700 ">Contact info</h1>
        <ul>
          <li>
            <a href="https://goo.gl/maps/omWW4BDscx5fZpFdA" target="_blank">
            <div className="flex gap-2 pb-2">
                <div> <TbLocationFilled size={20}/></div>
                <div>Third Floor, B-96, Pushpanjali Enclave, Pitampura, Delhi 110034
                India</div>
            </div>
           
              
            </a>
          </li>
          <li>
            <a href="tel:+91 8130015743"><div className="flex gap-2 pb-2">
                <div><BsTelephoneFill size={20}/></div>
                <div>+91 8130015743</div>
            </div></a>
          </li>
          <li>
            <a href="mailto:support@frequentresearch.com"><div className="flex gap-2">
                <div><IoMail size={20}/></div>
                <div>support@frequentresearch.com</div>
            </div>
              
            </a>
          </li>
        </ul>
      </div>
     
    </div>) }

    <div className="z-50 items-center justify-between w-full px-4 text-center text-white lg:flex h-18 bg-amber-900">
    <div>© 2025 Frequent Research Fieldwork Solutions Pvt. Ltd. (dba Turn2Opinion). All Rights Reserved</div>
    <div className="flex items-center justify-center gap-2 pt-2 lg:pt-0">
    <BsInstagram size={20}/>  
    <RiTwitterXLine size={20}/>
    <FaFacebookF size={20}/>
    <FaGooglePlay size={20}/>
    </div>
   </div>
    </div>
    
  );
};

export default Footer;
