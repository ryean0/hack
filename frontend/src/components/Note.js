import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Note() {
  return (
    <>
      <CreateNote />
    </>
  )
}

function CreateNote() {
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          overflow: 'hidden',
          '& .MuiTextField-root': { m: 5, width: '70vw', height: '70vh' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Type your message here"
            multiline
            rows={20}
            
          />
        </div>

        
      </Box>
    );
  }


