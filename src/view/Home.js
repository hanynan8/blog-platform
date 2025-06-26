import { useEffect, useState } from 'react';
import BlogList from '../component/blogsComponent';
import LoadingPage from './loading';
import useFetch from '../useHook/useFetch';

const Home = () => {
  let { data, loading, error } = useFetch('http://localhost:3000/blogs');

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {loading && <LoadingPage />}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Home;
