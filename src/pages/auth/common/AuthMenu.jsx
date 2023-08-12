import { useState } from 'react';
import { Grid, Box, Typography, Stack } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAuthenticated from '../../../hooks/useAuthenticated';
import LoadingBar from '../../../shared/LoadingBar';
import CustomAlert from '../../../shared/CustomAlert';
import useShowComponentAfter from '../../../hooks/useShowComponentAfter';

function FloatingCircle({size, pos}){
    return (
      <Box
        sx={{
            position: 'absolute',
            borderRadius: "50%",
            bgcolor: "white",
            width: size,
            height: size,
            boxShadow: 3,
            ...pos,
        }}
      ></Box>
    );
}

function LeftSide(){
    return <Stack bgcolor='primary.main' height='100%' justifyContent='center' alignItems='center' sx={{position: 'relative'}}>
        <FloatingCircle size={70} pos={{top: '10%', right: '10%'}}/>
        <FloatingCircle size={120} pos={{bottom: '14%', right: '-5%'}}/>
        <FloatingCircle size={50} pos={{bottom: '25%', left: '10%'}}/>
        <FloatingCircle size={60} pos={{top: '25%', left: '15%'}}/>
        <Box color='white' width={300}>
            <Typography variant='h1' fontSize={40} mb={4}>Product Manager</Typography>
            <Typography lineHeight={2}>This is done using React, MUI, Figma, Node.js, and MongoDB. MUI is very cool UI library</Typography>
        </Box>
    </Stack>
}

function AuthMenu(){

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {open, show, hide, cut} = useShowComponentAfter(5000);
    const [loadingBarOpen, setLoadingBarOpen] = useState(false);

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
    }, [pathname]);

    return <>
        <LoadingBar open={loadingBarOpen} />
        <CustomAlert open={open} title="FYI" onClose={hide} message="I've chosen the free tier hosting option for this app's API on Render.com. Please note that the initial load might experience delay as the server may be in a sleeping state." />
        <Box>
            <Grid container height={'100vh'}>
                <Grid item xs={0} md={6} display={{xs: 'none', md: 'block'}}>
                    <LeftSide />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Outlet context={{loadingBarOpen}}/>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default AuthMenu;