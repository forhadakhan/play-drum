import React, { useEffect, useState } from 'react';


const DrumMachine = () => {
    const str1 = [null, 'Heater 1', 'Heater 2', 'Heater 3', 'Heater 4', 'Clap', 'Open HH', 'Kick n\' Hat', 'Kick', 'Close HH']
    const str2 = [null, 'Chord 1', 'Chord 2', 'Chord 3', 'Shaker', 'Open HH', 'Closed HH', 'Punchy Kick', 'Side Stick', 'Snare']
    const audio1 = [null, 'Heater-1', 'Heater-2', 'Heater-3', 'Heater-4_1', 'Heater-6', 'Dsc_Oh', 'Kick_n_Hat', 'RP4_KICK_1', 'Cev_H2']
    const audio2 = [null, 'Chord_1', 'Chord_2', 'Chord_3', 'Give_us_a_light', 'Dry_Ohh', 'Bld_H1', 'punchy_kick_1', 'side_stick_1', 'Brk_Snr']

    const [powerSwitchChecked, setPowerSwitchChecked] = useState(true);
    const [bankSwitchChecked, setBankSwitchChecked] = useState(false);
    const [volume, setVolume] = useState(40);

    window.onload = function () {
        // Default audio volume set to 40 when the page load   
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach((audio) => {
            audio.volume = 40 / 100;
        });
        // ...
    };


    const handlePowerChange = () => {
        setPowerSwitchChecked(!powerSwitchChecked);
        if (powerSwitchChecked) {
            updateDisplay('Power Off')
        } else {
            updateDisplay('Power On')
        }
    };

    const handleBankChange = () => {
        setBankSwitchChecked(!bankSwitchChecked);
        if (bankSwitchChecked) {
            updateDisplay('Bank Down')
        } else {
            updateDisplay('Bank Up')
        }
    };

    // the event listener for key press
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [powerSwitchChecked, bankSwitchChecked]);

    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if (powerSwitchChecked) {
            const drumPad = document.getElementById(key);
            if (drumPad) {
                const audio = drumPad.querySelector('audio');
                const audioId = audio.getAttribute('id');
                console.log(audioId);
                if (audio) {
                    audio.currentTime = 0;
                    audio.play();
                    updateDisplay(bankSwitchChecked ? str2[audioId] : str1[audioId]);
                }
            } else if (key === 'P') {
                handlePowerChange();
            } else if (key === 'B') {
                handleBankChange();
            }
        } else if (key === 'P') {
            handlePowerChange();
        };
    };


    const audioSource = (key) => {
        const audioName = bankSwitchChecked ? audio2[key] : audio1[key];
        let baseURL = window.location.href.replace(/\/$/, '');
        const isLocalhost = baseURL.includes('localhost');
        if (isLocalhost) {
            return `${baseURL}/src/assets/audio/${audioName}.mp3`;
        } else {
            baseURL = `https://s3.amazonaws.com/freecodecamp/drums`;
            return `${baseURL}/${audioName}.mp3`;
        }
    };



    const handleClick = (event) => {
        if (powerSwitchChecked) {
            const audio = event.currentTarget.querySelector('audio');
            if (audio) {
                audio.currentTime = 0;
                audio.play();
                const audioId = audio.getAttribute('id');
                updateDisplay(bankSwitchChecked ? str2[audioId] : str1[audioId]);
            }
        }
    };


    const updateDisplay = (text) => {
        const display = document.getElementById('display');
        if (display) {
            display.innerText = text;
        }
    };


    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach((audio) => {
            audio.volume = newVolume / 100;
        });
        setVolume(newVolume);
        updateDisplay(`Volume: ${Math.round(newVolume)}`);
    };

    return (
        <div id="drum-machine" className="container">
            <div className='d-flex flex-column align-items-center mb-5'>
                <div className="container pad-display" id="switched">
                    <div className="row">
                        <div className="col bg-white m-4 p-2 border rounded-3">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="power" checked={powerSwitchChecked} onChange={handlePowerChange} />
                                <label className="form-check-label" htmlFor="power">
                                    Power
                                </label>
                            </div>
                        </div>
                        <div className="col bg-white m-4 p-2 border rounded-3">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="bank" checked={bankSwitchChecked} onChange={handleBankChange} />
                                <label className="form-check-label" htmlFor="bank">
                                    Bank
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-3 align-items-center justify-content-center bg-white p-2 border rounded-3 pad-display' id='string-display'>
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
                <div className='container bg-info mt-2 pt-1 border rounded-3 pad-display' id='volume'>
                    <input type="range" min='0' max='100' name="volume" className="form-range" id="volume-control" value={volume} onChange={handleVolumeChange} />
                </div>
            </div></div>
    );
};


export default DrumMachine;
