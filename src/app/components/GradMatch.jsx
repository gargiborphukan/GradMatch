import React from 'react';
import HeaderItem from './HeaderItem';
import  { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { SiHomebridge } from "react-icons/si";
import { CiSquarePlus } from "react-icons/ci";
import Link from 'next/link';


export default function GradMatch() {
  return (

    //creating the hearder surface and bottom border
    <header className='border-b border-border bg-card'>
    <div>

    {/*used AI to fix*/}
    <div className='flex flex-wrap items-center justify-betweengap-4 px-6 py-3'>
      <div className='flex items-center gap-6'></div>
      <HeaderItem  title="Home" address="/Login Page" Icon= { SiHomebridge }/> 
      <HeaderItem  title="Welcome! To Your DashBoard" address="/dashboard" Icon={ MdOutlineSpaceDashboard}/> 

  
    <div className='ml-auto flex items-center gap-4'>
      <HeaderItem address="/alerts" Icon={ MdOutlineNotificationsNone}/>

      {/*Style Pill Button-used AI to fix*/}
      <Link href="/Add Application" 
      className='flex items-center gap-2 bg-green-800 text-amber-100 font-medium px-4 py-2 rounded-lg transition-colors'>
      <CiSquarePlus className='text-xl'/>
      <span>Add Application</span> 
      </Link>
    </div>  
    </div>

    </div>
    </header>
  );
}
