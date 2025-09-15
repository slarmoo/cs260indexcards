import React from 'react';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Practice } from './practice/practice';
import { Create } from './create/create';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body">
                <header>
                    <h1>CS 260 Index Cards</h1>
                    <h2></h2>
                </header>

                <main>
                    <nav>
                        <p id="usernameDisplay">username</p>
                        <ul>
                            <li>
                                <NavLink to="">login</NavLink>
                            </li>
                            <li>
                                <NavLink to="signup">sign up</NavLink>
                            </li>
                            <li>
                                <NavLink to="practice">practice</NavLink>
                            </li>
                            <li>
                                <NavLink to="create">create</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path='/' element={<Login />} exact />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/practice' element={<Practice />} />
                        <Route path='/create' element={<Create />} />
                        {/* <Route path='*' element={<NotFound />} /> */}
                    </Routes>

                </main>

                <footer>
                    <p>By slarmoo</p>
                    <a href="https://github.com/slarmoo/cs260indexcards">source</a>
                </footer>
            </div>
        </BrowserRouter>
    );
  }