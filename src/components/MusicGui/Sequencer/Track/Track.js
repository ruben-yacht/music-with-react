import React from "react";
import Tone from 'tone';
import StepButton from './StepButton/StepButton.js';

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.renderStepButtons = this.renderStepButtons.bind(this);
        this.updateSequenceFromSteps = this.updateSequenceFromSteps.bind(this);

        this.synth = new this.props.instrument(this.props.instrumentProps).toMaster();

        let sequenceSteps = new Array(this.props.steps);
        for(let i = 0; i < this.props.steps; i++) {
            sequenceSteps[i] = this.props.steps[i] === undefined ? 0 : this.props.steps[i];
        }

        this.sequence = new Tone.Sequence(this.onSequenceStep.bind(this), sequenceSteps, this.props.subDivision);
        this.state = {currentStep: -1};

        Tone.Transport.on("start", this.start.bind(this));
        Tone.Transport.on("stop", this.stop.bind(this));
    }

    start() {
        this.sequence.start();
    }

    stop() {
        this.sequence.stop();
        this.setState({
            currentStep: -1
        });
    }

    componentDidMount() {
        this.updateSequenceFromSteps();
    }

    updateSequenceFromSteps() {
        for(let i = 0; i < this.props.steps; i++) {
            this.sequence.at(i, this.refs["step"+i].state.velocity);
        }
    }

    onSequenceStep(time, vel) {
        this.setState({
            currentStep: Math.floor(this.sequence.progress * (this.props.steps))
        });
        if (vel > 0) {
            this.synth.triggerAttackRelease(this.props.note, "16n", time, vel);
            // this.sound.start(time, 0, "16n");
        }
    }

    renderStepButtons() {
        let steps = [];
        for(let i = 0; i < this.props.steps; i++) {
            steps.push(<StepButton key={"step"+i}
                                   ref={"step"+i}
                                   allowManualEdit={this.props.allowManualEdit}
                                   updateSequenceFromSteps={this.updateSequenceFromSteps}
                                   velocity={this.props.pattern[i]}
                                   highlight={this.state.currentStep === i}
            />);
        }
        return steps;
    }

    render() {
        return (
        <>
            {this.renderStepButtons()} <br/>
        </>
        );
    }
}

export default Track;
