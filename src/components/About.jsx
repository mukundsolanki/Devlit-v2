import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Header/>

      <div className="about-center">
      <div className="background-text">ABOUT</div>
        <h1 className="about-heading">About DevLit</h1>
        <p className="about-description">
          DevLit is an online IDE created by Mukund Solanki.  
        </p>
        <p className="about-description">
          With DevLit, you can write HTML, CSS, and JavaScript code, and see the live output right away.
        </p>
        <p className="about-description">
          Connect with me on GitHub to explore more of this projects and contributions.
        </p>
        <a
          className="github-link"
          href="https://github.com/mukundsolanki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Mukund Solanki's GitHub
        </a>
      </div>

      <Footer/>

    </div>
  )
}
