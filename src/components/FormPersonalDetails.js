import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    status: {
      danger: orange[500],
    },
  });

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <>
                    <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                    >
                    <AppBar title="Enter Personal Details" />
                    <TextField 
                        placeholder="Enter your Occupation"
                        label="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <TextField 
                        placeholder="Enter your City"
                        label="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <TextField 
                        placeholder="Enter your Bio"
                        label="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                        >Continue</Button>

                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.back}
                        >Back</Button>

                    </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}


export default FormPersonalDetails;
