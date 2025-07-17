import React from 'react'

function Container(props) {
  return (
    <div className='w-[1400px] mx-auto gap-[30px] overflow-x-hidden'>
        {props.children}
    </div>
  )
}

export default Container;