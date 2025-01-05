import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "JavaScript",
    "p5.js",
    "HTML",
    "CSS",
    "MQTT",
    "Arduino",
    "Python",
    "Docker",
    "Git",
    "TDD",
    "Computanional Thinking",
    "Agile Team Coding",
];

const labelsSecond = [
    "UI/UX",
    "Interaction Design",
    "Design Systems",
    "CAD",
    "3D Druck",
    "Prototyping",
    "Design Thinking",
    "Problemlöser*in",
    "Teamwork",
];

const labelsThird = [
    "Löten",
    "Automatisierung",
    "SPS",
    "Robotik",
    "Ausbildung",
    "Platinen Design",
    "Fehleranalyse",
    "Schaltpläne",
    "Elektronik",
    "IoT",
    "Handwerk",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Coding</h3>
                    <p>Während der Ausbildung und vor Allem während des Studiums habe ich einiges im Bereich Programmierung gelernt. Angefangen mit einem Textadventure bis hin zur Programmierung einer AI die Ziffern und Buchstaben erlernen kann. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPalette} size="3x"/>
                    <h3>Design</h3>
                    <p>Design umfasst nicht nur die Gestaltung von Hardware, sondern auch die Entwicklung von Software und die Zusammenarbeit zwischen verschiedenen Abteilungen und Fachgebieten.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="3x"/>
                    <h3>Physical Computing</h3>
                    <p>Durch meine Ausbildung und Arbeit in der Industrie habe ich gelernt, elektronische Geräte zu analysieren und zu reparieren. Ich arbeite auch gerne handwerklich und setze praktische Lösungen um.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
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