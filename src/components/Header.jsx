import { useState } from "react";
import {Box, Container, Stack, Typography, Tooltip, IconButton, Avatar, Menu, MenuItem, ListItemText, ListItemIcon } from "@mui/material";
import { Person } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";

function Header({userName='username@email.com'}){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return <>
        <Box bgcolor='primary.main' p={1} boxShadow={2}>
            <Container maxWidth='lg'>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography color="white" variant="h5" component="a" href="/" sx={{textDecoration: 'none'}}>Product Manager</Typography>
                    <Tooltip title="Open Account">
                        <IconButton sx={{ p: 0 }} onClick={handleClick}>
                            <Avatar> <Person/> </Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                    <MenuItem>
                        <ListItemText>{userName}</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Logout color='primary' fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                </Menu>
                </Stack>
            </Container>
        </Box>
    </>
}

export default Header;