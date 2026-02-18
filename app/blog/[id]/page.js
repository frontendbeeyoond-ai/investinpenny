'use client';
import { useState, useEffect } from 'react';
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share,
  MoreHorizontal,
  Twitter,
  Facebook,
  Linkedin,
  Link2,
  ChevronUp,
  Menu,
  X,
  ArrowLeft,
  TrendingUp,
  AlertTriangle,
  BarChart3
} from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import api from '../../lib/helper';
import { useParams } from 'next/navigation';

export default function Blog() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingSingle, setLoadingSingle] = useState(true);

  // ── Scroll progress ──────────────────────────────────────────────────────────

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      setLoadingSingle(true)
      setLoading(true)

      // Fetch both at same time (FASTER)
      const [singleResponse, allResponse] = await Promise.all([
        api.get(`/get-blog/?id=${id}`),
        api.get(`/get-blog/`)
      ])

      const blogData = Array.isArray(singleResponse.data)
        ? singleResponse.data[0]
        : singleResponse.data

      setSingleBlog(blogData)

      const relatedBlogs = Array.isArray(allResponse.data)
        ? allResponse.data
            .filter(blog => String(blog.id) !== String(id))
            .slice(0, 5)
        : []

      setBlogList(relatedBlogs)

    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoadingSingle(false)
      setLoading(false)
    }
  }

  if (id) {
    fetchBlogs()
  }
}, [id])


  // ── Guards (all hooks are above this point) ───────────────────────────────────
  if (loadingSingle) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <p className="text-gray-400">Loading article...</p>
      </div>
    );
  }

