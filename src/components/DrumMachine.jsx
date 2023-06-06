import React, { useEffect } from 'react';
import DrumPadOne from './DrumPadOne';


const DrumMachine = () => {
    const str = [null, 'Heater 1', 'Heater 2', 'Heater 3', 'Heater 4', 'Clap', 'Open HH', 'Kick n\' Hat', 'Kick', 'Close HH']

    // Add the event listener for key press
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        const drumPad = document.getElementById(key);
        if (drumPad) {
            const audio = drumPad.querySelector('audio');
            const audioId = audio.getAttribute('id');
            if (audio) {
                audio.currentTime = 0;
                audio.play();
                updateDisplay(str[audioId]);
            }
        }
    };

    const updateDisplay = (text) => {
        const display = document.getElementById('display');
        if (display) {
            display.innerText = text;
        }
    };

    return (
        <div id="drum-machine" className="container">
            <div className='d-flex flex-column align-items-center'>
            <div className='d-flex align-items-center justify-content-center bg-white p-2 border rounded-3 pad-display' id='string-display'>
                <div>  <i className="bi bi-music-note">&nbsp;</i></div>
                <div id="display"></div>
            </div>
            <div className='pad-bank' id="pad">
                <DrumPadOne/>
            </div>
        </div></div>
    );
};


export default DrumMachine;
