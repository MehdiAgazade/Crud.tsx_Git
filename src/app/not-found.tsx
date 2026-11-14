import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <p>Not_Found_404</p>
      <Link href={"/"} className='text-red-500'>BACK TO HOME PAGE</Link>
    </div>
  )
}

export default NotFound
