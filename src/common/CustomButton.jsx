import React from 'react'

const CustomButton = ({ customButton, ButtonArrow }) => {
  return (
    <div><button className='font-bold text-white gap-2 rounded-full rounded-tl-none py-3 px-6 hover:rounded-br transition-all duration-700 bg-[#00A8E8] flex items-center text-base'>{customButton} <span>{ButtonArrow}</span>
    </button></div>
  )
}

export default CustomButton