import React from 'react'
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';
import Header from '../Components/Header';

const Home = () => {
  return (
    <div>
        <Header />
        <div>
            <Blogs />
            <Pagination />
        </div>
    </div>
  )
}

export default Home