if (!singleBlog) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-center px-4">
      <AlertTriangle className="w-16 h-16 text-red-500 mb-6" />
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Oops! Article not found
      </h1>
      <p className="text-gray-400 mb-6">
        We couldn’t find the article you were looking for. It may have been removed or the URL is incorrect.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
      >
        Go Back Home
      </a>
      {/* <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble-404-01.png"
        alt="Not found illustration"
        className="mt-10 max-w-xs sm:max-w-sm"
      /> */}
    </div>
  );
}
const article = {
 
  likes: 2847,
  comments: 156,
  category: 'Risk Analysis'
};

  // Derive a display date from whichever field exists
  const displayDate = singleBlog.blog_date
    ?? (singleBlog.created_date
      ? new Date(singleBlog.created_date).toLocaleDateString("en-US", {
          month: "long", day: "numeric", year: "numeric",
        })
      : null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">

      {/* ── Background glows ─────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[150px]" />
      </div>

     

      <Navigation />

      {/* ── Main layout ──────────────────────────────────────────────────────── */}
      <main className="pt-24 relative z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">

            {/* ── Article column ─────────────────────────────────────────────── */}
            
            <div  className="lg:col-span-8 xl:col-span-7 xl:col-start-2">

              {/* Back link */}
              <div className="max-w-[820px] mx-auto py-4">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </a>
              </div>
               
              {/* Title */}
             <header className="max-w-[820px] mx-auto mb-8 flex flex-col sm:flex-col gap-4">
  <div className="flex items-center justify-between">
    <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white leading-tight">
      {singleBlog.blog_title || "-"} 
    </h1>
    
    {displayDate && (
      <span className="inline-flex items-center px-4 py-1.5 text-cyan-400 text-xs font-medium rounded-full">
                    {displayDate || "-"}
                  </span>
    )}
  </div>

  {/* Subtitle */}
  <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mt-4">
    {singleBlog.blog_sub_title || '-'}
  </p>
              </header>

              {/* Featured image */}
              {singleBlog.blog_img && (
                <figure className="mb-10">
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* <img
                      src={singleBlog.blog_img}
                      alt={singleBlog.blog_title}
                      className="w-full object-cover max-h-[480px]"
                    /> */}
                  {singleBlog?.blog_img && (
                    <img
                      src={singleBlog.blog_img}
                      alt={singleBlog.blog_title || "Blog image"}
                      className="w-full object-cover max-h-[480px]"
                      loading="lazy"
                    />
                  )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  </div>
                </figure>
              )}

              {/* Blog content — Quill outputs raw HTML, render it safely */}
              <div
                className="max-w-[820px] mx-auto quill-blog-content text-[18px] leading-[1.8] text-white"
                dangerouslySetInnerHTML={{ __html: singleBlog.blog_content ?? '' }}
              />

              {/* Author row */}
           
               <div className="flex items-center justify-between py-8 border-t border-white/10 mt-8">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all
                         ${isLiked ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' : 'bg-white/5 text-gray-400 border border-white/10 hover:border-pink-500/30 hover:text-pink-400'}`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />

                      <span className="font-medium">{isLiked ? article.likes + 1 : article.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">{article.comments}</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2.5 rounded-full transition-all ${isBookmarked ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-500 hover:bg-white/5 hover:text-cyan-400'}`}
                    >
                      <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2.5 rounded-full text-gray-500 hover:bg-white/5 hover:text-cyan-400 transition-all">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Author Bio Card */}
              
            </div>

            {/* ── Sidebar ────────────────────────────────────────────────────── */}
            <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-[#1a1a24] to-[#12121a] rounded-2xl border border-white/10 p-6">
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
                    Related Articles
                  </h3>

                  {loading ? (
                    <p className="text-gray-400 text-sm">Loading...</p>
                  ) : blogList.length > 0 ? (
                    <div className="space-y-4">
                      {blogList.map((post) => (
                        <a
                          key={post.id}
                          href={`/blog/${post.id}`}
                          className="flex gap-3 group"
                        >
                          {post.blog_img && (
                            <img
                              src={post.blog_img}
                              alt={post.blog_title}
                              className="w-20 h-14 object-cover rounded-lg flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
                              {post.blog_title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {post.blog_date ??
                                new Date(post.created_date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">No related articles found.</p>
                  )}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />

     

      {/* Quill content styles — strips editor chrome, styles the HTML it outputs */}
      <style jsx global>{`
 .quill-blog-content, 
.quill-blog-content * {
  color: #ffffff !important;
}

/* Editor container */
.quill-blog-content .ql-editor {
  padding: 0;
  font-size: 18px;      /* base font size */
  line-height: 1.8;     /* readable line height */
  border: none;
  outline: none;
  color: #ffffff;
  font-family: inherit;
}

/* Paragraphs */
.quill-blog-content p {
  margin-bottom: 1.5rem;
  font-size: 18px;
  line-height: 1.8;
}

/* Headings with responsive sizes */
.quill-blog-content h1 {
  color: #ffffff !important;
  font-size: 2.25rem;  /* 36px */
  font-weight: 700;
  margin: 2rem 0 1rem;
}

.quill-blog-content h2 {
  color: #ffffff !important;
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  margin: 1.75rem 0 1rem;
}

.quill-blog-content h3 {
  color: #ffffff !important;
  font-size: 1.5rem;   /* 24px */
  font-weight: 700;
  margin: 1.5rem 0 0.75rem;
}

/* Lists */
.quill-blog-content ul,
.quill-blog-content ol {
  color: #ffffff !important;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Links */
.quill-blog-content a {
  color: #22d3ee;
  text-decoration: underline;
}

/* Strong/bold text */
.quill-blog-content strong {
  color: #ffffff !important;
  font-weight: 700;
}

/* Blockquotes */
.quill-blog-content blockquote {
  border-left: 3px solid #22d3ee;
  padding-left: 1rem;
  color: #ffffff !important;
  margin: 1.5rem 0;
  font-style: italic;
}

/* Images */
.quill-blog-content img {
  max-width: 100%;
  border-radius: 0.75rem;
  margin: 1.5rem 0;
}


@media (max-width: 768px) {

  .quill-blog-content .ql-editor,
  .quill-blog-content p {
    font-size: 14px;
    line-height: 1.7;
  }

  .quill-blog-content h1 {
    font-size: 1.75rem;   /* 28px */
  }

  .quill-blog-content h2 {
    font-size: 1.5rem;    /* 24px */
  }

  .quill-blog-content h3 {
    font-size: 1.25rem;   /* 20px */
  }

  .quill-blog-content ul,
  .quill-blog-content ol {
    padding-left: 1.25rem;
  }

  .quill-blog-content blockquote {
    padding-left: 0.75rem;
  }

`}</style>

    </div>
  );
}