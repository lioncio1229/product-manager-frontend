import { useState } from "react";
import { Outlet } from "react-router-dom";
import {Box, Container, Stack, Typography, Tooltip, IconButton, Avatar, Menu, MenuItem, ListItemText, ListItemIcon } from "@mui/material";
import { Person, Logout } from "@mui/icons-material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAuthenticated from '../../hooks/useAuthenticated';

function Header(){
    const [username, setUserName] = useState('');
    const navigate = useNavigate();
    const {handleSignout} = useAuth(() => {
        navigate('/');
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    useAuthenticated((res) => {
        setUserName(res.data.username);
    });

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
                    <MenuItem sx={{minWidth: 200}}>
                        <ListItemIcon>
                            <Person color='primary' fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>{username}</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleSignout}>
                        <ListItemIcon>
                            <Logout color='primary' fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                </Menu>
                </Stack>
            </Container>
        </Box>
        <Outlet />
    </>
}

export default Header;