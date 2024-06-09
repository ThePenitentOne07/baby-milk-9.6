// src/pages/EditCustomerAccount.js
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Container, Alert,Card, List, ListItem, ListItemText  } from '@mui/material';
import SkipInputField from '../components/form/SkipInputField';
import apiService from '../app/apiService';
import { Link as RouterLink } from 'react-router-dom';
import UserInfoCard from '../components/UserInfoCard';

const EditCustomerAccount = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        address: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

//     useEffect(() => {
//         const fetchCustomerData = async () => {
//             setLoading(true);
//             try {
//                 const response = await apiService.get('/customer/account');
//                 setFormValues(response.data);
//                 setError(null);
//             } catch (err) {
//                 setError('Failed to fetch customer data');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCustomerData();
//     }, []);

    const handleInputChange = (name, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
    //     setLoading(true);
    //     try {
    //         await apiService.put('/customer/account', formValues);
    //         setSuccess('Account updated successfully');
    //         setError(null);
    //     } catch (err) {
    //         setError('Failed to update account');
    //         setSuccess(null);
    //     } finally {
    //         setLoading(false);
    //     }
    };

    return (
        <Container >
            <Box sx={{ display: 'flex', mt: 5 }}>
            <UserInfoCard name="Nguyen Dinh Bao" />
            <Box sx={{ flex: 2 }}>
                <Typography variant="h4" gutterBottom>
                    My profile
                </Typography>
                {loading && <Typography>Loading...</Typography>}
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}
                {!loading && (
                    <Box>
                        <SkipInputField
                            label="Full name"
                            name="name"
                            // value={formValues.name} kêu value của name
                            onChange={handleInputChange}
                            helperText="Name is required"
                        />
                        <SkipInputField
                            label="Phone number"
                            name="phoneNo"
                            type="number" // su dung regex de check so dien thoai
                            // value={formValues.email} kêu value của email
                            onChange={handleInputChange}
                            helperText="Phone number is required"
                            sx={{ mt: 2 }}
                        />
                        <SkipInputField
                            label="Email"
                            name="email"
                            // value={formValues.email} kêu value của email
                            onChange={handleInputChange}
                            helperText="Email is required"
                            sx={{ mt: 2 }}
                        />
                        <SkipInputField
                            label="Date of birth"
                            name="dob"
                            // value={formValues.address}
                            // onChange={handleInputChange} kêu value của address
                            helperText="Date of birth is required" 
                            sx={{ mt: 2 }}
                        />
                        <SkipInputField
                            label="Sex"
                            name="sex"
                            // value={formValues.address}
                            // onChange={handleInputChange} kêu value của address
                            helperText="Sex is required" 
                            sx={{ mt: 2 }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            Save Changes
                        </Button>
                    </Box>
                )}
            </Box>
            </Box>
        </Container>
    );
};

export default EditCustomerAccount;
