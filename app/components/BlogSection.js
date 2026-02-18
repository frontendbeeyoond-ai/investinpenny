import { Calendar, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import api from "../lib/helper";

export const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/get-blog/");
        const blogData = Array.isArray(response.data)
          ? response.data
          : response.data.results || response.data.data || [];

        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Market Intelligence{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Research Blog
            </span>
          </h2>
          <p className="text-gray-400 text-xl mt-3">Latest insights and research updates.</p>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading && (
            <div className="col-span-2 text-center py-10">
              <p className="text-gray-400 animate-pulse">Loading articles...</p>
            </div>
          )}

          {/* ❌ No Records */}
          {!loading && blogs.length === 0 && (
            <div className="col-span-2 text-center py-10">
              <p className="text-gray-500">No articles found.</p>
            </div>
          )}
          {/* ✅ Blog List */}
          {!loading &&
            blogs.length > 0 &&
            blogs.slice(0, 10).map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.id}`}
                className="flex gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:shadow-xl transition cursor-pointer"
              >
                {/* Image */}
                <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={blog.blog_img} alt={blog.blog_title} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-md font-semibold text-white line-clamp-2 hover:underline">{blog.blog_title}</h3>

                  <p className="text-gray-400 text-xs mt-2 line-clamp-1">{stripHtml(blog.blog_content)}</p>

                  <div className="flex items-center justify-between mt-3 text-[11px] text-gray-500">
                    {blog.blog_date || '-'}

                    <span className="text-cyan-400 hover:text-cyan-300 text-xs font-medium">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* View All */}
        {!loading && blogs.length > 0 && (
          <div className="flex justify-center mt-10">
            <Link href={`/blog/${blogs[0].id}`}>
              <button
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300
                   bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                   border border-white/10 hover:border-cyan-500/40
                   text-gray-300 hover:text-cyan-400
                   hover:shadow-[0_0_24px_rgba(6,182,212,0.15)]"
              >
                View All Articles →
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
