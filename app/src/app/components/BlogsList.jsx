import Image from "next/image";
import blogsData from "../blogsData";

function BlogsList() {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl px-4">
      {blogsData.map((blog) => (
        <li key={blog.id}>
          <article className="flex flex-col gap-5 w-full bg-[#452812] justify-center items-center p-6 md:p-10 rounded-3xl shadow-lg border border-white/5">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                className="object-cover transition-transform hover:scale-110 duration-500"
              />
            </div>
            <h2 className="font-extralight text-2xl text-center">{blog.title}</h2>
            <p className="text-sm md:text-base text-[#F2EAD7]/80 text-center leading-relaxed">
              {blog.excerpt}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default BlogsList;