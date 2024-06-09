// src/pages/OrderList.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Alert } from '@mui/material';
import apiService from '../app/apiService';
import OrderCard from '../components/OrderCard';
import UserInfoCard from '../components/UserInfoCard';

const OrderList = () => {
    // const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await apiService.get('/orders/delivering');
    //             setOrders(response.data);
    //             setError(null);
    //         } catch (err) {
    //             setError('Failed to fetch orders');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchOrders();
    // }, []);

    const orders = [
        {
            "id": 1,
            "customerName": "John Doe",
            "total": 100.50,
            "status": "On Delivery",
            "address": "123 Main St, Anytown, USA"
        },
        {
            "id": 2,
            "customerName": "Jane Smith",
            "total": 75.00,
            "status": "On Delivery",
            "address": "456 Elm St, Anytown, USA"
        }
    ];
    

    return (
        <Container>
            <Box sx={{ display: 'flex', mt: 5 }}>
            <UserInfoCard name="Nguyen Dinh Bao" />
                <Box sx={{ flex: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Orders
                    </Typography>
                    {loading && <Typography>Loading...</Typography>}
                    {error && <Alert severity="error">{error}</Alert>}
                    {!loading && orders.length === 0 && <Typography>No orders are currently being delivered.</Typography>}
                    {!loading && orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default OrderList;
