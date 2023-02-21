import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';
const BlogNav = () => {
    const router=useRouter();
    const handleLogout=(e)=>{
      e.preventDefault();
      router.push('/logout');
    }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-[28rem]">
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
          Blogs
        </span>
        </Link> 
        <Link href="/create">
        <span  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:underline">
         Create
        </span>
        </Link> 
        <Link href="/profile">
        <span  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:underline">
        Profile
        </span>
        </Link> 
      </div>
      <div>
        <button  onClick={handleLogout} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Out</button>
      </div>
    </div>
  </nav>
  )
}

export default BlogNav