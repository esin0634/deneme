import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bottom-0 flex justify-center items-center font-thin text-sm p-5'>
        Made with 🫀 by&nbsp;
        <Link href='http://github.com/esin0634' className='underline' target='_blank'>
            Esin 
        </Link>.


    </div>
  )
}

export default Footer