import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projekte</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Pixel Post</h2></a>
                <p>Teamprojekt aus dem Kurs IoT im Rahmen des Forschungsprojekts VREUNDE, Gewinner des Publikumpreises bei der ITERATION 3.0 in Zusammenarbeit mit Daniel Busch und Marc Unkelbach</p>
            </div>
            
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Buchstaben- und Ziffern-Erkenner -- Jetzt trainieren!</h2></a>
                <p>Im Kurs Applied AI haben wir in Teams ein Perceptron-Modell mit TensorFlow.js programmiert, welches zunächst mit MNIST-Daten trainiert wird um Zahlen und Ziffern erkennen zu können.  Auch dieses Projekt wurde zusammen mit Daniel Busch und Marc Unkelbach verwirklicht.</p>
            </div>

            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Winterschool 2024 Glasgow Scool of Arts</h2></a>
                <p>Eine Woche an der Küste Schottlands in Forress zusammen mit Student*innen aus Europa und Asien. Eine einzigartige Erfahrung.</p>
            </div>

            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Resistor Twister - hear them scream and watch their heart beat</h2></a>
                <p>In Zusammenarbeit mit Fabian Faedrich ist in dem Kurs Open Design ein außergewöhnliches Artefakt entstanden, indem der Mensch für die Maschine arbeiten muss. Was sonst haben ein Powerball, ein Plattenspieler und ein Oszilloskop gemeinsam?</p>
            </div>
            
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>FeelMyMOODs</h2></a>
                <p>Das Project Make umfasste den Bau eines Prototypen eines smarten Ringes zusammen mit Maja Kawecki und Sarah Busiah. Die Idee stammt ebenfalls aus dem Kurs Iot und in den Kursen zuvor wurde auch ein Businessplan gemeinsam am Beispiel dieses Projekts erstellt. Es ist im Rahmen des Forschungsprojekts VREUNDE entstanden und Maja Kawecki wird es wohl im Bachelor weiterverfolgen. </p>
            </div>

            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>CupCup - schreiende Tassenschublade</h2></a>
                <p>Nachdem im Project Make I eine Küche gebaut wurde, wird nun für diese im Project Make II eine Tassenschublade entwickelt. Zusammen mit Nutsa Nadirashvili und Dominik Bourgeois wurde Gelerntes aus Kursen, wie z.B Client Server Basics, Advanced Clients und Rapid Prototyping vertieft, verknüpft und in die Praxis gebracht.</p>
            </div>

            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Die Eierlegende Wollmilchküche</h2></a>
                <p>Project Make I wurde in Zusammenarbeit mit Studio C.A.R.E durchgeführt. Fünf Student*innen entwickelten eine mobile mudulare Küche von Scratch an. Ideenfindung, Pretotyping über 3D Modelle bis hin zum fertigen nutzbaren Produkt. Küche neu gedacht.</p>
            </div>

            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Gestaltungsportfolio Generative Gestaltung</h2></a>
                <p>Ein Kurs aus dem ersten Semester lehrte uns verschiedene gestalterische Methoden</p>
            </div>
        </div>
    </div>
    );
}

export default Project;