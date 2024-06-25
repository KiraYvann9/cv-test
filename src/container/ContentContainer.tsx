import React from 'react'
import { ReferencesComponent, JobComponent } from '@/components'


export const ContentContainer = () => {
  return (
    <div className='flex gap-8'>
      <ReferencesComponent/>
      <JobComponent/>
    </div>
  )
}

