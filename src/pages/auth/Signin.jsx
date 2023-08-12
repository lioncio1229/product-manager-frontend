import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Tooltip, Snackbar, Alert } from "@mui/material";
import {LoadingButton} from '@mui/lab';
import { PersonAdd, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import useSnackbar from "../../hooks/useSnackbar";
import {useState, useMemo} from 'react';
import ErrorText from "../../shared/ErrorText";

function Signin({loadingBarOpen})
{
    const navigate = useNavigate();
    const {openSnackbar, closeSnackbar, snackbarProps, message} = useSnackbar();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState({
        username: '',
        password: '',
    })

    const hasError = useMemo(() => !Object.values(data).every(v => v && v.length > 0) ,[data]);

    const {handleSignin} = useAuth(() => {
        setLoading(false);
        navigate('/dashboard');
    }, (e) => { 
        console.log(e)
        setLoading(false);
        openSnackbar(e.response.data.name || 'Signin Error');
    });

    const onHandleSignin = (e) => {
        setLoading(true);
        handleSignin(e);
    }

    const handleUsernameChange = (e) => {
        const username = e.target.value;
        setData((data) => ({...data, username}));

        if(username === '')
            setError((err) => ({...err, username: 'Username Required'}));
        else
            setError((err) => ({...err, username: ''}));
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setData((data) => ({...data, password}));

        if(password === '')
            setError((err) => ({...err, password: 'Password Required'}));
        else
            setError((err) => ({...err, password: ''}));
    }

    return <>
        
        <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Container maxWidth='xs'>
                <Stack rowGap={4} component="form" onSubmit={onHandleSignin} noValidate>
                    <Stack flexDirection='row' alignItems='center' color='primary.main'>
                        <PersonAdd fontSize="large"/>
                        <Typography variant="h5" fontWeight='bold'>Sign in</Typography>
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
                            value={data.username}
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
                        onChange={handlePasswordChange}
                        value={data.password}
                        />
                        <ErrorText message={error.password}/>
                    </div>

                    <Tooltip title="This feature was not implemented">
                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                    </Tooltip>
                    <LoadingButton loading={loading} type="submit" variant="contained" sx={{p: 1.5}} disabled={loadingBarOpen || hasError}>Sign in</LoadingButton>

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
    </>
}

export default Signin;