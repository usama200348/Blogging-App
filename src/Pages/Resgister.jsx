import React, { useState, useRef } from 'react';
import { Box, Typography, TextField, Button, Link, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';
import { signUpUser } from '../Firebase/FirebaseMethod';
import { Link as Router  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './pagex.css';

const Register = () => {
  const [gender, setGender] = useState('');
  const [success,SetSuccess]=useState(false);
  const [error,SetError]=useState(null);
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const picture = useRef();
  const navigate = useNavigate();

  
  const UserRegister = async (event) => {
    event.preventDefault();
  
   signUpUser({
    email:email.current.value,
    password:password.current.value,
    fullname: fullname.current.value // Fixed typo here
   }).then((res)=>{
    console.log(res)
    SetSuccess(true)
    setTimeout(() => {
      navigate('/login')
    }, 1000);
   })
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          bgcolor: '#f5f5f5',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <TextField
          id="outlined-basic"
          type="text"
          label="Enter Full Name"
          variant="standard"
          ref={fullname}
          sx={{ width: '400px', marginTop: '10px' }}
        />
        <TextField
          id="outlined-basic"
          type="email"
          label="Enter Email"
          variant="standard"
          ref={email}
          sx={{ width: '400px', marginTop: '10px' }}
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Enter Password"
          variant="standard"
          ref={password}
          sx={{ width: '400px', marginTop: '10px' }}
        />
        
        {/* Gender Selection */}
        {/* <FormLabel sx={{ marginTop: '10px' }}>Gender</FormLabel>
        <RadioGroup
          value={gender}
          onChange={handleGenderChange}
          row
          sx={{ marginTop: '10px' }}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup> */}

        <Button
          variant="contained"
          sx={{
            background: '#7749f8',
            marginTop: '30px',
            width: 220,
            height: 48,
            borderRadius: 3,
            padding: '6px 0',
          }}
          onClick={UserRegister}
        >
          Register
        </Button>

        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{
            marginTop: '20px',
            background: '#7749f8',
          }}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>

        <Link
          to="/login"
          style={{
            color: '#7749f8',
            marginTop: '20px',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Already Have An Account? Click Here
        </Link>
      </Box>
    </>
  );
};

export default Register;
