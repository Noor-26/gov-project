import React from 'react'
import { GrSearch } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import phoneImg from '../../../images/phone.png'
import { HiPlus } from 'react-icons/hi';
import { CiExport } from 'react-icons/ci';
import { AiOutlinePrinter } from 'react-icons/ai';
import SparProgressTable from './SparProgressTable/SparProgressTable' 
const SparProgressList = () => {
  return (
    <div>
    
    <div className='flex justify-between py-2 px-4 mt-2 '>
        <div className='flex'>
        <div className="avatar">
  <div className="w-[41px] rounded-md py-1">
    <img src={phoneImg} />
  </div>
</div>
<div className='ml-2'>
    <p className="font-semibold capitalize text-[20px] text-[#165DC5]">SPAR Progress List</p>
    <p className='text-[14px] capitalize text-[#959298]'>Most asked questions</p>
</div>
        </div>
  
   <Link to="/sparprogressentry-update" ><button className=" bg-btn_def border-none hover:bg-btn_def py-2 px-4 uppercase text-white rounded-md text-[15px] flex items-center"> <span className='py-2 pl-2 mr-2 rounded-md relative right-[5px] text-center  bg-white '><HiPlus className="text-[18px] bg-white mx-auto text-center text-btn_def  font-bold mr-2"/> </span>Add new spar progress list </button></Link>
   
   </div>
   <div className="card rounded-md mt-8 card-compact border w-full bg-base-100 p-0 shadow ">
     <div className='flex justify-between p-4'>
         <div className="flex ">
           <button className='font-semibold uppercase bg-[#f0f1ff]  border-none rounded text-btn_def py-2 px-4 flex items-center text-[14px]'><CiExport className="text-[20px] font-bolder mr-2"/>  Export to excel</button>
           <button  className='font-semibold uppercase ml-2 bg-[#f0f1ff]  border-none rounded text-btn_def py-2 px-4 flex items-center text-[14px]'><AiOutlinePrinter className="text-[20px] font-semibold mr-2"/>  print</button>
         </div>

         <div className="form-control border rounded ">
<label className="input-group ">
<span className="bg-white"><GrSearch className="
text-[#959298] text-xl"/></span>
<input type="text" placeholder="Search here" className="input  w-[40vw] focus:outline-none" />
</label>
</div>
     </div>
<SparProgressTable/> 
</div>
</div>
  )
}

export default SparProgressList