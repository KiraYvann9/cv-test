import { Earth, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

export const ReferencesComponent = () => {
  return (
    <div className='flex flex-col gap-10 p-14 bg-gray-200'>
        <div className=''>
            <div className=' flex flex-col flex-1 gap-4 border-l-2 border-cyan-600 pl-6 '>
            <div className='relative mb-6'>
            <h1 className='font-extrabold text-4xl text-cyan-950 before:content-[""] before:w-10 before:h-10 before:bg-cyan-600 before:absolute before:rounded-full before:left-[-45px] before:top-[-1px]'>REFERENCES</h1>
            </div>
            <div className='relative'>
            <div className='flex flex-col gap-2 '>
                <h1 className='text-cyan-950 font-bold text-xl before:content-[""] before:w-4 before:h-4 before:border-2 before:border-gray-100 before:bg-cyan-600 before:absolute before:rounded-full before:left-[-33px] before:top-[4px]'>DARWIN B. MAGANA</h1>
                <p>
                2813 Shobe Lane Mano, CO. <br />
                Tel: +1 970 533 3393 <br />
                Website: www.yourwebsite.com
                </p>
            </div>
            </div>
            <div className='relative'>
            <div className='flex flex-col gap-2 '>
                <h1 className='text-cyan-950 font-bold text-xl before:content-[""] before:w-4 before:h-4 before:border-2 before:border-gray-100 before:bg-cyan-600 before:absolute before:rounded-full before:left-[-33px] before:top-[4px]'>ROBERT J. BELVIN</h1>
                <p>
                2119 Fairfax Drive Newark, <br />
                Tel: +1 908 987 5103 <br />
                Website: www.yourwebsite.com
                </p>
            </div>
            </div>
            
        </div>
        </div>

        <div className=''>

            <div className=' flex flex-col flex-1 gap-4 border-l-2 border-cyan-600 pl-6 '>
            <div className='relative mb-6'>
            <h1 className='font-extrabold text-4xl text-cyan-950 before:content-[""] before:w-10 before:h-10 before:bg-cyan-600 before:absolute before:rounded-full before:left-[-45px] before:top-[-1px]'>EDUCATION</h1>
            </div>
            <div className='relative'>
            <div className='flex flex-col gap-2 '>
                <h1 className='text-cyan-950 font-bold text-xl before:content-[""] before:w-4 before:h-4 before:border-2 before:border-gray-100 before:bg-cyan-600 before:absolute before:rounded-full before:left-[-33px] before:top-[4px]'>STANFORD UNIVERSITY</h1>
                <p>
                MASTER DEGREE GRADUATE. <br />
                2011 - 2013
                </p>
            </div>
            </div>
            <div className='relative'>
            <div className='flex flex-col gap-2 '>
                <h1 className='text-cyan-950 font-bold text-xl before:content-[""] before:w-4 before:h-4 before:border-2 before:border-gray-100 before:bg-cyan-600 before:absolute before:rounded-full before:left-[-33px] before:top-[4px]'>UNIVERSITY OF CHICAGO</h1>
                <p>
                BACHELOR DEGREE GRADUATE, <br />
                2007 - 2010
                </p>
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
