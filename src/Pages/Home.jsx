import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero_content_wrapper">
            <img src="/src/assets/hero.jpg" alt="Hero image" width={200} height={200} />
            <span className="label">Mofeleng Shadow Mokgope</span>
            <h1 className="heading">I build seamless web experiences that give your brand the trust and authority it needs to dominate.</h1>
            <p className="paragraph">
            My name is Mofeleng Shadow Mokgope, I am a fullstack web developer and a final year BCom student. I help brands build websites that make them memorable.
            </p>
            <div className="buttons">
              <Link className='btn btn_wider btn_accent btn_rounded'>My Github</Link>
              <Link className='btn btn_wider btn_black btn_rounded'>My Projects</Link>
            </div>
          </div>
        </div>
      </section>

      
    
    </>
  )
}

export default Home