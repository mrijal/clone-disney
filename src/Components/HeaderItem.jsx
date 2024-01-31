/* eslint-disable react/prop-types */
import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='flex text-white items-center gap-3 text-[15px] cursor-pointer font-semibold
    hover:underline underline-offset-8 mb-3'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem