import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import BlogFooter from './BlogFooter'
import BlogContent from './BlogContent'
import BlogNav from './BlogNav'
const Blog = () => {
 
  return (
    <>
  <BlogNav/>
  <BlogContent/>
  <BlogFooter/>
</>
  )
}

export default Blog
