import './App.css';
import React, { useState } from 'react';
import Card from './components/Card';

function App() {

  const [filter, setFilter] = useState('all')

  return (

    <div className='page-wrapper'>
      <div className='hero-image'></div>
      <div className="container">

        <div className='container-text'>
          <h2>Our Collection</h2>
          <p>Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.</p>
        </div>

        <div className='container-button'>
          <button onClick={() => setFilter('all')}>All products</button>
          <button onClick={() => setFilter('available')}>Available now</button>
        </div>

        <div className="card-grid">
          <Card filter={filter} />
        </div>
      </div>
    </div >
  );
}

export default App;
