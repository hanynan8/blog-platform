import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  let [auther, setAuther] = useState('');
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  
  
  let handleSubmit = function(e){
    e.preventDefault()
    let blog = {title, body, auther}
    setLoading(true)
    setTimeout(()=>{
      
  fetch('https://my-json-server.typicode.com/hanynan8/blog-server/blogs' ,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog)
  }).then(()=>{
    console.log("Post Is Done")
    setLoading(false)
    navigate("/")
  })
    },500)
}













// تنسيقات لل فورم دي يامعلم ملكش دعوه بيها
  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={ handleSubmit }>
        <label> Blog title </label>
        <input
          type="text"
          required
          onChange={(e) => {setTitle(e.target.value);}}
        />
        <label> Blog body </label>
        <textarea
          required
          onChange={(e) => {setBody(e.target.value);}}
          ></textarea>
        <label> Blog Auther </label>
        <select
          required
          onChange={(e) => {setAuther(e.target.value);}}>
          <option value="mario">hany</option>
          <option value="yoshi">mario</option>
        </select>

        { !loading && <button type='submit'>Add Blog</button>}
        { loading && <button type='submit'>loading...</button>}
      </form>

    </div>
    );
  }

export default CreatePage;
