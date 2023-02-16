import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
const Blog = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-20">
      <span class="font-semibold text-xl tracking-tight">MyBlogs</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <Link  href="/" >
        <span class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
         Home
        </span>
        </Link>
        <Link href="/about">
        <span class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
         About
        </span>
        </Link>
        <Link href="/blog">
        <span  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Blog
        </span>
        </Link> 
        <Link href="/categories">
        <span  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
         categories
        </span>
        </Link> 
        <Link href="/contact">
        <span  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Contact
        </span>
        </Link> 
      </div>
      <div>
        <button onClick={()=>signOut()}  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Out</button>
      </div>
    </div>
  </nav>
  )
}

export default Blog