// src/OrderList.js
import React, { useState } from 'react';
import { Container, Grid, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box } from '@mui/material';
import OrderCardStaff from '../components/OrderCardStaff';

const orders = [
  // Sample data
  { id: 1, customerName: 'John Doe', productName: 'Product 1', phoneNumber: '1234567890', address: '123 Main St' },
  { id: 2, customerName: 'Jane Smith', productName: 'Product 2', phoneNumber: '0987654321', address: '456 Elm St' },
];

const OrderListStaff = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [denyReason, setDenyReason] = useState('');
  const [isDenyFormOpen, setIsDenyFormOpen] = useState(false);

  const handleCardClick = (order) => {
    setSelectedOrder(order);
  };

  const handleClose = () => {
    setSelectedOrder(null);
  };

  const handleAccept = () => {
    // Implement accept logic here
    setSelectedOrder(null);
  };

  const handleDeny = () => {
    setIsDenyFormOpen(true);
  };

  const handleDenySubmit = () => {
    // Implement deny logic here with denyReason
    setIsDenyFormOpen(false);
    setSelectedOrder(null);
    setDenyReason('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Order List</Typography>
      <Grid container spacing={2}>
        {orders.map(order => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
            <OrderCardStaff order={order} onClick={() => handleCardClick(order)} />
          </Grid>
        ))}
      </Grid>
      {selectedOrder && (
        <Dialog open={true} onClose={handleClose}>
          <DialogTitle>Order Details</DialogTitle>
          <DialogContent>
            <Typography>Customer Name: {selectedOrder.customerName}</Typography>
            <Typography>Product Name: {selectedOrder.productName}</Typography>
            <Typography>Phone Number: {selectedOrder.phoneNumber}</Typography>
            <Typography>Address: {selectedOrder.address}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAccept} color="primary">Accept</Button>
            <Button onClick={handleDeny} color="secondary">Deny</Button>
          </DialogActions>
        </Dialog>
      )}
      <Dialog open={isDenyFormOpen} onClose={() => setIsDenyFormOpen(false)}>
        <DialogTitle>Reason for Denial</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Reason"
            fullWidth
            value={denyReason}
            onChange={(e) => setDenyReason(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDenyFormOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleDenySubmit} color="secondary">Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default OrderListStaff;
