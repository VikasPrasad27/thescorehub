import React, { useState, useEffect } from 'react';
import './Uel.css';
import axios from 'axios';
import Navbar from './Navbar';

function Uel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: 'https://www.scorebat.com/video-api/v3/feed/?token="YOUR_TOKEN"=='
    })
    .then(res => {
      const filteredData = res.data.response.filter(item => 
        item.competition.toLowerCase().includes("europa")
      );
      setData(filteredData);
    })
    .catch(e => console.log(e));
  }, []);

  return (
    <div className='body-container'>
      <Navbar/>
      {data.length > 0 ? (
        data.map(item => (
          <div className="itemDiv" key={item.title} onClick={() => window.open(item.matchviewUrl)}>
            <div className="itemTitle">
              <h4 className='text-bold text-white'>{item.title}</h4>
            </div>
            <div className="itemImage">
              <img src={item.thumbnail} alt={item.title} />
            </div>
          </div>
        ))
      ) : (
        <div className="no-matches">
          <h4>No recent matches</h4>
        </div>
      )}
    </div>
  );
}

export default Uel;
