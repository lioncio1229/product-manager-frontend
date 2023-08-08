import { Alert, AlertTitle } from "@mui/material"

export default function CustomAlert({open, title, message, onClose}){

    return (
        <>
        {
            open && 
            <Alert severity="warning" onClose={onClose} sx={{
                width: '100%',
            }}>
                <AlertTitle>{title}</AlertTitle>
                <span style={{fontSize: '12px'}}>{message}</span>
            </Alert>
        }
        </>
    )
}