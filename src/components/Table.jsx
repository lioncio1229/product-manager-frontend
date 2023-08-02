import { Container, Stack, Box, Typography, Button } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

function Item({header=false, items=[]}) {
    return (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={header ? 1 : 2}
        bgcolor={`${header ? "none" : "white"}`}
        borderRadius={2}
        p={1}
        pl={2}
        pr={2}
      >
        {items.map((item, i) => (
          <Box width="100%">
            <Typography color={`${header ? "grey.500" : "text"}`}>
              {item}
            </Typography>
          </Box>
        ))}
        <Box width="70%">
          {!header && (
            <Stack direction="row" columnGap={3} alignItems="center">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "grey.200",
                  color: "text.primary",
                  fontSize: 10,
                  fontWeight: "bold",
                  boxShadow: "none",
                }}
              >
                Edit
              </Button>
              <Button size="small">
                <MoreHoriz fontSize="large" />
              </Button>
            </Stack>
          )}
        </Box>
      </Stack>
    );
}

function Table(){
    return (
        <Box pt={4}>
            <Container maxWidth='lg'>
                <Item header items={['Name', 'Price', 'Creation Date']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
                <Item items={['Example', 'Example', 'Example']} />
            </Container>
        </Box>
    )
}

export default Table;