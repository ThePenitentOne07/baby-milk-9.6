// src/components/OrderCard.js
import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const OrderCard = ({ order }) => {
    return (
        <Card sx={{ mb: 3, p: 2, border: 1, borderColor: 'grey.400' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Order #{order.id}</Typography>
                <Typography variant="subtitle1">{order.status}</Typography>
            </Box>
            <Typography variant="body1">Customer: {order.customerName}</Typography>
            <Typography variant="body1">Total: ${order.total}</Typography>
            <Typography variant="body1">Delivery Address: {order.address}</Typography>
        </Card>
    );
};

export default OrderCard;
