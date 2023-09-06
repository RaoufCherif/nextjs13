import React from 'react'
import Link from 'next/link'
import "../globals.css"



export const Header = () => {
  return (
    <div>
        <nav  >
          <h1 className="text-xl font-bold  " > Hello</h1>
           <Link href="/">
                Header
            </Link>
        </nav>
    </div>
  )
}
