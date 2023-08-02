import AuthMenu from "../components/AuthMenu";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Link } from "@mui/material";
import { PersonAdd, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAuthenticated from "../hooks/useAuthenticated";

function Signin()
{
    const navigate = useNavigate();

    const {handleSignin} = useAuth(() => {
        navigate('/dashboard');
    });

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
                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                        <Button type="submit" variant="contained" sx={{p: 1.5}}>Sign in</Button>

                        <Stack justifyContent='space-between' flexDirection='row'>
                            <Typography color='primary' fontSize={12}>Forgot Password?</Typography>
                            <Stack flexDirection='row' alignItems='center' color='primary.main'>
                                <Typography color='primary' fontSize={12}>Sign up</Typography>
                                <ArrowForward fontSize="small"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </AuthMenu>
    </>
}

export default Signin;