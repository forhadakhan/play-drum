import { useState } from 'react';
import DrumMachine from './components/DrumMachine';
import redDrumSvg from './assets/blue-drum-logo.svg';

function App() {

    return (
        <div className='bg-light bg-gradient min-height-full'>
            <div className="container py-4 px-3 mx-auto">
                <div className="d-flex align-items-center justify-content-center bg-white m-4 p-2 border rounded-3">
                    <img src={redDrumSvg} alt="Red Drum" className="me-2" style={{ width: '40px', height: '40px' }} />
                    <h1 className="h3 m-0 text-primary">Play Drum</h1>
                </div>
                <DrumMachine />
                <div className="d-flex align-items-center justify-content-center bg-white mt-5 border rounded-3">
                    <p className='font-monospace pt-3 px-4 text-secondary'><a href='https://github.com/forhadakhan/' target='_blank'>@forhadakhan</a> coded it. You may find the code <a href='https://github.com/forhadakhan/play-drum' target='_blank'>repository here</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default App
