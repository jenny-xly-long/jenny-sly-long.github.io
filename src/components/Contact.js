import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email:'',
            message:'',
        };
    this.updateField = this.updateField.bind(this);
}
    updateField(field, value){
        this.setState({[field]: value});
    };

render() {
    return (
        <div className="Contact">
            <Field 
            label="Name: "
            onChange={(event) => this.updateField('name', event.target.value)} 
            value={this.state.name} />
            <Field className="field"
            label="Email: "
            onChange={(event) => this.updateField('email', event.target.value)} 
            value={this.state.email} />
            <Field  className="field" 
            label="Message: "
            onChange={(event) => this.updateField('message', event.target.value)} 
            textarea={true}
            value={this.state.message} />
            <Button className="send"
            formValues={this.state} 
            email="erehabadvancement@gmail.com" />
        </div>
    );
}
}

export default Contact;