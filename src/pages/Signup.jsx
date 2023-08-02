import AuthMenu from "../components/AuthMenu";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Link } from "@mui/material";
import { Person, ArrowForward } from "@mui/icons-material";

function Signup()
{
    return <>
        <AuthMenu>
            <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Container maxWidth='xs'>
                    <Stack rowGap={3} component="form">
                        <Stack flexDirection='row' alignItems='center' color='primary.main'>
                            <Person fontSize="large"/>
                            <Typography variant="h5" fontWeight='bold'>Sign Up</Typography>
                        </Stack>
                        
                        <TextField type="text" autoComplete="given-name" label="Full Name" variant="outlined" fullWidth autoFocus/>
                        <TextField type="email" autoComplete="email" label="Email Address" variant="outlined" fullWidth/>
                        <TextField type="password"  autoComplete="current-password" label="Password" variant="outlined" fullWidth/>
                        <TextField type="password"  autoComplete="current-password" label="Repeat Password" variant="outlined" fullWidth/>

                        <FormControlLabel control={<Checkbox />} label="Remember me" />

                        <Button variant="contained" sx={{p: 1.5}}>Signup</Button>
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