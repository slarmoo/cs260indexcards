import React from 'react';
import './app.css';

export default function App() {
    return (
        <div className="body bg-dark text-light">
            <header>
                <h1>CS 260 Index Cards</h1>
                <h2>Create</h2>
            </header>
            
            <main>
                <nav>
                    <p id="usernameDisplay">username</p>
                    <ul>
                        <li>
                            <a href="./index.html">login</a>
                        </li>
                        <li>
                            <a href="./signup.html">sign up</a>
                        </li>
                        <li>
                            <a href="./practice.html">practice</a>
                        </li>
                    </ul>
                </nav>

                <div id="content">
                </div>

            </main>

            <footer>
                <p>By slarmoo</p>
                <a href="https://github.com/slarmoo/cs260indexcards">source</a>
            </footer>
        </div>
    );
  }