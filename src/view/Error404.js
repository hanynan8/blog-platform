import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return ( 
    <div >
    <h1 className="Error" style={
      {
        color:"red"
      }
    }>
      Error404 
      <br />
    </h1>
    <br />
    <Link to="/">
      Page Is Not Found |
      Back To Home Page
    </Link>
    </div>
  );
}

export default ErrorPage ;