import { CircleUserRound, Earth, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'
import { User } from 'lucide-react'
// import '.hero.scss'

export const HeroComponent = () => {
  return (
    <div className='p-14 bg-cyan-950 text-white flex gap-8'>
      <div className='flex w-[65%] flex-col gap-4 pl-7'>
        <div className='relative'>
          <div className='absolute flex justify-center items-center left-[-50px] text-cyan-950 top-[-10px] bg-cyan-500 w-10 h-10 rounded-full '>
            <User/>
          </div>
          <h1 className='relative font-semibold text-xl '>ABOUT ME</h1>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque ad. Nulla, minus dicta quibusdam dolorum deleniti exercitationem eligendi asperiores quos commodi, inventore qui obcaecati reprehenderit debitis ab dolor architecto.</p>
      </div>
      <div className=' flex flex-col flex-1 gap-4 border-l-2 border-cyan-600 pl-6 '>
        <div className='relative'>
          <div className='absolute flex justify-center items-center left-[-45px] text-cyan-950 top-[-5px] bg-cyan-600 w-10 h-10 rounded-full '>
            <CircleUserRound/>
          </div>
          <h1 className='font-semibold text-2xl '>CONTACT ME</h1>
        </div>
        <div className='relative'>
          <div className='flex items-center gap-2 before:content-[""] before:w-4 before:h-4 before:bg-cyan-600 before:absolute before:rounded-full before:border-cyan-950 before:border-2 before:left-[-33px]'>
            <PhoneCall/>
            <p>
              +225 07 79 34 8135 <br />
              +225 05 76 80 3451
            </p>
          </div>
        </div>
        <div className='relative'>
          <div className='flex items-center gap-2 before:content-[""] before:w-4 before:h-4 before:bg-cyan-600 before:absolute before:rounded-full before:border-cyan-950 before:border-2 before:left-[-33px]'>
            <Earth/>
            <p>
              www.mon-cv.com <br />
              kira-info@info.com
            </p>
          </div>
        </div>
        <div className='relative'>
          <div className='flex items-center gap-2 before:content-[""] before:w-4 before:h-4 before:bg-cyan-600 before:absolute before:rounded-full before:border-cyan-950 before:border-2 before:left-[-33px]'>
            <MapPin/>
            <p>
              769 Prudence Street <br />
              Lincoln Park, MI 48146
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
