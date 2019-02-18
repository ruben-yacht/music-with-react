import React from "react";
import Tone from 'tone';

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.sound = new Tone.Player('./sound/Kick 1.wav').toMaster();
    }

    render() {
        return (
        <>
        </>
        );
    }
}

export default Track;
