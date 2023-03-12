import React from 'react'

function Nav() {
  return (
    <div className='bg-metal border-2 border-metal rounded-md p-7'>
        <ul className='text-2xl white flex flex-col items-start [&>*]:p-3'>
            <a><li>My Account</li></a>
            <a><li>Home</li></a>
            <a><li>Savings</li></a>
            <a><li>Overview</li></a>
        </ul>
    </div>
  )
}

export default Nav