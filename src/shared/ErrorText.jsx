import { useTheme } from "@mui/material"

export default function ErrorText({message}){
    const theme = useTheme();
    return (
        <span style={{fontSize: '12px', color: theme.palette.error.main}}>{message}</span>
    )
}