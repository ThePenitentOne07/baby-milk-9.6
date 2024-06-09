// src/pages/EditCustomerAccount.js
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Container, Alert } from '@mui/material';
import apiService from '../app/apiService';
import UserInfoCard from '../components/UserInfoCard';
import FTextField from '../components/form/FTextField';
import { useForm, FormProvider } from 'react-hook-form';

const ChangePassword = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        address: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const methods = useForm();

    // Uncomment and implement fetching customer data if needed
    // useEffect(() => {
    //     const fetchCustomerData = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await apiService.get('/customer/account');
    //             setFormValues(response.data);
    //             setError(null);
    //         } catch (err) {
    //             setError('Failed to fetch customer data');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchCustomerData();
    // }, []);

    const handleInputChange = (name, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (data) => {
        setLoading(true);
        try {
            await apiService.put('/customer/account', data);
            setSuccess('Account updated successfully');
            setError(null);
        } catch (err) {
            setError('Failed to update account');
            setSuccess(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', mt: 5 }}>
                <UserInfoCard name="Nguyen Dinh Bao" />
                <Box sx={{ flex: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Change Password
                    </Typography>
                    {loading && <Typography>Loading...</Typography>}
                    {error && <Alert severity="error">{error}</Alert>}
                    {success && <Alert severity="success">{success}</Alert>}
                    {!loading && (
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                                <FTextField
                                    name="password"
                                    label="Enter your current password"
                                    variant="outlined"
                                    validationRules={{ required: 'Password must not be empty' }}
                                    sx={{ mb: 2 }}  // Add margin bottom
                                />
                                <FTextField
                                    name="createPassword"
                                    label="Create Password"
                                    type="password"
                                    variant="outlined"
                                    validationRules={{ required: 'Password must not be empty' }}
                                    sx={{ mb: 2 }}  // Add margin bottom
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
                                    sx={{ mb: 2 }}  // Add margin bottom
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    sx={{ mt: 3 }}
                                >
                                    Save Changes
                                </Button>
                            </form>
                        </FormProvider>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default ChangePassword;
