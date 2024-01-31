/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth

export default function Slider() {
    //state
    const [movieList, setMovieList]= useState([])

    //hooks
    const elementRef = useRef();
    useEffect(()=>{
        getTrendingMovies()
    }, [])

    const getTrendingMovies = ()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const sliderRight = (e)=>{
        e.scrollLeft+=screenWidth-110
    }
    const sliderLeft = (e)=>{
        e.scrollLeft-=screenWidth-110
    }
  return (
    <div>
        {/* <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className='hidden md:block text-white absolute text-[30px] mt-[150px] mx-8 cursor-pointer font-semibold'/> */}
        <div onClick={()=>sliderLeft(elementRef.current)} className='hidden md:block text-white absolute text-[30px] mx-8 cursor-pointer font-semibold'>
            <div className='h-[310px]'>
                <HiChevronLeft className='mt-[150px]' />
            </div>
        </div>
        <div onClick={()=>sliderRight(elementRef.current)} className='hidden md:block text-white absolute text-[30px] mx-8 right-0 cursor-pointer font-semibold'>
            <div className='h-[310px]'>
                <HiChevronRight className='mt-[150px]' />
            </div>
        </div>
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
            {movieList.map((item)=>(
                <img src={IMAGE_BASE_URL+item.backdrop_path} alt="" className='min-w-full md:h-[310px] object-cover mr-5 object-left-top rounded-lg hover:border-[4px] border-white transition-all duration-75'/>
            ))}
        </div>
    </div>
  )
}
