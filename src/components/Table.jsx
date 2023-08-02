import {useState} from 'react';
import { Container, Stack, Box, Typography, Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { Delete } from '@mui/icons-material';

function Item({header=false, items=[]}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={header ? 1 : 2}
        bgcolor={`${header ? "none" : "white"}`}
        borderRadius={2}
        p={1}
        pl={2}
        pr={2}
      >
        {items.map((item, i) => (
          <Box width="100%">
            <Typography color={`${header ? "grey.500" : "text"}`}>
              {item}
            </Typography>
          </Box>
        ))}
        <Box width="70%">
          {!header && (
            <Stack direction="row" columnGap={3} alignItems="center">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "grey.200",
                  color: "text.primary",
                  fontSize: 10,
                  fontWeight: "bold",
                  boxShadow: "none",
                }}
              >
                Edit
              </Button>
              <Button size="small" onClick={handleClick}>
                <MoreHoriz fontSize="large" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Delete color='error' fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                    </MenuItem>
                </Menu>
            </Stack>)}
        </Box>
      </Stack>
    );
}

function Table(){
    return (
        <Box pt={4}>
            <Container maxWidth='lg'>
                <Item header items={['Name', 'Price', 'Creation Date']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
            </Container>
        </Box>
    )
}

export default Table;