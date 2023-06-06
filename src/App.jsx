import { useState } from 'react';
import redDrumSvg from './assets/blue-drum-logo.svg';

function App() {

    return (
        <div className='bg-light bg-gradient min-height-full'>
            <div className="container py-4 px-3 mx-auto">
                <div className="d-flex align-items-center justify-content-center bg-white m-4 p-2 border rounded-3">
                    <img src={redDrumSvg} alt="Red Drum" className="me-2" style={{ width: '40px', height: '40px' }} />
                    <h1 className="h3 m-0 text-primary">Play Drum</h1>
                </div>
            </div>
        </div>
    )
}

export default App
