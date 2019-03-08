import React from 'react';
import Tone from 'tone';
import Track from './Track/Track'

class Sequencer extends React.Component {

    constructor(props) {
        super(props);
        this.createRows = this.createRows.bind(this);
        Tone.Transport.loop = true;
        Tone.Transport.loopEnd  = (this.props.steps * Tone.Transport.PPQ) + 'i';
        this.sounds = this.props.sounds;

        //only used for melody engine
        this.scale = this.props.scale;
    }

    createRows(numRows, numSteps) {
        let rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(<Track key={"track"+i}
                               ref={"track"+i}
                               trackNumber={i}
                               steps={numSteps}
                               allowManualEdit={this.props.allowManualEdit}
                               subDivision={"16n"}
                               instrument={this.props.instrument}
                               instrumentProps={this.props.instrumentProps}
                               note={this.scale[i]}
                               pattern={this.props.pattern[i]}
            />);
        }
        return rows;
    }

    render() {
        return (
        <>
            <p>{this.props.name}</p>
            {this.createRows(this.props.numRows, this.props.steps)}
        </>
        );
    }

}

export default Sequencer;