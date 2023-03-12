import React from 'react'
import Chart from 'chart.js/auto';



function Nav() {
  return (
    <div className='flex'>
    <div className='bg-metal border-2 border-metal rounded-md'>
        <ul className='text-2xl flex flex-col items-start [&>*]:pt-3 pb-3 pr-3 pl-3'>
            <a><li className='text-3xl w-max'>My Account</li></a>
            <a><li>Home</li></a>
            <a><li>Savings</li></a>
            <a><li>Overview</li></a>
        </ul>
        </div>
        <div className='w-4/5'>
            <h2 className='text-5xl p-3 text-purple text-center'>Balance</h2>
        </div>
    </div>
  )
}

export default Nav