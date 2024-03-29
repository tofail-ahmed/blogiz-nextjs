"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { BlogPost } from "@/types";
import React from "react";

const BlogsPage =  () => {
  // const res = await fetch("http://localhost:5000/blogs",{
  //     cache:"no-store",
  // });
  // const blogs = await res.json();
  const {data:blogs,isLoading,isFetching,isError,error}=useGetBlogsQuery("");
  console.log(blogs)
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        Latest Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <h1 className="mx-auto  text-gray-600 text-center">
        {" "}
        <i>
          Dive into the fascinating world of quantum computing, <br /> where
          unlocking unprecedented computational power.
        </i>
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
            {
                  blogs?.map((blog:BlogPost)=>
                  <BlogCard key={blog.id} blog={blog}/>
                  )
            }
      </div>
    </div>
  );
};

export default BlogsPage;
