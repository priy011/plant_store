import blogData from "../blog/blog.json";
import "./blog.css";

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <div className="blog-subtitle">Our Blog</div>
        <div className="blog-header-content">
          <span className="blog-title">Your Guide to Plant Care</span>
          <span><button className="read-more-btn">Read More</button></span>
        </div>
      </div>

      <div className="blog-grid">
            {blogData.map((item) => (
                <div className="blog-card" key={item.id}>
                  <img src={item.image} alt={item.title} />

                    <div className="blog-info">
                        <div className="meta-row">
                        <span>{item.date}</span> • <span>{item.readTime}</span>
                        </div>

                        <h3 className="blog-heading">{item.title}</h3>
                        <p className="desc">{item.description}</p>

                        <div className="blog-footer-line"></div>

                        <div className="blog-footer">
                        <div className="icons">
                            <span className="view-count"><img src="src/assets/eye.svg" alt="view-count" /></span>
                            <span className="comment"><img src="src/assets/comment.svg" alt="comment"/></span>
                        </div>
                        <div className="like"><img src="src/assets/wishlist-blog.svg" alt="wishlist"/></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}
