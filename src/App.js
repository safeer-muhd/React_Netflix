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
      <RowPost url={original} title='Netflix Originals' />
      <RowPost url={upcoming} title='UpComming' isSmall />
      <RowPost url={topRated} title='Top Rated' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />

    </div>
  );
}

export default App;
