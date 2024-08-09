import React, { useState } from 'react'
import "./Home.css";
import Header from '../../components/header/Header';
import ExploreMenu from '../../components/exploreMenu/ExploreMenu';

function Home() {

  const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home 