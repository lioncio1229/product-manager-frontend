import { useState, useCallback } from "react";
import Edit from "./Edit";
import Add from "./Add";
import Table from "../../shared/Table";
import { Container, Stack, Button } from "@mui/material";
import useAuthenticated from "../../hooks/useAuthenticated";
import { useNavigate } from "react-router-dom";
import useProductAPI from "../../hooks/useProductAPI";

const header = ['Name', 'Price', 'Creation Date'];

function Dashboard(){
    const [products, setProduct] = useState([]);
    const [addMenuOpen, setAddMenuOpen] = useState(false);
    const [editMenuOpen, setEditMenuOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const navigate = useNavigate();

    const {addProduct, getProducts, updateProduct, deleteProduct} = useProductAPI((type, res) => {
        switch(type)
        {
            case 'getMany': {
                setProduct(res.data);
                break;
            }
            case 'add': {
                setProduct([...products, res.data]);
                break;
            }
            case 'update': {
                const updatedProduct = res.data;
                setProduct(products.map(p => p.id === updatedProduct.id ? {...p, ...updatedProduct} : p));
                break;
            }
            case 'delete': {
                const id = res.data.id;
                setProduct(products.filter(p => p.id !== id));
                break;
            }
        }
    });
    
    useAuthenticated((res) => {
        getProducts();
    }, (err) => {
        console.log('navigate please');
        navigate('/signin');
    });

    const handleAddClick = useCallback((name, price) => {
        addProduct(name, price);
        setAddMenuOpen(false)
    }, [products]);

    const handleEditClick = useCallback(product => {
        setCurrentProduct(product);
        setEditMenuOpen(true);
    }, [products])

    const handleUpdateProductClick = useCallback((id, name, price) => {
        updateProduct(id, name, price)
        setEditMenuOpen(false);
    }, [products])

    const handleProductDelete = useCallback(id => {
        deleteProduct(id);
    }, [products])

    return (<>
        <Container maxWidth='lg' sx={{mt: 2}}>
            <Stack direction='row' justifyContent='flex-end'>
                <Button variant="contained" color="primary" onClick={() => setAddMenuOpen(true)}>Add Product</Button>
            </Stack>
            <Table header={header} items={products} onEditClick={handleEditClick} onDeleteClick={handleProductDelete}/>
        </Container>
        
        <Add open={addMenuOpen} onAddClick={handleAddClick} onClose={useCallback(() => setAddMenuOpen(false), [products])} />

        <Edit 
            id={currentProduct.id}
            defaultName={currentProduct.name}
            defaultPrice={currentProduct.price}
            open={editMenuOpen}
            onUpdateClick={handleUpdateProductClick} 
            onClose={useCallback(() => setEditMenuOpen(false), [products])}
        />
    </>)
}

export default Dashboard;