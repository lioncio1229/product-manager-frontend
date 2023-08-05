import SideMenu from "../../shared/SideMenu";
import { Typography, Button, TextField, Stack } from "@mui/material";
import { memo, useState } from "react";

function Add({onAddClick, open, onClose}){
    const [productName, setProductName] = useState('');
    const [price, setProductPrice] = useState('');

    const closeMiddleware = () => {
        setProductName('');
        setProductPrice('');
        onClose();
    }
    console.log('add!');

    return (
        <SideMenu title='Add New Product' open={open} onClose={closeMiddleware}>
            <Stack pt={5} rowGap={2}>
                <Typography color='grey.500'>Product Name</Typography>
                <TextField fullWidth size="small" onChange={(e) => setProductName(e.target.value)} value={productName}/>
                <Typography color='grey.500'>Price</Typography>
                <TextField fullWidth size="small" onChange={(e) => setProductPrice(e.target.value)} value={price}/>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    sx={{fontWeight: '600', textTransform: 'capitalize', mt: 2}}
                    onClick={() => {
                        onAddClick(productName, price);
                        closeMiddleware();
                    }}
                    >
                    Add Product
                </Button>
            </Stack>
        </SideMenu>
    )
}

export default memo(Add);