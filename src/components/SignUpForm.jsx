// src/components/SignUpForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, InputAdornment, IconButton, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Slideshow from './Slideshow'; // import the Slideshow component
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password') {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{14,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 14 characters, include a number and a symbol.');
      setIsPasswordValid(false);
    } else {
      setPasswordError('');
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordValid) {
      alert("Please fix the password requirements before submitting.");
      return;
    }
    console.log("Form submitted", formData);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#FFEB3B', padding: '20px' }}>
      <Container component="main" maxWidth="xs">
        <Typography variant="h5" align="center" gutterBottom>Sign Up</Typography>
        <form onSubmit={handleSubmit} className="p-4 border rounded" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
          <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required fullWidth margin="normal" />
          <TextField label="Surname" name="surname" value={formData.surname} onChange={handleChange} required fullWidth margin="normal" />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth margin="normal" />
          <TextField
            label="Password"
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={!isPasswordValid}>
            Sign Up
          </Button>
        </form>
      </Container>
      <Box sx={{ flex: 1, height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <Slideshow />
      </Box>
    </Box>
  );
};

export default SignUpForm;
