import React from 'react'
import './About.css'
import Navbar from './Navbar'

function About() {
  return (
  <div className='about'>

    <h1><i className="ri-football-line text-white mr-2">TheScoreHub</i></h1>
    <h2>The ultimate website for football and sports enthusiasts to stay updated on the latest football league matches, scores, and news. Whether you’re following your favorite team or catching up on international tournaments, Football Mate has everything you need. You can also watch highlights and replays by simply clicking on the match of your choice, ensuring you never miss a moment of the action.</h2>
    <h2>Built using ReactJS and CSS, with features such as Axios to handle real-time API interactions.</h2>
    <h2>Created by <strong>Vikas Prasad</strong>.</h2>
    <section id="contact">
      <h1 class="title">GET IN TOUCH</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:vikasicem123@gmail.com">vikasicem123@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
            alt="LinkedIn icon"
            class="icon contact-icon linkedin-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
