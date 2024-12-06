import React from 'react'

const Heading = (heading,textBold) => {
  return (
      <h2 className={`font-normal text-5xl text-black`}>
          {heading}
          <span className='font-bold'> { textBold}</span>
   </h2>
  )
}

export default Heading
