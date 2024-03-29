import BlogDetails from "@/components/ui/BlogDetails";
import { BlogPost } from "@/types";

interface BlogId {
  params: {
    blogId: string;
  };
}
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: BlogPost) => ({
    blogId: blog.id,
  }));
};
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