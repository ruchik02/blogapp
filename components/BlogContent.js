import React from 'react'
import Link from 'next/link'

const BlogContent = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-4 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-md tracking-widest font-medium title-font mb-1">Welcome To MyBlogs Page </h1>
        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> Publish your passions, your way</h2>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Creating a unique and beautiful blog has never been easier. With the availability of numerous website builders, templates, and plugins, anyone can create a professional-looking blog in a matter of hours.</p>
      </div>
      <div class="flex flex-wrap">
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">React</h2>
          <p class="leading-relaxed text-base mb-4">React is a popular JavaScript library for building user interfaces using reusable components and a declarative approach.</p>
          <Link href='/blog'>
          <span class="text-teal-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </span>
          </Link>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Next</h2>
          <p class="leading-relaxed text-base mb-4">Next.js is a popular React framework for building server-side rendered React applications with improved performance.</p>
          <Link href='/blog'>
          <span class="text-teal-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </span>
          </Link>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">JavaScript</h2>
          <p class="leading-relaxed text-base mb-4">JavaScript is a popular programming language for creating dynamic and interactive web pages and mobile apps.</p>
          <Link href='/blog'>
          <span class="text-teal-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </span>
          </Link>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Flutter</h2>
          <p class="leading-relaxed text-base mb-4">Flutter is an open-source UI toolkit for building natively compiled applications for mobile and desktop.</p>
          <Link href='/blog'>
          <span class="text-teal-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </span>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogContent