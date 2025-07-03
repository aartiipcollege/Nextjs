import Link from 'next/link';
const BlogCard = ({ blog }) => {
  if (!blog) return null;

  const { title, slug, coverImage } = blog;
  const imageUrl = `http://localhost:1337${coverImage?.url}`;

  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <Link href={`/blog/${slug}`}>
        <img
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </div>
  );
};

export default BlogCard;
