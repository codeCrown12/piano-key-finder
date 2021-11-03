import React from "react";
import sounds from "./musyngkite.json"
import { useState } from "react";
import Piano from "./piano";



function Controls(){
    const [piano, setPiano] = useState({
        sound: "acoustic_grand_piano",
        gain: 30,
        sustain: 0,
      });
    
    const updateSound = (value) => {
        setPiano(previousState => {
            return { ...previousState, sound: value}
        });
    }
    const updateGain = (value) => {
        setPiano(previousState => {
            return { ...previousState, gain: value}
        });
    }
    return(
        <div>
            <div className="container mt-4">
        <div className="d-flex align-items-center justify-content-center">
            <div className="me-4">
                <p className="fw-bold text-center mb-1 p-color">SOUND</p>
                <select className="form-select" onChange = {(e)=> updateSound(e.target.value)}>
                    {sounds.map((item, i) =>(
                        <option key={i} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="me-4">
                <p className="fw-bold text-center mb-1 p-color">CONTROL VOLUME</p>
                <input type="range" onChange = {(e)=> updateGain(parseInt(e.target.value))} className="form-range" min="0" max="100"/>
            </div>
            {/* <div className="me-4">
                <p className="fw-bold text-center mb-1 p-color">PLAY ON HOVER</p>
                <div className="d-flex justify-content-center">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div> */}
            <div className="me-4">
                <p className="fw-bold text-center mb-1 p-color">CREATE CHORD</p>
                <div className="d-flex justify-content-center">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-sm btn-outline-secondary">Create chord 🎵</button>
                </div>
            </div>
            <div className="me-4">
                <p className="fw-bold text-center mb-1 p-color">SHARE 😁</p>
                <div className="d-flex justify-content-center">
                    <a className="btn btn-sm btn-outline-secondary" href="bobblenote.com">Share <i className="fas fa-paper-plane"></i></a>
                </div>
            </div>
        </div>
    </div>
        <Piano sound={piano.sound} gain={piano.gain} sustain={piano.sustain}/>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Chord 🎵</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                This feature is currently still under construction 🔨😁...
                It'll be available soon.
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        </div>  
    )
}

export default Controls