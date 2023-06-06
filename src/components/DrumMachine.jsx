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

    const audio1 = [null, 'audio-q', 'audio-w', 'audio-e', 'audio-a', 'audio-s', 'audio-d', 'audio-z', 'audio-x', 'audio-c']
    const audio2 = [null, 'Cloud_1', 'Cloud_2', 'Cloud_3', 'Give_us_a_light', 'Dry_Ohh', 'Bld_H1', 'punchy_kick_1', 'side_stick_1', 'Brk_Snr']

    const audioSource = (key) => {
        return `src/assets/audio/${audio1[key]}.mp3`;
    };

    const handleClick = (event) => {
        const audio = event.currentTarget.querySelector('audio');
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            const audioId = audio.getAttribute('id');
            updateDisplay(str[audioId]);
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
                    <div className="row">
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="Q">
                            <span className='fs-1'>Q</span>
                            <audio className="clip" id="1" src={audioSource(1)}></audio>
                        </div>
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="W">
                            <span className='fs-1'>W</span>
                            <audio className="clip" id="2" src={audioSource(2)}></audio>
                        </div>
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="E">
                            <span className='fs-1'>E</span>
                            <audio className="clip" id="3" src={audioSource(3)}></audio>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="A">
                            <span className='fs-1'>A</span>
                            <audio className="clip" id="4" src={audioSource(4)}></audio>
                        </div>
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="S">
                            <span className='fs-1'>S</span>
                            <audio className="clip" id="5" src={audioSource(5)}></audio>
                        </div>
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="D">
                            <span className='fs-1'>D</span>
                            <audio className="clip" id="6" src={audioSource(6)}></audio>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="Z">
                            <span className='fs-1'>Z</span>
                            <audio className="clip" id="7" src={audioSource(7)}></audio>
                        </div>
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="X">
                            <span className='fs-1'>X</span>
                            <audio className="clip" id="8" src={audioSource(8)}></audio>
                        </div>
                        <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="C">
                            <span className='fs-1'>C</span>
                            <audio className="clip" id="9" src={audioSource(9)}></audio>
                        </div>
                    </div>
                </div>
            </div></div>
    );
};


export default DrumMachine;
