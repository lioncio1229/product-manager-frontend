import { useState, useEffect, useMemo } from "react";
import AuthMenu from "../shared/AuthMenu";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Tooltip, Snackbar, Alert } from "@mui/material";
import {LoadingButton} from '@mui/lab';
import { Person, ArrowForward } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAuthenticated from "../hooks/useAuthenticated";
import useSnackbar from "../hooks/useSnackbar";
import useShowComponentAfter from "../hooks/useShowComponentAfter";
import CustomAlert from "../shared/CustomAlert";
import LoadingBar from '../shared/LoadingBar';
import ErrorText from "../shared/ErrorText";

function Signup()
{
    const navigate = useNavigate();
    const {openSnackbar, closeSnackbar, snackbarProps, message} = useSnackbar();
    const {open, show, hide, cut} = useShowComponentAfter(5000);
    const [loading, setLoading] = useState(false);
    const [loadingBarOpen, setLoadingBarOpen] = useState(false);
    
    const [data, setData] = useState({
        username: null,
        password: null,
        confirmPassword: null,
    })
    
    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })
    
    const hasError = useMemo(() => !Object.values(error).every(v => v.length === 0) ,[error]);

    const {handleSignup} = useAuth(() => {
        setLoading(false);
        navigate('/dashboard');
    }, (err) => {
        setLoading(false);
        openSnackbar(err.response.data.name || 'Signup Error');
    });

    useAuthenticated((res) => {
        setLoadingBarOpen(false);
        cut();
        navigate('/dashboard');
    }, (err) => {
        setLoadingBarOpen(false);
        cut();
    }, () => {
        show();
        setLoadingBarOpen(true);
    });

    const onHandleSignup = (e) => {
        setLoading(true);
        handleSignup(e);
    }

    const handleUsernameChange = (e) => {
        const {value: username} = e.target;
        setData((data) => ({...data, username}));

        let errorMessage = '';

        if(username === '') 
            errorMessage = 'Username Required';
        else if(!/^[a-zA-Z0-9_]+$/.test(username))
            errorMessage = 'Invalid character';
        else if(username.length <= 3)
            errorMessage = 'Username length should be 4 and above'

        setError((err) => ({...err, username: errorMessage}));
    }

    const validatePassword = (e) => {
        const {value, name} = e.target;
        setData((data) => ({...data, [name]: value}));
    }

    useEffect(() => {
        const {password, confirmPassword} = data;
        if(password === null && confirmPassword === null) return;
        let pError = '', cpError = '';
        
        if(password === '')
            pError = 'Password required';
        else if(password.length < 6)
            pError = 'Password length must be less than 6';

        if(!confirmPassword)
            cpError = 'Confirm Password Required';
        else if(password !== confirmPassword)
            cpError = 'Password not match';

        setError(err => ({...err, password: pError, confirmPassword: cpError}));        

    }, [data.password, data.confirmPassword]);

    return <>
        <LoadingBar open={loadingBarOpen} />
        <CustomAlert open={open} title="FYI" onClose={hide} message="I've chosen the free tier hosting option for this app's API on Render.com. Please note that the initial load might experience delay as the server may be in a sleeping state." />
        
        <AuthMenu>
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
                            <ErrorText message={error.username}/>
                        </div>
                        <div>
                            <TextField 
                                type="password" 
                                name='password'
                                autoComplete="current-password" 
                                label="Password" 
                                variant="outlined" 
                                fullWidth
                                onChange={validatePassword}
                                value={data.password || ''}
                            />
                            <ErrorText message={error.password}/>
                        </div>
                        <div>
                            <TextField 
                                type="password" 
                                name='confirmPassword'
                                autoComplete="current-password" 
                                label="Repeat Password" 
                                variant="outlined" 
                                fullWidth
                                onChange={validatePassword}
                                value={data.confirmPassword || ''}
                            />
                            <ErrorText message={error.confirmPassword}/>
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
        </AuthMenu>
    </>
}

export default Signup;