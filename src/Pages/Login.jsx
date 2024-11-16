import React from 'react'
import { TextField ,Box, Typography,Button,Link} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Login = () => {
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
       <Typography variant='h4' component='h1' gutterBottom>
                Login
       </Typography>
        <TextField id="outlined-basic" type='email' label="Enter Email" variant="standard" sx={{width:'400px', marginTop:'10px'}} />
        <TextField id="outlined-basic" type='password' label="Enter Password" variant="standard" sx={{width:'400px', marginTop:'10px'}} />
        
        <Button
  variant="contained"
  sx={{
    background:'#7749f8',
    marginTop: '30px',
    width: 220,
    height:48,
    borderRadius:3,
    padding: '6px 0', 
  }}
>
  Login
</Button>



<Link
        to="/register"
        style={{
          color: '#7749f8',
          marginTop: '20px',
          textDecoration: 'none',
          cursor:'pointer'
        }}
      >
        Already Have An Account? Click Here
      </Link>
        </Box>
    </>
  )
}

export default Login