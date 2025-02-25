import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "Node.js",
    "Express.js",
    "Firebase",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Google Cloud",
    "GoDaddy",
    "Linux",
    "CI/CD Pipelines",
    "REST APIs",
    "GraphQL",
    "Nginx",
    "Vercel",
    "Netlify",
    "Supabase",
    "OAuth",
    "JWT Authentication"
];

const labelsThird = [
    "AI Algorithms",
    "Machine Learning",
    "NLP",
    "OpenAI GPT API",
    "Google Maps API",
    "Matplotlib",
    "Pandas",
    "Scikit-Learn",
    "PySWIP",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "LlamaIndex",
    "Hugging Face Transformers",
    "Computer Vision",
    "Recommendation Systems"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have experience designing, developing, and deploying scalable web applications with a focus on seamless user experience and maintainability. I work across the full stack using modern technologies such as React, Next.js, Flask, and Firebase, ensuring efficient and high-performing applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Backend & Cloud Development</h3>
                    <p>From API design to cloud deployments, I specialize in building robust and scalable backend systems that power data-driven applications. With experience in Flask, Supabase, AWS, and Firebase, I create secure and optimized solutions that integrate seamlessly with frontend applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Intelligent Systems</h3>
                    <p>I have a strong background in artificial intelligence and machine learning, with hands-on experience building intelligent systems that enhance decision-making. From developing AI-powered restaurant recommendation engines to optimizing game AI using alpha-beta pruning, I apply AI and ML techniques to create impactful solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
