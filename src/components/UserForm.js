import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState ({
            step: step + 1
        });
    }

    //proceed to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState ({
            step: step - 1
        });
    }

    //handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {

        const {step} = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values  = {firstName, lastName, email, occupation, city, bio}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    values = {values}/>
                )
            case 2: 
                return (
                    <FormPersonalDetails 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = { this.prevStep }
                    values = {values}/>
                )
            case 3: 
                return (
                    <Confirm 
                    nextStep = {this.nextStep}
                    prevStep = { this.prevStep }
                    values = {values}/>
                )
            case 4: 
                    return <Success />
            default:
                (console.log('This is multi step form with react')) 
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
