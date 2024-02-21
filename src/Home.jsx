import React from 'react'
// import { AppContext } from './Context'
// import { useContext } from 'react'
import { useGlobalContext} from './Context';
import Movies from './Movies';
import Search from './Search';

 function Home() {
  // const name=useGlobalContext();
  return (
    <div>
     <Search/>
     <Movies/>
    </div>
  )
};

export default Home;
