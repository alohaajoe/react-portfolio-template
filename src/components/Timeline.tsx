import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Was bisher geschah</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - heute"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Studium <a className="vertical-timeline-link" href="https://www.coco.study" target="_blank">Code & Context</a></h3>
            <h4 className="vertical-timeline-element-subtitle">TH Köln</h4>
            <p>
              Im Spannungsfeld zwischen Coding und Design.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Studentische Hilfskraft</h3>
            <h4 className="vertical-timeline-element-subtitle"><a className="vertical-timeline-link" href="https://www.coco.study" target="_blank">Code & Context</a></h4>
            <p>
              Betreuung der Werkstatt, Unterstützung bei Projekten.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Elektroniker*in für Betriebstechnik</h3>
            <h4 className="vertical-timeline-element-subtitle"><a className="vertical-timeline-link" href="https://www.altendorfgroup.com/" target="_blank">Altendorf GmbH Minden</a></h4>
            <p>
              Schaltschrankverdrahtung des damals neuen HAND GUARD Systems, Fehlerbehebung und Betriebsmittel Instandhaltung.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Crashkurs IHK-Ausbildung der Ausbilder*innen</h3>
            <h4 className="vertical-timeline-element-subtitle">Minden</h4>
            <p>
              Berufs- und Arbeitspädagogische Eignung (Ausbilderschein)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Servicetechniker*in im Außendienst</h3>
            <h4 className="vertical-timeline-element-subtitle"><a className="vertical-timeline-link" href="https://new.abb.com/de" target="_blank">ABB Automation GmbH</a> Hannover</h4>
            <p>
              Wartung und Indastandhaltung größerer Industrieanlagen, Disposition, Kundenbetreuung.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Auslandspraktikum</h3>
            <h4 className="vertical-timeline-element-subtitle"><a className="vertical-timeline-link" href="https://new.abb.com/products/robotics/sv" target="_blank">ABB Robotics</a> Västerås, Schweden</h4>
            <p>
              Roboter haben mich schon immer fasziniert. In der Abteilung System Testing habe ich die Möglichkeit bekommen, mal etwas hinter die Kulissen zu schauen.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Ausbildung Elektroniker*in für Geräte & Systeme</h3>
            <h4 className="vertical-timeline-element-subtitle"><a className="vertical-timeline-link" href="https://new.abb.com/de" target="_blank">ABB Automation Producs GmbH</a> Minden</h4>
            <p>
              Ausgelernte Elektrofachkraft mit Schwerpunkt Automatisierungstechnik.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Abitur (G8)</h3>
            <h4 className="vertical-timeline-element-subtitle">Gymnasium der Verbundschule Hille</h4>
            <p>
              Allgemeine Hochschulreife, Latinum, „First Certificate in English“ (FCE) der University of Cambridge.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1998"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGenderless} />}
          >
            <h3 className="vertical-timeline-element-title">Moin</h3>
            <h4 className="vertical-timeline-element-subtitle">Minden</h4>
            <p>
              Viel Gebrabbel und ein paar Windeln.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;