import React from 'react';
import Tone from 'tone';

class Sequencer extends React.Component {

    constructor(props) {
        super(props);
        this.togglePlayback = this.togglePlayback.bind(this);
        this.state = {
            isPlaying: false
        };
    }

    togglePlayback() {
        //Play all tracks
        console.log("loaded:  " + this.x.buffer.loaded);
        this.setState((state) => {
            return {
                isPlaying: !state.isPlaying
            }
        });

        //Manage playing sequence

        let context = this;

        if (this.state.isPlaying) {
            Tone.Transport.cancel();
        } else {
            Tone.Transport.scheduleRepeat(function (time) {
                context.x.start();
            }, "8n");
        }

        Tone.Transport.toggle();
    }

    render() {
        return (
        <>
            <p> sequencer </p>
        </>
        );
    }

}

export default Sequencer;