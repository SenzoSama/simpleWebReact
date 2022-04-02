import React from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";

import '../App.css'


function Adder() {
    return (
        <Box  sx={{ flexGrow: 1 }}>
            <Stack  direction="row" justifyContent="center"
                alignItems="center" spacing={5}>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
        </Box>
    );
}


export default Adder;