import React from "react";
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import '../App.css'


function ViewerItem()
{
    return (
        <Stack  direction="row" justifyContent="center"
        alignItems="center" spacing={5}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Stack>
    );
}


export default ViewerItem;