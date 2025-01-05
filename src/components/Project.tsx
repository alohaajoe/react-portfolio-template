import React from "react";
import mock03 from '../assets/images/mock03.jpg';
import mock04 from '../assets/images/mock04.jpg';
import mock05 from '../assets/images/mock05.jpeg';
import mock06 from '../assets/images/mock06.jpg';
import mock07 from '../assets/images/mock07.jpg';
import mock08 from '../assets/images/mock08.jpg';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projekte</h1>
        <div className="projects-grid">

            <div className="project">
                <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Pixel Post</h2>
                <p>Teamprojekt aus dem Kurs IoT im Rahmen des Forschungsprojekts <a href="https://vreun.de/" target="_blanket">VREUNDE</a>, Gewinner des Publikumpreises bei der ITERATION 3.0 in Zusammenarbeit mit <a href="https://danielbusch.de/" target="_blank">Daniel Busch</a> und Marc Unkelbach.
                Gedanke bei PixelPost ist es, trotz des bewusst eingeschränkten Kommunikationsumfangs, kleine Kontaktpunkte und kurze Nachrichten, egal ob tiefgründig oder oberflächlich, zwischen Freund*innen im Alltag auf Distanz zu setzen, welche man bei unmittelbarem Kontakt ohne Distanz bspw. beim kurzen gemeinsamen Kaffee in der WG-Küche auch hätte.
                </p>
            </div>
            
            <div className="project">
                <a className="no-icon" href="https://students.pages.coco.study/ss22/aai/team3/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://students.pages.coco.study/ss22/aai/team3/" target="_blank" rel="noreferrer">Buchstaben- und Ziffern-Erkenner -- Jetzt trainieren!</a></h2>
                <p>Im Kurs Applied AI haben wir in Teams ein Perceptron-Modell mit <a href="https://www.tensorflow.org/js" target="_blank">TensorFlow.js</a> programmiert, welches zunächst mit MNIST-Daten trainiert wird um Zahlen und Ziffern erkennen zu können.  Auch dieses Projekt wurde zusammen mit <a href="https://danielbusch.de/" target="_blank">Daniel Busch</a> und Marc Unkelbach verwirklicht.</p>
            </div>

            <div className="project">
                <a className="no-icon" href="https://sit.gsa.ac.uk/winter-school" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://sit.gsa.ac.uk/winter-school" target="_blank" rel="noreferrer">Winterschool 2024 Glasgow School of Arts</a></h2>
                <p>Eine Woche an der Küste Schottlands in Forress zusammen mit Student*innen aus Europa und Asien. Eine einzigartige Erfahrung.
                Thema „Soil" - „Boden" und die Frage, was wir von ihm lernen können.
                </p>
            </div>

            <div className="project">
                <a className="no-icon" href="https://joe-30.gitbook.io/open-design" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://joe-30.gitbook.io/open-design" target="_blank" rel="noreferrer">Resistor Twister - hear them scream and watch their heart beat</a></h2>
                <p>In Zusammenarbeit mit Fabian Faedrich ist in dem Kurs Open Design ein außergewöhnliches Artefakt entstanden, indem der Mensch für die Maschine arbeiten muss. Was sonst haben ein Powerball, ein Plattenspieler und ein Oszilloskop gemeinsam?</p>
            </div>
            
            <div className="project">
                <a className="no-icon" href="https://youtu.be/14XJ3Iw63Uw" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://youtu.be/14XJ3Iw63Uw" target="_blank" rel="noreferrer">FeelMyMOODs</a></h2>
                <p> Im Rahmen des Projects Launch im 5. Fachsemester entstand ein Prototyp der Produktidee FeelMyMOODs. FeelMyMOODs ist ein smarter Ring, der in Form von Ringpaaren wie Freundschaftsringe gestaltet ist. Mit einer einfachen Berührung kann die LED im Ring in eine Vielzahl von Farben eingestellt werden. Ein Doppelklick bestätigt die Auswahl und überträgt sie an den anderen Ring. So soll eine einfache und intuitive Kommunikation zwischen zwei Personen ermöglicht werden, die sich nahe stehen, aber räumlich getrennt sind. </p>
            </div>

            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Die Eierlegende Wollmilchküche</h2>
                <p>Project Make I wurde in Zusammenarbeit mit <a href="https://studio-c-a-r-e.com/" target="_blank">Studio C.A.R.E</a> durchgeführt. Fünf Student*innen entwickelten eine mobile modulare Küche von Grund auf an. Ideenfindung, Pretotyping über 3D Modelle bis hin zum fertigen, nutzbaren Produkt. Küche neu gedacht!</p>
            </div>

            <div className="project">
                <a className="no-icon" href="https://youtu.be/Eikem5Jtn0U" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://youtu.be/Eikem5Jtn0U" target="_blank" rel="noreferrer">CupCup - schreiende Tassenschublade</a></h2>
                <p>Nachdem im Project Make I eine Küche gebaut wurde, wird nun für diese im Project Make II eine Tassenschublade entwickelt. Ziel war es, Gelerntes aus Kursen, wie z.B. Client Server Basics, Advanced Clients und Rapid Prototyping zu vertiefen, verknüpfen und in die Praxis umzusetzen. Einmal Full Stack mit Mikrocontroller bitte.</p>
            </div>

            <div className="project">
                <a className="no-icon" href="https://jhaseloh.pages.coco.study/gestaltungsportfolio-generative-gestaltung-ws-202122/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2><a href="https://jhaseloh.pages.coco.study/gestaltungsportfolio-generative-gestaltung-ws-202122/" target="_blank" rel="noreferrer">Gestaltungsportfolio Generative Gestaltung</a></h2>
                <p>Ein Kurs aus den ersten Semestern lehrte uns klassischen Grundlagen der visuellen Gestaltung: Punkt, Linie, Fläche, Farbe und Form. Dazu kommt dann noch etwas Typographie, Animation und Interaktion dazu. Gearbeitet haben wir mit <a href="https://p5js.org/" target="_blank">p5.js</a>.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;