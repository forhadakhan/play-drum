const handleClick = (event) => {
    const audio = event.target.querySelector('audio');
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
};

const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const drumPad = document.getElementById(key);
    if (drumPad) {
        const audio = drumPad.querySelector('audio');
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }
};