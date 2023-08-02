import SideMenu from "../../components/SideMenu";
import { Typography, Button, TextField, Stack } from "@mui/material";

function Add({onAddClick, open, onClose}){
    return (
        <SideMenu title='Add New Product' open={open} onClose={onClose}>
            <Stack pt={5} rowGap={2}>
                <Typography color='grey.500'>Product Name</Typography>
                <TextField fullWidth size="small"/>
                <Typography color='grey.500'>Price</Typography>
                <TextField fullWidth size="small"/>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    sx={{fontWeight: '600', textTransform: 'capitalize', mt: 2}}
                    onClick={onAddClick}
                    >
                    Add Product
                </Button>
            </Stack>
        </SideMenu>
    )
}

export default Add;