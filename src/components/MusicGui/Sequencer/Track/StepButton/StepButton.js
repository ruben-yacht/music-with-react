import React from "react";
class StepButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            velocity: this.props.velocity === undefined ? 0 : this.props.velocity
        };

        this.myToggle = React.createRef();
        this.toggleStep = this.toggleStep.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.getColorFromVelocity = this.getColorFromVelocity.bind(this);
        this.updateActiveStyle = this.updateActiveStyle.bind(this);
        this.updateActiveStep = this.updateActiveStep.bind(this);

        this.inactiveStyle =  {
            backgroundColor: '#f9fcfc',
            border: 'none',
            width: '38px',
            height: '38px',
            marginRight: '4px',
            marginBottom: '4px',
            outline: 'none'
        };

        this.activeHighlightStyle = {
            backgroundColor: '#000000',
            border: 'none',
            width: '38px',
            height: '38px',
            marginRight: '4px',
            marginBottom: '4px',
            outline: 'none'
        };

        this.inactiveHighlightStyle = {
            backgroundColor: '#484848',
            border: 'none',
            width: '38px',
            height: '38px',
            marginRight: '4px',
            marginBottom: '4px',
            outline: 'none'
        };
        this.updateActiveStyle();
    }

    componentDidMount() {
        // this.updateActiveStyle();
    }

    updateActiveStyle() {
        //accommodate for velocity changes. this should actually be bound to an event. onUpdateVelocity.
        this.activeStyle =  {
            backgroundColor: this.getColorFromVelocity(),
            border: 'none',
            outline: 'none',
            width: '38px',
            height: '38px',
            marginRight: '4px',
            marginBottom: '4px'
        };
    }

    updateActiveStep() {
        this.updateActiveStyle();
        this.forceUpdate();
        this.props.updateSequenceFromSteps();
    }

    getColorFromVelocity() {
        let red = 36;
        let green = 36;
        let blue = 54;
        let alpha = this.state.velocity; //don't use this.props.velocity, because state is better informed
        return 'rgba(' + red + ', ' + blue + ', ' + green + ', ' + alpha + ')';
    }

    toggleStep() {
        //randomize velocity on (manual) toggle of step
        let newVelocity = this.state.velocity > 0 ? 0 : Math.random();
        this.setState({velocity: newVelocity}, this.updateActiveStep);
    }

    onButtonClick() {
        if(this.props.allowManualEdit) {
            this.toggleStep();
        } else {
            console.log("Manual editing is disabled - use scripts to edit the sequencer!");
        }
    }

    render() {
        return (
            <>
                <button ref={this.myToggle}
                        onClick={this.onButtonClick}
                        style={this.state.velocity > 0 ? this.props.highlight ? this.activeHighlightStyle : this.activeStyle : this.props.highlight ? this.inactiveHighlightStyle : this.inactiveStyle}/>
            </>
        );
    }
}

export default StepButton