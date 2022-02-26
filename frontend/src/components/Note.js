import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import FadeIn from 'react-fade-in';

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
      <FadeIn 
        delay="1"
        transitionDuration="1000"
      >
        <Box
          component="form"
          sx={{ 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
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
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </Box>
      </FadeIn>
    );
  }


