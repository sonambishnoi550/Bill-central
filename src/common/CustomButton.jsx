import React from 'react'

const CustomButton = ({CustomButton, ButtonArrow}) => {
  return (
    <div><button className='font-bold text-white rounded-full rounded-tl-none py-3 px-5 bg-[#00A8E8] flex items-center text-base'>{CustomButton} <span>{ButtonArrow}</span>
      </button></div>
  )
}

export default CustomButton