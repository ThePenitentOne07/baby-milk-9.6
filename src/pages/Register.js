import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextField, Divider, Button, Container, Typography, Box, Link } from '@mui/material';
import "../App.css";
import FTextField from '../components/form/FTextField';
function Register() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState({});

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const validationErrors = {};
    //     if (!username) {
    //         validationErrors.username = 'Field cannot be blank';
    //     }
    //     if (!password) {
    //         validationErrors.password = 'Field cannot be blank';
    //     }
    //     setErrors(validationErrors);
    //     if (Object.keys(validationErrors).length === 0) {
    //         // Proceed with form submission
    //         console.log('Form submitted');
    //     }
    // };
    const methods = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <FormProvider {...methods}>
            <Container maxWidth="sm">
                <Box
                    component="form"
                    onSubmit={methods.handleSubmit(onSubmit)}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mt: 5,
                        padding: 3,
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Register
                    </Typography>
                    <FTextField
                        name="phoneNumber"
                        label="Phone Number"
                        variant="outlined"
                        validationRules={{ required: 'Phone Number must not be empty' }}
                    />
                    <FTextField
                        name="createPassword"
                        label="Create Password"
                        type="password"
                        variant="outlined"
                        validationRules={{ required: 'Password must not be empty' }}
                    />
                    <FTextField
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        validationRules={{
                            required: 'Password must not be empty',
                            validate: (value) =>
                                value === methods.watch('createPassword') || 'Passwords do not match',
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#FF5722', color: '#FFFFFF', '&:hover': { backgroundColor: '#E64A19' } }}
                    >
                        Sign Up
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                        Already have an account?{' '}
                        <Link href="/login" underline="hover">
                            Login
                        </Link>
                    </Typography>
                    <Divider sx={{ my: 2 }} />

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mb: 1, backgroundColor: '#4285F4', '&:hover': { backgroundColor: '#357ae8' } }}
                        onClick={() => { console.log('Login with Google'); }}
                    >
                        Login with Google
                    </Button>

                    
                </Box>
            </Container>
        </FormProvider>
    );
};

export default Register;
