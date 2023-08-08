import { Alert, AlertTitle } from "@mui/material"

export default function CustomAlert({title, message, onClose}){

    return (
        <Alert severity="warning" onClose={onClose} sx={{
            width: '100%',
        }}>
            <AlertTitle>{title}</AlertTitle>
            {message}
        </Alert>
    )
}