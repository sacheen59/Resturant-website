import React from 'react'

const Dashboard = () => {
  return (
   <div className='h-full grid grid-cols-[3fr_1fr]'>
    <div className='bg-red-300'>
      Order List
    </div>
    <div className='bg-amber-300'>
      Customer Information
    </div>
   </div>
  )
}

export default Dashboard