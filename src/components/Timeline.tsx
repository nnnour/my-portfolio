import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Onsite Payments | San Francisco, CA</h4>
            <p>
              Full-stack Web Development, UX/UI Design, Frontend & Backend Development, Business Branding
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Math Instructor and Mentor</h3>
            <h4 className="vertical-timeline-element-subtitle">DesCartes Learning Club | San Francisco, CA</h4>
            <p>
              Advanced Mathematics Instruction, Small-Group Teaching, Curriculum Customization, Critical Thinking Development, STEM Education
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 – Nov 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Corporate VC & Business Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">HP | US Remote</h4>
            <p>
              Market Research, Business Model Analysis, Data Analysis, Industry Trend Mapping, Financial Projections
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 – Apr 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">University Admissions Tech Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Minerva University | San Francisco, CA & Hyderabad, India</h4>
            <p>
              Application Review, Frontend UI Enhancements, System Optimization
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 – July 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Sciences Curriculum Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Minerva University | San Francisco, CA</h4>
            <p>
              Curriculum Development, Python-based Materials, Overleaf LaTex Integration, Course Optimization
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 – July 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">HUGO BOSS | US Remote</h4>
            <p>
              Market Analysis, Consumer Research, Competitive Strategy, Data-driven Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2021 – Apr 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SWE Algorithm Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Kakao Ventures | Seoul, South Korea</h4>
            <p>
              NLP Analysis, Topic Modeling, Social Media Sentiment Analysis, Genetic Algorithms, Data Optimization
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;