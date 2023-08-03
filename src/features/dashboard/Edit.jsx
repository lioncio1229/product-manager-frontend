import SideMenu from "../../shared/SideMenu";
import { Typography, Button, TextField, Stack } from "@mui/material";
import { useState, useEffect } from "react";

function Edit({id, defaultName='', defaultPrice='', onUpdateClick, open, onClose}){

    const [productName, setProductName] = useState(defaultName);
    const [price, setProductPrice] = useState(defaultPrice);

    useEffect(() => {
        setProductName(defaultName);
        setProductPrice(defaultPrice);
    }, [defaultName, defaultPrice]);

    const closeMiddleware = () => {
        setProductName('');
        setProductPrice('');
        onClose();
    }

    return (
        <SideMenu title='Update Your Product' open={open} onClose={closeMiddleware}>
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
                    onClick={() => onUpdateClick(id, productName, price)}
                    >
                    Update Product
                </Button>
            </Stack>
        </SideMenu>
    )
}

export default Edit;