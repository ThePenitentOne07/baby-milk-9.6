// StaffDetailModal.js
import React from 'react';
import { Modal, Box, Typography, TextField, Button, Avatar, Grid } from '@mui/material';
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
  overflow: 'auto', // Ensure scrolling if content overflows
  maxHeight: '80vh' // Limit the maximum height of the modal
};

const ProfilePicture = styled(Avatar)`
  width: 150px;
  height: 150px;
  background-color: grey;
  margin-bottom: 16px;
`;

const StaffDetailModal = ({ open, handleClose, staff }) => {
  if (!staff) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12} container justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{staff.name}</Typography>
            <Button variant="contained" color="error">Delete</Button>
          </Grid>
          <Grid item xs={12} container justifyContent="center" alignItems="center" direction="column">
            <ProfilePicture src={staff.profilePicture} alt={`${staff.name} profile`} />
            <Typography>Role: {staff.role}</Typography>
            <Typography>Added on: {staff.addedOn}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Employee details</Typography>
            <TextField label="First Name" value={staff.firstName} fullWidth margin="normal" />
            <TextField label="Last Name" value={staff.lastName} fullWidth margin="normal" />
            <TextField label="Phone number" value={staff.phoneNumber} fullWidth margin="normal" />
            <TextField label="Email" value={staff.email} fullWidth margin="normal" />
            <TextField label="Address" value={staff.address} fullWidth margin="normal" />
            <TextField label="Date of birth" value={staff.dateOfBirth} fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12} container justifyContent="space-between">
            <Button variant="contained" color="primary">Save</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default StaffDetailModal;
