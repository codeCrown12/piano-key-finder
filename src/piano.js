import React from "react";
var Soundfont = require('soundfont-player')
var ac = new AudioContext()
function playSound(gain, sound, note){
    if (ac.state === 'suspended') {
        ac.resume();
    }
    Soundfont.instrument(ac, sound).then(function (piano) {
        piano.play(note, 0, {gain: gain, sustain: 0, duration: 1, attack: 0})
    })
}

function Piano(props){
    return(
        <div className="container mt-3">
            <div className="piano">
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'C4')}>C4</div>
            <div className="key black "onClick={() => playSound(props.gain, props.sound, 'C#4')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'D4')}>D4</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'D#4')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'E4')}>E4</div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'F4')}>F4</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'F#4')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'G4')}>G4</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'G#4')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'A4')}>A4</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'A#4')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'B4')}>B4</div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'C5')}>C5</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'C#5')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'D5')}>D5</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'D#5')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'E5')}>E5</div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'F5')}>F5</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'F#5')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'G5')}>G5</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'G#5')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'A5')}>A5</div>
            <div className="key black" onClick={() => playSound(props.gain, props.sound, 'A#5')}></div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'B5')}>B5</div>
            <div className="key white" onClick={() => playSound(props.gain, props.sound, 'C6')}>C6</div>
        </div> 
        </div>  
    )
}
export default Piano