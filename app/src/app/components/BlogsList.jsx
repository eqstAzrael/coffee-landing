import Image from "next/image"; 
import blogsData from "../blogsData";

function BlogsList() {
    return (  
        <div className="grid grid-cols-2 gap-20">
            {blogsData.map(blog => (
                <div key={blog.id} className="flex flex-col gap-5 w-100 bg-[#452812] justify-center items-center p-10 rounded-3xl shadow">
                    <Image src={blog.imageUrl} alt={blog.title} width={900/2} height={503/2} className="rounded-2xl"/>
                    <h2 className="font-extralight ">{blog.title}</h2>
                    <span>{blog.excerpt}</span>
                </div>
            ))}
        </div>
    );
}

export default BlogsList;