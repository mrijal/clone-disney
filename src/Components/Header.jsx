/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import {HiOutlineMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiHome, HiMagnifyingGlass} from 'react-icons/hi2'
import {HiPlus,HiDotsVertical} from 'react-icons/hi'
import HeaderItem from './HeaderItem'
import getTrendingVideos from '../Services/GlobalApi'

function Header() {
    const [toggle,setToggle] = useState(false);
    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        },
    ]
  return (
    <div className='flex items-center justify-between p-3'>
        <div className='flex items-center gap-8'>
            <img src={logo} className='w-[80px] md:w-[115px]' alt="" />
            <div className='hidden md:flex gap-8'>
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item,index)=>index<3&&(
                    <HeaderItem name={''} Icon={item.icon}/>
                ))}
            </div>
            <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical}/>
                {toggle?<div className='absolute mt-3 bg-[#1f1f1f] border-[1px] border-gray-700 p-3 px-5 py-4 rounded'>
                {menu.map((item,index)=>index>3&&(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
                </div>:null}
            </div>
        </div>
        <img className='w-[40px] h-[40px] rounded-full' src="https://i.pravatar.cc/100" alt="" />
        {console.log(getTrendingVideos)}
    </div>
  )
}

export default Header