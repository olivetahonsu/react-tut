import React from 'react'
import Mylist from './Mylist';
import useFetch from './useFetch';

function Home() {



const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
     
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <Mylist blogs={blogs}  title="All Blogs!"/> }

    </div>
  )
}

export default Home;