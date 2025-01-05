import React, { useState } from 'react';


const Impressum: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <footer>
                <button onClick={toggleVisibility}>Impressum</button>
            </footer>
            {isVisible && (
                <div className="impressum-content">
                    <h2>Impressum</h2>
                    <p>Hier steht das Impressum...</p>
                    <button onClick={toggleVisibility}>Schließen</button>
                </div>
            )}
        </div>
    );
};

export default Impressum;