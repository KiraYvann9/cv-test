import React from 'react'
import './header.css'
import Image from 'next/image'


export const HeaderComponent = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center border h-[250px]'>
        <div className='hearder-bg bg-cyan-600 h-32 w-full'></div>
        <div className='absolute w-[90%] h-auto'>
            <div className='flex gap-8 items-center'>
                <div className='border-white border-4 w-[200px] h-[200px] shadow-md bg-gray-400'>
                    <Image src={'/assets/img/photo.JPG'} width={200} height={200} alt='' className='h-auto'/>
                </div>

                <div>
                    <h1 className='font-extrabold text-4xl text-white'>BRIAN R. BAXTER</h1>
                    <p className='text-white text-xl'>GRAPHIC & WEB DESIGNER</p>
                </div>
            </div>
        </div>
    </div>
  )
}
