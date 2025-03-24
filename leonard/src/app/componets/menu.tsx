import Link from 'next/link'
import React from 'react'

type Props = Record<string, never>

export default function Menu({}: Props) {
  return (
  <nav className="bg-gray-900 p-4 shadow-md rounded-lg">
            <ul className='flex space-x-6 justify-center'>
                <li>
                    <Link className="px-4 py-2 text-white font-semibold rounded-lg transition duration-300 
                        hover:bg-amber-500 hover:text-gray-900" href="/">Home</Link>
                </li>
                <li>
                    <Link className="px-4 py-2 text-white font-semibold rounded-lg transition duration-300 
                        hover:bg-amber-500 hover:text-gray-900" href="/cars">Cars</Link>
                </li>
                <li>
                    <Link className="px-4 py-2 text-white font-semibold rounded-lg transition duration-300 
                        hover:bg-amber-500 hover:text-gray-900" href="/trucks">Trucks</Link>
                </li>
            </ul>
    </nav>
  )
}