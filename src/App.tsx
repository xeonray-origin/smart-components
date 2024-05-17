import { Box, Stack } from "@mui/material";
import { layoutStyles } from "./styles";
import { Autocomplete, Textbox } from "./components";

function App() {
  return (
    <Box sx={layoutStyles.root}>
      <Stack direction="column" spacing={2} sx={layoutStyles.displayContainer}>
        <Autocomplete />
        <Textbox />
      </Stack>
    </Box>
  );
}

export default App;
