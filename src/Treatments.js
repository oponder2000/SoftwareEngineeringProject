import React from 'react';
import './Treatment.css';
import ItemCard from './ItemCard';

const Treatment = () => {
    return (
      <div className ='app'>
        <h1>Treatments</h1>
        <div className="container">
          <ItemCard name="Treatment 1" img="Treatment.jpg"/>
          <ItemCard name="Treatment 2" img="https://imageio.forbes.com/specials-images/imageserve/5fee143c98fb62888a89cfb9/0x0.jpg?format=jpg&width=1200"/>
          <ItemCard name="Treatment 3" img="https://cdn.mos.cms.futurecdn.net/wsMQtgGcwxhh487EBFbqLX.jpg"/>
          <ItemCard name="Treatment 4"/>
          <ItemCard name="Treatment 5"/>
          <ItemCard name="Treatment 6"/>
          <ItemCard name="Treatment 7"/>
          <ItemCard/>
        </div>

      </div>
    );
  }
   
export default Treatment;