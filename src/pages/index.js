import BlogCard from '../components/BlogCard';
export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/blogs?populate=*");
  const json = await res.json();

  return {
    props: {
      blogs: json.data || [],
    },
  };
}

export default function Home({ blogs }) {
  return (
    <div className="home-container">
      <h1 className="home-title">Latest Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
