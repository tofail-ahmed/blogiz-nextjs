import { BlogPost } from '@/types'
import React from 'react'
import LatestBlogCard from '../ui/LatestBlogCard'
import BlogCard from '../ui/BlogCard'

const LatestBlogs = ({blogs}:{blogs:BlogPost[]}) => {
  return (
    <div className='w-[90%] mx-auto'>
      <h1 className="text-4xl text-center my-5">Latest Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <h1 className='mx-auto  text-gray-600 text-center'> <i>
      Dive into the fascinating world of quantum computing, <br /> where unlocking unprecedented computational power.</i></h1>
      <div className='grid grid-cols-2 gap-4 my-5'>
        {
          blogs.slice(0,2).map((blog)=>
          <LatestBlogCard key={blog.id} blog={blog}/>
          )
        }
      </div>
      <div className='grid grid-cols-3 gap-4 my-5'>
        {
          blogs.slice(2,5).map((blog)=>
          <BlogCard key={blog.id} blog={blog}/>
          )
        }
      </div>
    </div>
  )
}

export default LatestBlogs