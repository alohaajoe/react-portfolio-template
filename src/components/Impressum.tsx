import React, { useState } from 'react';

const Impressum = () => { 

    return (
        <div>
                <div className="impressum-content">
                    <h2>Impressum</h2>
                    <h4>Angaben gemäß § 5 TMG:</h4>
                    <p>Joelina M. Haseloh <br />
                    Dreikönigenstr. 37 <br />
                    50997 Köln</p>

                    <h4>Kontakt: </h4>
                    <p>E-Mail: joe.haseloh@gmail.com</p>
                    <p>Verantwortlich für den Inhalt nach § 55 RStV ist Joelina M. Haseloh</p>
                    
                    <h5>Portfolio Design Template von <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></h5>
                </div>
        </div>
    );
};

export default Impressum;