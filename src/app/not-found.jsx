import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
    <div className='flex justify-center items-center h-full w-full'>
        <h4>404 Not Found</h4>
        <Link href='/'>Go back to home</Link>
    </div>
  )
}
