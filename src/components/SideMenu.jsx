import { Box, Typography, Stack, Container, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

function SideMenu({title='Title', children}){
    return (
    <Box 
        width={450}
        height='100vh'
        bgcolor='white'
        sx={{
            position: 'fixed',
            top: 0,
            right: 0,
        }}
        boxShadow='3'
    >
        <Container >
            <Box sx={{borderBottom: '1px solid', borderColor: 'grey.200'}}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' p={1.2}>
                    <Typography color='primary' fontWeight='600'>{title}</Typography>
                    <Button >
                        <Close color='primary' size='large'/>
                    </Button>
                </Stack>
            </Box>
            {children}
        </Container>
    </Box>)
}

export default SideMenu;