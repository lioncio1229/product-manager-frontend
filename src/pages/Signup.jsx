import AuthMenu from "../shared/AuthMenu";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Tooltip, Snackbar, Alert } from "@mui/material";
import { Person, ArrowForward } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAuthenticated from "../hooks/useAuthenticated";
import useSnackbar from "../hooks/useSnackbar";

function Signup()
{
    const navigate = useNavigate();
    const {openSnackbar, closeSnackbar, snackbarProps, message} = useSnackbar();

    const {handleSignup} = useAuth(() => {
        navigate('/dashboard');
    }, (err) => {
        if(err.passwordNotMatch)
        {
            openSnackbar('Password not matched');
        }
        else{
            openSnackbar('Sign up error');
        }
    });

    useAuthenticated((res) => {
        navigate('/dashboard');
    });

    return <>
        <AuthMenu>
            <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Container maxWidth='xs'>
                    <Stack rowGap={3} component="form" onSubmit={handleSignup} noValidate>
                        <Stack flexDirection='row' alignItems='center' color='primary.main'>
                            <Person fontSize="large"/>
                            <Typography variant="h5" fontWeight='bold'>Sign Up</Typography>
                        </Stack>
                        
                        <TextField type="text" name='username' autoComplete="username" label="username" variant="outlined" fullWidth autoFocus/>
                        <TextField type="password" name='password'  autoComplete="current-password" label="Password" variant="outlined" fullWidth/>
                        <TextField type="password" name='confirmPassword'  autoComplete="current-password" label="Repeat Password" variant="outlined" fullWidth/>

                        <Tooltip title="This feature was not implemented">
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                        </Tooltip>

                        <Button type="submit" variant="contained" sx={{p: 1.5}}>Signup</Button>
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