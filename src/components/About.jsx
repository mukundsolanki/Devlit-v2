import React from 'react';
import Header from './Header';

export default function About() {
  return (
    <div>
      <Header/>

      <div className="about-center">
        <h1 className="about-heading">About DevLit</h1>
        <p className="about-description">
          DevLit is an online IDE created by Mukund Solanki. It provides a powerful and intuitive coding environment for developers to write, test, and collaborate on their code projects.
        </p>
        <p className="about-description">
          With DevLit, you can write HTML, CSS, and JavaScript code, and see the live output right away. It offers a range of features, including code highlighting, auto-completion, and code execution.
        </p>
        <p className="about-description">
          Connect with Mukund Solanki on GitHub to explore more of his projects and contributions in the coding community.
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

    </div>
  )
}
