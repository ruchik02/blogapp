import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import BlogFooter from './BlogFooter'
const Blog = () => {
  return (
    <>

    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-96">
      <span className="font-semibold text-xl tracking-tight ml-3">MyBlogs</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-md lg:flex-grow">
        <Link  href="/" >
        <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:underline">
         Home
        </span>
        </Link>
        <Link href="/about">
        <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline
         mr-4">
         About
        </span>
        </Link>
        <Link href="/blog">
        <span  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:underline">
          All-Blogs
        </span>
        </Link> 
        <Link href="/categories">
        <span  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:underline">
         Categories
        </span>
        </Link> 
        <Link href="/contact">
        <span  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:underline">
        Contact
        </span>
        </Link> 
      </div>
      <div>
        <button onClick={()=>signOut()}  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Out</button>
      </div>
    </div>
  </nav>
  <BlogFooter/>
</>
  )
}

export default Blog
