import { keyframes, Box } from "@mui/material";

const StyledLoadingBar = keyframes`
    0% {
        left: -10px;
        width: 0;
    }
    50% {
        width: 50%;
    }
    100% {
        width: 0;
        left: 100vw;
    }
`;

export default function LoadingBar({open}){

    return (
        <>
        {
        open &&
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%', 
            height: 4, 
            bgcolor: 'white',
            zIndex: 2000,
            boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.5) inset",
        }}>
            <Box 
            bgcolor='primary.main'
            boxShadow={2}
            sx={{
                position: 'absolute',
                height: '100%',
                animation: `${StyledLoadingBar} 3s infinite ease-in-out`,
            }}></Box>
        </Box>
        }
        </>
    )
}