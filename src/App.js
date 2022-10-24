import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import {original,action,topRated, upcoming, comedy, horror, romance, documentaries} from './urls' 
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={original} title='NETFLIX ORIGINALS' />
      <RowPost url={topRated} title='Top Rated' isSmall />
      <RowPost url={upcoming} title='Upcomming' isSmall />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />
      <RowPost url={horror} title='Horror Movies' isSmall />
      <RowPost url={romance} title='Romance Movies' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />

    </div>
  );
}

export default App;
