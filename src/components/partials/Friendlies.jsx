import React, { useState, useEffect } from 'react';
import './Friendlies.css';
import axios from 'axios';

function Friendlies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: 'https://www.scorebat.com/video-api/v3/feed/?token=MTcwNzExXzE3Mjc4NTk5MzZfYzRkOTEyMDM3NTE2MWY0MzNhNDM5ZGY0YzRmYjAzMjAyNzY3ODFiNg=='
    })
    .then(res => {
      const filteredData = res.data.response.filter(item => 
        item.competition.toLowerCase().includes("england")
      );
      setData(filteredData);
    })
    .catch(e => console.log(e));
  }, []);

  return (
    <div className='body-container'>
      {data.map(item => (
        <div className="itemDiv" key={item.title} onClick={()=>window.open(item.matchviewUrl)}>
          <div className="itemTitle">
            <h4 className='text-bold text-white'>{item.title}</h4>
          </div>
          <div className="itemImage">
            <img src={item.thumbnail} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Friendlies;

