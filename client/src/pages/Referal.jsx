import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SummaryAPI, { Axios } from "../utils/Axios";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

const Referal = () => {
  const user = useSelector((state) => state?.user);
  console.log("ABC",user);
  const data = user?.clientID === undefined;
  console.log("544444",data);
  
  const columnHelper = createColumnHelper();

  const [datas,setDatas] = useState([])
  
  const setData = ()=>{
    const data = user?.referals;
    setDatas(data)
  };

  

  const [display, setDisplay] = useState(data);
const dispatch = useDispatch()
  const handleSubmit =async()=>{
    setDisplay(false)
    try {
      const response = await Axios({
        ...SummaryAPI.getStatus,
        data:{request:"trues"}
      })
      dispatch(response?.data?.data)
    } catch (error) {
      console.log(error);
      setDisplay(false)
    }
    

   

    
// dispatch(setUserDetails())
  }
  const column = [
    columnHelper.accessor((row) => `${row?.firstname} ${row?.lastname}`, {
      id: "fullName",
      header: "Full Name",
    }),
    
    columnHelper.accessor("mobile", {
      header: "Mobile",
      cell: (value) => (
        <div className="mx-auto text-sm w-fit">
          {value.cell.row.original.mobile}
        </div>
      ),
    }),

    columnHelper.accessor("email", {
      header: "Email",
      cell: (value) => (
        <div className="mx-auto text-sm w-fit">
          {value.cell.row.original.email}
        </div>
      ),
    }),
    columnHelper.accessor("createdAt", {
      header: "CreatedAt",
      cell: (value) => (
        <div className="mx-auto text-sm w-fit">
          {value.cell.row.original.createdAt}
        </div>
      ),
    }),
    columnHelper.accessor("dateOfBirth", {
      header: "DOB",
      cell: (value) => {
        const dateOBirth = new Date(value.row.original.dateOfBirth);
        const year = dateOBirth.getFullYear();
        const month = (dateOBirth.getMonth() + 1).toString().padStart(2, "0");
        const day = dateOBirth.getDate().toString().padStart(2, "0");
        return `${day}-${month}-${year}`;
      },
    }),

    columnHelper.accessor("country", {
      header: "Country",
    }),
    columnHelper.accessor("city", {
      header: "City",
    }),
  ];
  const url = user?.clientID || user?._id
  ? `http://localhost:5173/${user?.clientID || user?._id}`
  : null;

const handleShare = async()=>{
  if(navigator.share){
try {
  await navigator.share({
    url: url,
  });
  console.log("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
  }else {
    alert("Web Share API is not supported in your browser.");
  }
}
    const table = useReactTable({
        data:datas,
        columns: column,
        getCoreRowModel: getCoreRowModel(),
      });
      useEffect(()=>{
        setData()
      },[display])
  return (
    <div>
      <div className="px-2 py-4 -mt-5 text-2xl bg-gradient-to-r from-blue-50 to-amber-200">
        Referals
      </div>
{user.request !== "updated" && <div className="pt-10 text-center">
        {(user?.request === "trues" || !display) ? (
          <>Request sent</>
        ) : (
          <>
            Request for client -
            <button
              onClick={handleSubmit}
              className="px-2 py-2 ml-2 font-semibold bg-green-400 cursor-pointer rounded-3xl"
            >
              Send Request
            </button>
          </>
        )}
      </div>}
      <div className="mt-3 ml-5">Share to your friends:</div>
      
      <div className="flex items-center justify-center w-full max-w-lg m-2 mx-auto">
      <input type="text" readOnly className="w-full py-2 pl-5 outline-none bg-neutral-100" value={url} />
      <button onClick={handleShare} className="p-2 text-white bg-blue-600 rounded-sm">Share</button>
      </div>
     <div className="pl-10 text-xl font-semibold">Referals</div>
      <div className="w-full p-2 overflow-auto">
           
         <table className="w-full">
           <thead className="py-3 text-white bg-black">
             {table.getHeaderGroups().map((headerGroup) => (
               <tr key={headerGroup.id}>
                 <th>Serial No.</th>
                 {headerGroup.headers.map((header) => (
                   <th key={header.id} className="border">
                     {header.isPlaceholder
                       ? null
                       : flexRender(
                           header.column.columnDef.header,
                           header.getContext()
                         )}
                   </th>
                 ))}
               
               </tr>
             ))}
           </thead>
           <tbody>
             {table.getRowModel().rows.map((row, index) => (
               <tr key={row.id}>
                 <td className="px-2 text-center border">{index + 1}</td>
                 {row.getVisibleCells().map((cell) => (
                   <td key={cell.id} className="items-center px-2 border-b bg-a">
                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
                   </td>
                 ))}
               
               </tr>
             ))}
           </tbody>
         </table>
        
       </div>
    </div>
  );
};

export default Referal;
