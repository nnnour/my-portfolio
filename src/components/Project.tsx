import React from "react";
import '../assets/styles/Project.scss';

// Import project images
import tictactoeImg from '../assets/images/tictactoe.png';
import id8Img from '../assets/images/ID8.png';
import onsitePaymentsImg from '../assets/images/onsitepayments.png';
import pacmanImg from '../assets/images/pacman.png';
import weenImg from '../assets/images/ween.png';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                {/* Onsite Payments */}
                <div className="project">
                    <a href="https://onsite-payments.com" target="_blank" rel="noreferrer">
                        <img src={onsitePaymentsImg} className="zoom" alt="Onsite Payments" width="100%" />
                    </a>
                    <a href="https://onsite-payments.com" target="_blank" rel="noreferrer">
                        <h2>Onsite Payments</h2>
                    </a>
                    <p>Designed and developed the official website for Onsite Payments, a startup providing seamless payment management solutions. Built with React, Tailwind CSS, and integrated with Getform.io for secure form handling. Deployed on GoDaddy.</p>
                </div>

                {/* ID8 */}
                <div className="project">
                    <a href="https://github.com/your-username/ID8" target="_blank" rel="noreferrer">
                        <img src={id8Img} className="zoom" alt="ID8" width="100%" />
                    </a>
                    <a href="https://github.com/your-username/ID8" target="_blank" rel="noreferrer">
                        <h2>ID8</h2>
                    </a>
                    <p>Led the development of ID8, a platform enabling students to share capstone project ideas and receive feedback through a points-based system. Contributed as a frontend developer and conducted financial projections to support the business model.</p>
                </div>

                {/* Ween - AI-Powered Foodie Assistant */}
                <div className="project">
                    <a href="https://github.com/your-username/Ween" target="_blank" rel="noreferrer">
                        <img src={weenImg} className="zoom" alt="Ween" width="100%" />
                    </a>
                    <a href="https://github.com/your-username/Ween" target="_blank" rel="noreferrer">
                        <h2>Ween: AI Foodie Assistant</h2>
                    </a>
                    <p>Developed Ween, an AI-powered chatbot that provides personalized restaurant recommendations based on user preferences and location. Built with React, OpenAI GPT API, Supabase, and Google Maps API for real-time location-based results.</p>
                </div>

                {/* Tic-Tac-Toe AI */}
                <div className="project">
                    <a href="https://github.com/nnnour/AI_TicTacToe_4x4" target="_blank" rel="noreferrer">
                        <img src={tictactoeImg} className="zoom" alt="Tic-Tac-Toe AI" width="100%" />
                    </a>
                    <a href="https://github.com/nnnour/AI_TicTacToe_4x4" target="_blank" rel="noreferrer">
                        <h2>Tic-Tac-Toe AI</h2>
                    </a>
                    <p>Created an advanced 4x4 Tic-Tac-Toe AI opponent with Minimax and Alpha-Beta Pruning. Features different difficulty levels, interactive AI decision tracking, and performance visualization. Built for my CS152 AI course.</p>
                </div>

                {/* Pacman Game */}
                <div className="project">
                    <a href="https://github.com/your-username/pacman-game" target="_blank" rel="noreferrer">
                        <img src={pacmanImg} className="zoom" alt="Pacman Game" width="100%" />
                    </a>
                    <a href="https://github.com/your-username/pacman-game" target="_blank" rel="noreferrer">
                        <h2>Pacman Game</h2>
                    </a>
                    <p>Recreated the classic Pacman arcade game using HTML, CSS, and JavaScript. Features include intelligent ghost AI, power-ups, score tracking, and smooth animations for an engaging gameplay experience.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;
