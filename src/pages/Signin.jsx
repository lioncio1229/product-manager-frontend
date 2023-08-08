import AuthMenu from "../shared/AuthMenu";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Tooltip, Snackbar, Alert, AlertTitle, formLabelClasses } from "@mui/material";
import {LoadingButton} from '@mui/lab';
import { PersonAdd, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAuthenticated from "../hooks/useAuthenticated";
import { Link } from "react-router-dom";
import useSnackbar from "../hooks/useSnackbar";
import useShowComponentAfter from "../hooks/useShowComponentAfter";
import {useState} from 'react';
import CustomAlert from "../shared/CustomAlert";
import LoadingBar from '../shared/LoadingBar';

function Signin()
{
    const navigate = useNavigate();
    const {openSnackbar, closeSnackbar, snackbarProps, message} = useSnackbar();
    const {open, show, hide, cut} = useShowComponentAfter(5000);
    const [loading, setLoading] = useState(false);
    const [loadingBarOpen, setLoadingBarOpen] = useState(false);

    const {handleSignin} = useAuth(() => {
        setLoading(false);
        navigate('/dashboard');
    }, () => { 
        setLoading(false);
        openSnackbar('Signin Error');
    });

    useAuthenticated((res) => {
        setLoadingBarOpen(false);
        cut();
        navigate('/dashboard');
    }, (err) => {
        console.error('Not authenticated');
        setLoadingBarOpen(false);
        cut();
    }, () => {
        show();
        setLoadingBarOpen(true);
    });

    const onHandleSignin = (e) => {
        setLoading(true);
        handleSignin(e);
    }

    return <>
        <LoadingBar open={loadingBarOpen} />
        <CustomAlert open={open} title="FYI" onClose={hide} message="I've chosen the free tier hosting option for this app's API on Render.com. Please note that the initial load might experience delay as the server may be in a sleeping state." />
        
        <AuthMenu>
            <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Container maxWidth='xs'>
                    <Stack rowGap={4} component="form" onSubmit={onHandleSignin} noValidate>
                        <Stack flexDirection='row' alignItems='center' color='primary.main'>
                            <PersonAdd fontSize="large"/>
                            <Typography variant="h5" fontWeight='bold'>Sign in</Typography>
                        </Stack>

                        <TextField type="text" name='username' autoComplete="username" label="username" variant="outlined" fullWidth autoFocus/>
                        <TextField type="password" name='password'  autoComplete="current-password" label="Password" variant="outlined" fullWidth/>
                        <Tooltip title="This feature was not implemented">
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                        </Tooltip>
                        <LoadingButton loading={loading} type="submit" variant="contained" sx={{p: 1.5}} disabled={loadingBarOpen}>Sign in</LoadingButton>

                        <Stack justifyContent='space-between' flexDirection='row'>
                            <Tooltip title="This feature was not implemented">
                                <Button size='small' sx={{textTransform: 'capitalize'}}>
                                    Forgot Password?
                                </Button>
                            </Tooltip>
                            <Button component={Link}
                                to="/signup" 
                                endIcon={<ArrowForward />} 
                                size='small' 
                                sx={{textTransform: 'capitalize'}}>
                                    Signup
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

export default Signin;