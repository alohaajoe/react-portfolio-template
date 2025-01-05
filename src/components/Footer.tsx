import React, { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import '../assets/styles/Impressum.scss'
import Impressum from "./Impressum";

function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);

  const toggleImpressum = () => {
    setShowImpressum(!showImpressum);
  };
  return (
    <footer>
      <div>
      <a href="https://www.linkedin.com/in/joelina-haseloh-540698269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      
      <p><a onClick={toggleImpressum}>{showImpressum ? 'Impressum schließen' : 'Impressum'}</a></p>
      {showImpressum && (
      <div>
      <Impressum />
      <p><a onClick={toggleImpressum}>Impressum schließen</a></p>
      </div>
      )}
    </footer>
  );
}

export default Footer;