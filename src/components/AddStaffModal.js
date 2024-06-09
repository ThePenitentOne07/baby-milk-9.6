// AddStaffModal.js
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AddButton = styled(Button)`
  background-color: black;
  color: white;
  &:hover {
    background-color: darkgray;
  }
`;

const AddStaffModal = ({ open, handleClose, handleAddStaff }) => {
  const [newStaff, setNewStaff] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    email: '',
    phoneNumber: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  const handleSubmit = () => {
    handleAddStaff(newStaff);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          Add staff
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="First name" name="firstName" value={newStaff.firstName} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last name" name="lastName" value={newStaff.lastName} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Date of birth" name="dateOfBirth" value={newStaff.dateOfBirth} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address" name="address" value={newStaff.address} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" name="email" value={newStaff.email} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone number" name="phoneNumber" value={newStaff.phoneNumber} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Role" name="role" value={newStaff.role} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} container justifyContent="space-between">
            <AddButton onClick={handleSubmit}>Add</AddButton>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AddStaffModal;
