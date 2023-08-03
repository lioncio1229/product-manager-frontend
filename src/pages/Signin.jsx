import AuthMenu from "../shared/AuthMenu";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Tooltip, Snackbar, Alert } from "@mui/material";
import { PersonAdd, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAuthenticated from "../hooks/useAuthenticated";
import { Link } from "react-router-dom";
import useSnackbar from "../hooks/useSnackbar";

function Signin()
{
    const navigate = useNavigate();
    const {openSnackbar, closeSnackbar, snackbarProps, message} = useSnackbar();

    const {handleSignin} = useAuth(() => {
        navigate('/dashboard');
    }, () => openSnackbar('Signin Error'));

    useAuthenticated((res) => {
        navigate('/dashboard');
    }, (err) => console.error('Not authenticated'));

    return <>
        <AuthMenu>
            <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Container maxWidth='xs'>
                    <Stack rowGap={4} component="form" onSubmit={handleSignin} noValidate>
                        <Stack flexDirection='row' alignItems='center' color='primary.main'>
                            <PersonAdd fontSize="large"/>
                            <Typography variant="h5" fontWeight='bold'>Sign in</Typography>
                        </Stack>

                        <TextField type="text" name='username' autoComplete="username" label="username" variant="outlined" fullWidth autoFocus/>
                        <TextField type="password" name='password'  autoComplete="current-password" label="Password" variant="outlined" fullWidth/>
                        <Tooltip title="This feature was not implemented">
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                        </Tooltip>
                        <Button type="submit" variant="contained" sx={{p: 1.5}}>Sign in</Button>

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