import { useState } from "react";
import Edit from "./Edit";
import Add from "./Add";
import Table from "../../components/Table";
import { Container, Stack, Button } from "@mui/material";
import useAuthenticated from "../../hooks/useAuthenticated";
import { useNavigate } from "react-router-dom";

function Dashboard(){
    const [addMenuOpen, setAddMenuOpen] = useState(false);
    const [editMenuOpen, setEditMenuOpen] = useState(false);

    const navigate = useNavigate();
    
    useAuthenticated(null, (err) => {
        console.log('navigate please');
        navigate('/signin');
    });

    const header = ['Name', 'Price', 'Creation Date']
    const items = [
        {id: '0', name: 'Example Name', price: '12$', creationDate: '09/12/2023'},
        {id: '1', name: 'Example Name', price: '12$', creationDate: '09/12/2023'},
        {id: '2', name: 'Example Name', price: '12$', creationDate: '09/12/2023'},
        {id: '3', name: 'Example Name', price: '12$', creationDate: '09/12/2023'},
    ]

    const handleAddClick = () => {
        setAddMenuOpen(false)
    }

    const handleEditClick = id => {
        setEditMenuOpen(true);
    }

    const handleUpdateProductClick = () => {
        setEditMenuOpen(false);
    }

    return (<>
        <Container maxWidth='lg' sx={{mt: 2}}>
            <Stack direction='row' justifyContent='flex-end'>
                <Button variant="contained" color="primary" onClick={() => setAddMenuOpen(true)}>Add Product</Button>
            </Stack>
            <Table header={header} items={items} onEditClick={handleEditClick}/>
        </Container>
        <Add open={addMenuOpen} onAddClick={handleAddClick} onClose={() => setAddMenuOpen(false)} />
        <Edit open={editMenuOpen} onUpdateClick={handleUpdateProductClick} onClose={() => setEditMenuOpen(false)} />
    </>)
}

export default Dashboard;