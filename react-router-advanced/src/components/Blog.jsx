import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    { id: 1, title: "First Blog Post" },
    { id: 2, title: "Second Blog Post" },
    { id: 3, title: "Third Blog Post" },
  ];

  return (
    <div style={{margin:"50px"}}>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
