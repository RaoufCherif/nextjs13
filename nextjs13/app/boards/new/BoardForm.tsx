"use client"

import React from 'react'
import { FormEvent } from 'react'

export const BoardForm = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const title = String(formData.get('title'))

    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-7'>

        <h1 className='text-2xl m-12' > Create a new Board</h1>
        <input type="text" name="Title" id="Title"   />
        <input type="text" className="block w-full text-sm  border-solid border-2 p-2
      
    "/>
        <button className='bg-blue w-fit ml-9 mb-8'>
        Create
        </button>

    </form>
  )
}

export default BoardForm
