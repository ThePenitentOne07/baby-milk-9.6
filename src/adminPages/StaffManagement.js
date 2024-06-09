// StaffManagement.js
import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Button, Grid } from '@mui/material';
import StaffCard from '../components/StaffCard';
import StaffDetailModal from '../components/StaffDetailModal';
// import StaffDetailModal from './StaffDetailModal';
import AddStaffModal from '../components/AddStaffModal';
const initialStaffList = [
    {
      name: 'Staff 1',
      role: 'Employee',
      addedOn: '30/2/2022',
      firstName: 'A',
      lastName: 'Nguyen Van',
      phoneNumber: '(717) 550-1675',
      email: 'eg@gmail.com',
      address: 'Nguyen Van Tang',
      dateOfBirth: '6/12/1997',
    },
    // Add other staff details here...
  ];
  
  function StaffManagement() {
    const [staffList, setStaffList] = useState(initialStaffList);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleAddStaff = (newStaff) => {
      const newStaffWithName = {
        ...newStaff,
        name: `${newStaff.firstName} ${newStaff.lastName}`,
        addedOn: new Date().toLocaleDateString(),
      };
      setStaffList([...staffList, newStaffWithName]);
    };
  
    const handleCardClick = (staff) => {
      setSelectedStaff(staff);
    };
  
    const handleCloseDetailModal = () => {
      setSelectedStaff(null);
    };
  
    const handleOpenAddModal = () => {
      setAddModalOpen(true);
    };
  
    const handleCloseAddModal = () => {
      setAddModalOpen(false);
    };
  
    const filteredStaffList = staffList.filter(staff =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4">Staff</Typography>
          <Button onClick={handleOpenAddModal}>+ Add staff</Button>
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search staff"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mb: 2 }}
        />
        <Grid container spacing={2}>
          {filteredStaffList.map(staff => (
            <Grid item xs={12} key={staff.name}>
              <StaffCard staff={staff} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
        <StaffDetailModal open={!!selectedStaff} handleClose={handleCloseDetailModal} staff={selectedStaff} />
        <AddStaffModal open={isAddModalOpen} handleClose={handleCloseAddModal} handleAddStaff={handleAddStaff} />
      </Container>
    );
  }
  
  export default StaffManagement;
