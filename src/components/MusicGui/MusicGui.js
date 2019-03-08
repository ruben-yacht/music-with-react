import React from 'react';
import Tone from 'tone';
import Sequencer from './Sequencer/Sequencer'
import MusicScript from '../../user/MusicScript'

class MusicGui extends React.Component {

    constructor(props) {
        super(props);
        Tone.Buffer.on('load', () => {console.log("All Tone buffers loaded")});
        this.togglePlayback = this.togglePlayback.bind(this);
        this.getLongestRow = this.getLongestRow.bind(this);
        this.musicScript = new MusicScript();

        Tone.Transport.bpm.value = this.musicScript.tempo;
    }

    togglePlayback() {
        Tone.Transport.toggle();
        this.forceUpdate();
    }

    getLongestRow(patterns) {
        let l = 0;
        for(let i = 0; i < patterns.length; i++) {
            if (patterns[i].length > l) l = patterns[i].length;
        }
        return l;
    }

    render() {
        return (
        <>
            <h2>Music with Tone.js</h2>

            <button onClick={this.togglePlayback}>{
                Tone.Transport.state === "started" ? "stop" : "play"
            }</button>
            <Sequencer ref="sequencer1"
                       name={this.musicScript.title}
                       numRows={this.musicScript.pattern.length}
                       pattern={this.musicScript.pattern}
                       steps={this.getLongestRow(this.musicScript.pattern)}
                       allowManualEdit={false}
                       instrument={this.musicScript.instrument}
                       instrumentProps={this.musicScript.instrumentProps}
                       scale={this.musicScript.scale}/>
        </>
        )
    }
}

export default MusicGui;