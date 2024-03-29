import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId{
      params:{
            blogId:string;
      }
}

const BlogDetailPage = async({params}:BlogId) => {
      const res=await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
            cache:"no-store",
      });
      const blog=await res.json();
  return (
    <div>
      
      <BlogDetails blog={blog}/>
    </div>
  )
}

export default BlogDetailPage