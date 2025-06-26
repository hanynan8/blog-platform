// import { useEffect } from 'react';
import Navbar from './component/navbar';
import Home from './view/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Create  from "./view/Create";
import  BlogDetails  from "./view/BlogDetaails";
import ErrorPage from './view/Error404';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/create' element={<Create />} /> 
            <Route path='/blog/:id' element={<BlogDetails />} /> 
            <Route path='*' element={<ErrorPage />} /> 
          </Routes>
        </div>
        
      </div>
    </Router>

  );
}

export default App;
