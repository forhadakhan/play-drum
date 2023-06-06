import React, { useEffect } from 'react';


const DrumMachine = () => {
    const str = [null, 'Heater 1', 'Heater 2', 'Heater 3', 'Heater 4', 'Clap', 'Open HH', 'Kick n\' Hat', 'Kick', 'Close HH']

    // Add the event listener for key press
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    const handleClick = (event) => {
        const audio = event.currentTarget.querySelector('audio');
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            const audioId = audio.getAttribute('id');
            updateDisplay(str[audioId]);
        }
    };


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
                <div>  <i class="bi bi-music-note">&nbsp;</i></div>
                <div id="display"></div>
            </div>
            <div className='pad-bank' id="pad">
                <div className="row">
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="Q">
                        <span className='fs-1'>Q</span>
                        <audio className="clip" id="1" src="src\assets\audio\audio-a.mp3"></audio>
                    </div>
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="W">
                        <span className='fs-1'>W</span>
                        <audio className="clip" id="2" src="src\assets\audio\audio-w.mp3"></audio>
                    </div>
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="E">
                        <span className='fs-1'>E</span>
                        <audio className="clip" id="3" src="src\assets\audio\audio-e.mp3"></audio>
                    </div>
                </div>
                <div className="row">
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="A">
                        <span className='fs-1'>A</span>
                        <audio className="clip" id="4" src="src\assets\audio\audio-a.mp3"></audio>
                    </div>
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="S">
                        <span className='fs-1'>S</span>
                        <audio className="clip" id="5" src="src\assets\audio\audio-s.mp3"></audio>
                    </div>
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="D">
                        <span className='fs-1'>D</span>
                        <audio className="clip" id="6" src="src\assets\audio\audio-d.mp3"></audio>
                    </div>
                </div>
                <div className="row">
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="Z">
                        <span className='fs-1'>Z</span>
                        <audio className="clip" id="7" src="src\assets\audio\audio-z.mp3"></audio>
                    </div>
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="X">
                        <span className='fs-1'>X</span>
                        <audio className="clip" id="8" src="src\assets\audio\audio-x.mp3"></audio>
                    </div>
                    <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="C">
                        <span className='fs-1'>C</span>
                        <audio className="clip" id="9" src="src\assets\audio\audio-c.mp3"></audio>
                    </div>
                </div>
            </div>
        </div></div>
    );
};


export default DrumMachine;
