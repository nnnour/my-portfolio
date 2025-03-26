import React from "react";
import '../assets/styles/Project.scss';

// Import project images
import tictactoeImg from '../assets/images/tictactoe.png';
import id8Img from '../assets/images/ID8.png';
import onsitePaymentsImg from '../assets/images/onsitepayments.png';
import pacmanImg from '../assets/images/pacman.png';
import weenImg from '../assets/images/ween.png';
import weatherappImg from '../assets/images/weatherapp.png';
import todoappImg from '../assets/images/todoapp.png';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            {/* AI-Focused Projects Section */}
            <div className="category-heading ai-category">
                <span>AI & Intelligent Systems Projects</span>
            </div>

            <div className="projects-grid">
                {/* Ween - AI-Powered Foodie Assistant */}
                <div className="project-card">
                    <div className="project-image">
                        <a href="https://ween-app-52e3257a2c22.herokuapp.com/success" target="_blank" rel="noreferrer">
                            <img src={weenImg} alt="Ween: AI Foodie Assistant" />
                            <div className="project-overlay">
                                <div className="view-project">View Project</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Ween: AI Foodie Assistant</h3>
                        <p>Developed Ween, an AI-powered chatbot that provides personalized restaurant recommendations based on user preferences and location. Built with React, OpenAI GPT API, Supabase, and Google Maps API for real-time location-based results.</p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>OpenAI</span>
                            <span>Supabase</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/nnnour/Ween" target="_blank" rel="noreferrer" className="project-link github">
                                GitHub
                            </a>
                            <a href="https://www.loom.com/share/129ee352b8374a1dbfecb91cb4d247e5" target="_blank" rel="noreferrer" className="project-link demo">
                                Watch Demo
                            </a>
                            <a href="https://ween-app-52e3257a2c22.herokuapp.com/success" target="_blank" rel="noreferrer" className="project-link website">
                                Live Website
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tic-Tac-Toe AI */}
                <div className="project-card">
                    <div className="project-image">
                        <a href="https://github.com/nnnour/AI_TicTacToe_4x4" target="_blank" rel="noreferrer">
                            <img src={tictactoeImg} alt="Tic-Tac-Toe AI" />
                            <div className="project-overlay">
                                <div className="view-project">View Project</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Tic-Tac-Toe AI</h3>
                        <p>Created an advanced 4x4 Tic-Tac-Toe AI opponent with Minimax and Alpha-Beta Pruning. Features different difficulty levels, interactive AI decision tracking, and performance visualization. Built for my CS152 AI course.</p>
                        <div className="project-tech">
                            <span>JavaScript</span>
                            <span>Alpha-Beta Pruning</span>
                            <span>AI Algorithms</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/nnnour/AI_TicTacToe_4x4" target="_blank" rel="noreferrer" className="project-link github">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Traditional Software Engineering Projects Section */}
            <div className="category-heading web-category">
                <span>Web & Software Development Projects</span>
            </div>

            <div className="projects-grid">
                {/* Onsite Payments */}
                <div className="project-card">
                    <div className="project-image">
                        <a href="https://onsite-payments.com" target="_blank" rel="noreferrer">
                            <img src={onsitePaymentsImg} alt="Onsite Payments" />
                            <div className="project-overlay">
                                <div className="view-project">View Project</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Onsite Payments</h3>
                        <p>Designed and developed the official website for Onsite Payments, a startup providing seamless payment management solutions. Built with React, Tailwind CSS, and integrated with Getform.io for secure form handling. Deployed on GoDaddy.</p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>Tailwind CSS</span>
                            <span>Getform.io</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/nnnour/onsite-payments-website" target="_blank" rel="noreferrer" className="project-link github">
                                GitHub
                            </a>
                            <a href="https://onsite-payments.com" target="_blank" rel="noreferrer" className="project-link website">
                                Live Website
                            </a>
                        </div>
                    </div>
                </div>

                {/* ID8 */}
                <div className="project-card">
                    <div className="project-image">
                        <a href="https://github.com/ucey-star/ID8" target="_blank" rel="noreferrer">
                            <img src={id8Img} alt="ID8" />
                            <div className="project-overlay">
                                <div className="view-project">View Project</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>ID8</h3>
                        <p>Led the development of ID8, a platform enabling students to share capstone project ideas and receive feedback through a points-based system. Contributed as a frontend developer and conducted financial projections to support the business model.</p>
                        <div className="project-tech">
                            <span>Frontend Development</span>
                            <span>Business Analysis</span>
                            <span>User Engagement</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/ucey-star/ID8" target="_blank" rel="noreferrer" className="project-link github">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Weather App */}
                <div className="project-card">
                    <div className="project-image">
                        <a href="https://github.com/nnnour/weather-app" target="_blank" rel="noreferrer">
                            <img src={weatherappImg} alt="Weather App" />
                            <div className="project-overlay">
                                <div className="view-project">View Project</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Weather App</h3>
                        <p>Developed a real-time weather application that provides current weather data for any location. Built with React JS, Axios, and the OpenWeatherMap API. Features include location search, detailed weather information, and a responsive design.</p>
                        <div className="project-tech">
                            <span>React JS</span>
                            <span>Axios</span>
                            <span>OpenWeatherMap API</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/nnnour/weather-app" target="_blank" rel="noreferrer" className="project-link github">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                 

                {/* Todo App */}
                <div className="project-card">
                    <div className="project-image">
                        <a href="https://github.com/nnnour/To_do_App" target="_blank" rel="noreferrer">
                            <img src={todoappImg} alt="Todo App" />
                            <div className="project-overlay">
                                <div className="view-project">View Project</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Todo App</h3>
                        <p>Created a full-stack todo app with hierarchical task organization. Built with Flask, SQLAlchemy, and Semantic UI. Features include secure user registration, task status tracking, hierarchical task organization with subtasks, and nested sub-subtasks, and responsive design.</p>
                        <div className="project-tech">
                            <span>Flask</span>
                            <span>SQLAlchemy</span>
                            <span>Semantic UI</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/nnnour/To_do_App" target="_blank" rel="noreferrer" className="project-link github">
                                GitHub
                            </a>
                            <a href="https://www.loom.com/share/f9a243ded85a4c5f839672afc68b5172?sid=adbb5566-76fe-45f5-a1e1-9e4ea93d6583" target="_blank" rel="noreferrer" className="project-link demo">
                                Watch Demo
                            </a>
                        
                        </div>
                    </div>
                </div>

                {/* Pacman Game */}
                <div className="project-card">
                    <div className="project-image">
                        <a href="https://github.com/nnnour/Pacman" target="_blank" rel="noreferrer">
                            <img src={pacmanImg} alt="Pacman Game" />
                            <div className="project-overlay">
                                <div className="view-project">View Project</div>
                            </div>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Pacman Game</h3>
                        <p>Recreated the classic Pacman arcade game using HTML, CSS, and JavaScript. Features include intelligent ghost AI, score tracking, and smooth animations for an engaging gameplay experience.</p>
                        <div className="project-tech">
                            <span>JavaScript</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/nnnour/Pacman" target="_blank" rel="noreferrer" className="project-link github">
                                GitHub
                            </a>
                    
                        
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default Project;
