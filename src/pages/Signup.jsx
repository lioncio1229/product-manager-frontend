import AuthMenu from "../components/AuthMenu";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Link } from "@mui/material";
import { Person, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAuthenticated from "../hooks/useAuthenticated";

function Signup()
{
    const navigate = useNavigate();

    const {handleSignup} = useAuth(() => {
        navigate('/dashboard');
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
                        <FormControlLabel control={<Checkbox />} label="Remember me" />

                        <Button type="submit" variant="contained" sx={{p: 1.5}}>Signup</Button>
                        <Stack justifyContent='flex-end' flexDirection='row'>
                            <Stack flexDirection='row' alignItems='center' color='primary.main'>
                                <Typography color='primary' fontSize={12}>Sign in</Typography>
                                <ArrowForward fontSize="small"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </AuthMenu>
    </>
}

export default Signup;