import React from 'react';
import Tone from 'tone';
import Sequencer from './Sequencer/Sequencer'

class MusicGui extends React.Component {

    constructor(props) {
        super(props);
        Tone.Buffer.on('load', () => {console.log("All Tone buffers loaded")});
        this.state = {
                isPlaying: false
            }
    }

    togglePlayback() {
        //every sequencer.play;
        console.log("Music GUI: toggle playback");
    }

    render() {
        return (
        <>
            <p>Music app</p>
            <button onClick={this.togglePlayback}>{this.state.isPlaying ? "stop" : "play"}</button>
            <Sequencer/>
        </>
        )
    }
}

export default MusicGui;