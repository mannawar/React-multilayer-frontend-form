import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    status: {
      danger: orange[500],
    },
  });

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                        <AppBar position="static">
                        <Toolbar variant="dense">
                            Enter User Details 
                            </Toolbar>
                            </AppBar>
                        <TextField 
                            placeholder="Enter your First Name"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            margin="normal"
                            fullWidth
                        />
                        <br/>
                        <TextField 
                            placeholder="Enter your Last Name"
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            margin="normal"
                            fullWidth
                            
                        />
                        <br/>
                        <TextField 
                            placeholder="Enter your Email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            margin="normal"
                            fullWidth
                        />
                        <br/>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Continue</ Button>
                </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}


export default FormUserDetails;
