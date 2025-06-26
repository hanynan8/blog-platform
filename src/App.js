import Navbar from './component/navbar';
import Home from './view/Home';
import { Route, Routes } from 'react-router-dom'; // ✅ بدون BrowserRouter هنا
import Create from './view/Create';
import BlogDetails from './view/BlogDetaails';
import ErrorPage from './view/Error404';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
