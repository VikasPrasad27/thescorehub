import React, { useState ,  useEffect} from 'react'
import Navbar from './partials/Navbar';
import Hero from './partials/Hero';
import './Home.css'
function Home() {
  document.title = 'TheScoreHub'

  return (
    <div className='w-screen h-screen  home'>
      <Navbar />
      <hr />
      <div className='information'>
      <div className=' w-full '>
        {/* <div className="title">
        <i class="ri-football-line text-white mr-2"> ONE FOOTBALL</i>
        </div> */}
        <div className="description">
        <h2>ONE STOP FOOTBALL SCORES ,HIGHLIGHTS & SPORTS NEWS WEBSITE.</h2>
        <h2>FOR WORLD FAMOUS LEAGUES.</h2>
        <hr />
        </div>
        
        <div className="maininfo">
        <div className="indianleague">
            <img src="https://th.bing.com/th/id/OIP.4c-v3CgvVrsGN8x1sSr1CgAAAA?rs=1&pid=ImgDetMain?im=FaceCrop,algorithm=dnn,width=806,height=605" alt="isl" />
            <p>WATCH SCORES AND HIGHLIGHTS OF ONGOING <strong>ASIAN CHAMPIONS LEAGUES</strong> MATCHES ..</p>
        </div>
        <div className="championsleague">
            <p>WATCH SCORES AND HIGLIGHTS OF ONGOING <strong>UEFA CHAMPIONS LEAGUE</strong> MATCHES.. </p>
            <img src="https://fiu-original.b-cdn.net/fontsinuse.com/use-images/N187/187444/187444.png?filename=uefa-champions-league-logo.png" alt="ucl" />
        </div>
        <div className="europaleague">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UT-DpxIvq2VvAUEoXqzmsiqCA3nXVfNnSQ&s" alt="uel" />
             <p>WATCH SCORES AND HIGHLIGHTS OF ONGOING <strong>EUROPA CONFERENCE LEAGUE </strong> MATCHES..</p>
        </div>
        <div className="clubmatches">
            <p>WATCH SCORES AND HIGHLIGHTS OF ONGOING LEAGUES LIKE <strong>ISL,LALIGA , SERIA A ,PREMIER LEAGUE,LEAGUE 1 etc..</strong>..</p>
            <img src="https://logowik.com/content/uploads/images/premier-league3330.jpg" alt="friend" />
        </div>
        </div>
        
        </div>
        
      </div>
    </div>
  )
}

export default Home;