import { Grid, Box, Typography, Stack } from '@mui/material';

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
        <FloatingCircle size={120} pos={{bottom: '14%', right: -50}}/>
        <FloatingCircle size={50} pos={{bottom: '25%', left: '10%'}}/>
        <FloatingCircle size={60} pos={{top: '25%', left: '15%'}}/>
        <Box color='white' width={450}>
            <Typography variant='h1' fontSize={40} mb={4}>Coding Challenge</Typography>
            <Typography lineHeight={2}>This is done using React, MUI, Figma, Node.js, and MongoDB. MUI is very cool UI library</Typography>
        </Box>
    </Stack>
}

function AuthMenu({children}){
    return <>
        <Box>
            <Grid container height={'100vh'}>
                <Grid item xs={0} md={6} display={{xs: 'none', md: 'block'}}>
                    <LeftSide />
                </Grid>
                <Grid item xs={12} md={6}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    </>
}

export default AuthMenu;