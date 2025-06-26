import { useParams } from "react-router-dom";
import useFetch from "../useHook/useFetch";
import LoadingPage from './loading';
import { useNavigate } from 'react-router-dom';



const BlogDetails = () => {

    const deleteBlog = function(id){
    fetch('https://my-json-server.typicode.com/hanynan8/blog-server/blogs/' + id ,{
    method: "DELETE",
  }).then(()=>{
    console.log("Delete Is Done")
    navigate("/")
  })
  }

  const navigate = useNavigate()

  let { id } = useParams()
  let {data: blog, loading, error} = useFetch('https://my-json-server.typicode.com/hanynan8/blog-server/blogs/' + id)
  return (
    <div className="blog-details">
      { loading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by: <span style={
                {
                  fontSize: "15px",
                  fontWeight: "bold"
                }
              }>{blog.auther}</span></p>
          <div>{ blog.body }</div>
          <button onClick={() => {deleteBlog(blog.id)}}>delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;

