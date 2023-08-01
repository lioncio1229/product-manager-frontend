import Auth from "../shared/authentication/Auth";
import { Container, Box, Stack, Typography, TextField, Button, FormControlLabel , Checkbox, Link } from "@mui/material";
import { PersonAdd, ArrowForward } from "@mui/icons-material";

function Signin()
{
    return <>
        <Auth>
            <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Container maxWidth='xs'>
                    <Stack rowGap={4}>
                        <Stack flexDirection='row' alignItems='center' color='primary.main'>
                            <PersonAdd fontSize="large"/>
                            <Typography variant="h5" fontWeight='bold'>Sign in</Typography>
                        </Stack>
                        <TextField label="Email Address" variant="outlined" fullWidth/>
                        <TextField label="Password" variant="outlined" fullWidth/>
                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                        <Button variant="contained" sx={{p: 1.5}}>Sign in</Button>
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
        </Auth>
    </>
}

export default Signin;