import React, { useEffect } from 'react';

const DrumMachine = () => {

    const handleClick = (event) => {
        const audio = event.target.querySelector('audio');
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    };



    return (
        <div id="drum-machine" className="container">
            <div id="display"></div>
            <div className="row">
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="Q">
                    <i class="bi bi-play">Q</i>
                    <audio className="clip" src="src\assets\audio\audio-a.mp3"></audio>
                </div>
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="W">
                    <i class="bi bi-play">W</i>
                    <audio className="clip btn" src="src\assets\audio\audio-w.mp3"></audio>
                </div>
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="E">
                    <i class="bi bi-play">E</i>
                    <audio className="clip" id="E" src="src\assets\audio\audio-e.mp3"></audio>
                </div>
            </div>
            <div className="row">
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="A">
                    <i class="bi bi-play">A</i>
                    <audio className="clip" src="src\assets\audio\audio-a.mp3"></audio>
                </div>
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="S">
                    <i class="bi bi-play">S</i>
                    <audio className="clip" src="src\assets\audio\audio-s.mp3"></audio>
                </div>
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="D">
                    <i class="bi bi-play">D</i>
                    <audio className="clip" src="src\assets\audio\audio-d.mp3"></audio>
                </div>
            </div>
            <div className="row">
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="Z">
                    <i class="bi bi-play">Z</i>
                    <audio className="clip" src="src\assets\audio\audio-z.mp3"></audio>
                </div>
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="X">
                    <i class="bi bi-play">X</i>
                    <audio className="clip" src="src\assets\audio\audio-x.mp3"></audio>
                </div>
                <div className="col drum-pad btn btn-primary m-1" onClick={handleClick} id="C">
                    <i class="bi bi-play">C</i>
                    <audio className="clip" src="src\assets\audio\audio-c.mp3"></audio>
                </div>
            </div>
        </div>
    );
};


export default DrumMachine;
