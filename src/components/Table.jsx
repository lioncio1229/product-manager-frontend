import {useState} from 'react';
import { Container, Stack, Box, Typography, Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { Delete } from '@mui/icons-material';

function Item({header=false, items=[], onEditClick, onDeleteClick}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const onDeleteMiddleware = () => {
      onDeleteClick();
      handleClose();
    }

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
          <Box width="100%" key={i}>
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
                onClick={onEditClick}
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
                    <MenuItem onClick={onDeleteMiddleware}>
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

function Table({header, items, onEditClick, onDeleteClick}){
    return (
        <Box pt={4}>
            <Item header items={header} />
            {items && items.map((item) => <Item key={item.id} items={Object.values(item).slice(1)} onEditClick={() => onEditClick(item)} onDeleteClick={() => onDeleteClick(item.id)}/>)}
        </Box>
    )
}

export default Table;