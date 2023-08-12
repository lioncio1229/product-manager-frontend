import { useState, useEffect, useMemo } from "react";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Tooltip, Snackbar, Alert } from "@mui/material";
import {LoadingButton} from '@mui/lab';
import { Person, ArrowForward } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useSnackbar from "../../hooks/useSnackbar";
import ErrorText from "../../shared/ErrorText";

function Signup({loadingBarOpen})
{
    const navigate = useNavigate();
    const {openSnackbar, closeSnackbar, snackbarProps, message} = useSnackbar();
    const [loading, setLoading] = useState(false);
    
    const [data, setData] = useState({
        username: null,
        password: null,
        confirmPassword: null,
    })
    
    const [error, setError] = useState({
        username: {message: '', isError: true},
        password: {message: '', isError: true},
        confirmPassword: {message: '', isError: true},
    })

    const hasError = useMemo(() => Object.values(error).some(v => v.isError) ,[error]);

    const {handleSignup} = useAuth(() => {
        setLoading(false);
        navigate('/dashboard');
    }, (err) => {
        setLoading(false);
        openSnackbar(err.response.data.name || 'Signup Error');
    });

    const onHandleSignup = (e) => {
        setLoading(true);
        handleSignup(e);
    }

    const handleUsernameChange = (e) => {
        const {value: username} = e.target;
        setData((data) => ({...data, username}));

        let message = '', isError = false;

        if(username === '') 
        {
            isError = true;
            message = 'Username Required';
        }
        else if(!/^[a-zA-Z0-9_]+$/.test(username))
        {
            isError = true;
            message = 'Invalid character';
        }
        else if(username.length <= 3)
        {
            isError = true;
            message = 'Username length should be 4 and above'
        }

        setError((err) => ({...err, username: {message, isError}}));
    }

    const handlePasswordChange = (e) => {
        const {value, name} = e.target;
        setData((data) => ({...data, [name]: value}));
    }

    useEffect(() => {
        const {password, confirmPassword} = data;
        
        if(password === null && confirmPassword === null) return;
        const temp = {message: '', isError: false};
        let pError = {...temp}, cpError = {...temp};
        
        if(password === '')
            pError = {message: 'Password required', isError: true}
        else if(password.length < 6)
            pError = {message: 'Password length must be less than 6', isError: true}

        if(!confirmPassword)
            cpError = {message: 'Confirm Password Required', isError: true}
        else if(password !== confirmPassword)
            cpError = {message: 'Password not match', isError: true}

        setError(err => ({...err, password: pError, confirmPassword: cpError})); 

    }, [data.password, data.confirmPassword]);

    return <>        
        <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Container maxWidth='xs'>
                <Stack rowGap={3} component="form" onSubmit={onHandleSignup} noValidate>
                    <Stack flexDirection='row' alignItems='center' color='primary.main'>
                        <Person fontSize="large"/>
                        <Typography variant="h5" fontWeight='bold'>Sign Up</Typography>
                    </Stack>
                    
                    <div>
                        <TextField 
                            type="text"
                            name='username'
                            autoComplete="username"
                            label="username"
                            variant="outlined"
                            fullWidth 
                            autoFocus
                            onChange={handleUsernameChange}
                            value={data.username || ''}
                        />
                        <ErrorText message={error.username.message}/>
                    </div>
                    <div>
                        <TextField 
                            type="password" 
                            name='password'
                            autoComplete="current-password" 
                            label="Password" 
                            variant="outlined" 
                            fullWidth
                            onChange={handlePasswordChange}
                            value={data.password || ''}
                        />
                        <ErrorText message={error.password.message}/>
                    </div>
                    <div>
                        <TextField 
                            type="password" 
                            name='confirmPassword'
                            autoComplete="current-password" 
                            label="Repeat Password" 
                            variant="outlined" 
                            fullWidth
                            onChange={handlePasswordChange}
                            value={data.confirmPassword || ''}
                        />
                        <ErrorText message={error.confirmPassword.message}/>
                    </div>

                    <Tooltip title="This feature was not implemented">
                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                    </Tooltip>

                    <LoadingButton loading={loading} type="submit" variant="contained" sx={{p: 1.5}} disabled={loadingBarOpen || hasError}>Signup</LoadingButton>
                    <Stack justifyContent='flex-end' flexDirection='row'>
                        <Button component={Link}
                            to="/signin" 
                            endIcon={<ArrowForward />} 
                            size='small' 
                            sx={{textTransform: 'capitalize'}}>
                                Sign in
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
        <Snackbar {...snackbarProps}>
            <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    </>
}

export default Signup;