import React from 'react';


const DrumPadOne = () => {
    
    const handleClick = (event) => {
        const audio = event.currentTarget.querySelector('audio');
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            const audioId = audio.getAttribute('id');
            updateDisplay(str[audioId]);
        }
    };

    return (
        <div>
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
    );
}

export default DrumPadOne;