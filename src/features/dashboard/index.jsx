import { useState } from "react";
import Edit from "./Edit";
import Table from "../../components/Table";

function Dashboard(){
    const [addMenuOpen, setAddMenuOpen] = useState(false);
    const [editMenuOpen, setEditMenuOpen] = useState(false);

    const header = ['Name', 'Price', 'Creation Date']
    const items = [
        {id: '0', name: 'Example Name', price: '12$', creationDate: '09/12/2023'},
        {id: '1', name: 'Example Name', price: '12$', creationDate: '09/12/2023'},
        {id: '2', name: 'Example Name', price: '12$', creationDate: '09/12/2023'},
        {id: '3', name: 'Example Name', price: '12$', creationDate: '09/12/2023'},
    ]

    const handleEditClick = id => {
        setEditMenuOpen(true);
    }

    const handleUpdateProductClick = () => {
        setEditMenuOpen(false);
    }

    return (<>
        <Table header={header} items={items} onEditClick={handleEditClick}/>
        <Edit open={editMenuOpen} onUpdateClick={handleUpdateProductClick} onClose={() => setEditMenuOpen(false)} />
    </>)
}

export default Dashboard;