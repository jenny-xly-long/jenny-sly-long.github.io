import React, { Component, PropTypes } from 'react';

class Button extends Component {
static propTypes ={
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
        name:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
        message:PropTypes.string.isRequired,}
    ).isRequired
}
    constructor(props) {
        super(props);
        this.state ={
            isClicked: false,
        };
        this.logContactDataToConsole = this.logContactDataToConsole.bind(this);
    }
logContactDataToConsole(event) {
    console.log('Form Values', this.props.formValues);
}
render() {
    // const recipient ='mailto:erehabadvancement@gmail.com';
    // const subject ='?subject=Interested';
    // const body ='&body=${this.props.formValues.message}'

    return(
        <button className="send"
        disabled={this.state.isClicked}
        onClick={this.logContactDataToConsole}
        >
        {/* href={'${recipient}${subject}${body}'} */}
        Send
    </button>
    );
    }
}
export default Button;