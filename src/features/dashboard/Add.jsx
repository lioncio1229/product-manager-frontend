import SideMenu from "../../components/SideMenu";
import { Typography, Button, TextField, Stack } from "@mui/material";

function Edit(){
    return (
        <SideMenu title='Add New Product'>
            <Stack pt={5} rowGap={2}>
                <Typography color='grey.500'>Product Name</Typography>
                <TextField fullWidth size="small"/>
                <Typography color='grey.500'>Price</Typography>
                <TextField fullWidth size="small"/>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    sx={{fontWeight: '600', textTransform: 'capitalize', mt: 2}}>
                    Add Product
                </Button>
            </Stack>
        </SideMenu>
    )
}

export default Edit;