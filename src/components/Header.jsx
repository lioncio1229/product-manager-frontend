import {Box, Container, Stack, Typography, Tooltip, IconButton, Avatar } from "@mui/material";
import { Person } from "@mui/icons-material";

function Header(){
    return <>
        <Box bgcolor='primary.main' p={1} boxShadow={2}>
            <Container maxWidth='lg'>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography color="white" variant="h5" component="a" href="/" sx={{textDecoration: 'none'}}>Product Manager</Typography>
                    <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar> <Person/> </Avatar>
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Container>
        </Box>
    </>
}

export default Header;