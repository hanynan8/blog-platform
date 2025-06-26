import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {




  return (

    <div className="blogList">
      {blogs.map((e) => {
        return (
          
          <div className="blog-preview" key={e.id}>
            <Link to={`/blog/${e.id}`}>
              <h2>{e.title}</h2>
              <p>written by: <span style={
                {
                  fontSize: "15px",
                  fontWeight: "bold"
                }
              }>{e.auther}</span></p>
            </Link>

          </div>
        );
      })}

    </div>
  );
};

export default BlogList;
