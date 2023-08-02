import { Drawer, Box, Typography, Stack, Container, Button, Divider } from "@mui/material";
import { Close } from "@mui/icons-material";

function SideMenu({title='Title', open, onClose, children}){
    return (
    <Drawer anchor="right" open={open} p={0} onClose={onClose}>
        <Container >
            <Box width={450}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' pt={2} pb={2}>
                    <Typography color='primary' fontWeight='600'>{title}</Typography>
                    <Button sx={{minWidth: 0, p: 0}}>
                        <Close color='primary' onClick={onClose}/>
                    </Button>
                </Stack>
            </Box>
        </Container>
        <Divider />
        <Container>
            {children}
        </Container>
    </Drawer>)
}

export default SideMenu;