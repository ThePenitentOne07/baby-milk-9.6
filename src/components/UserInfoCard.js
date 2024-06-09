// src/components/UserInfoCard.js
import React from 'react';
import { Card, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';

const UserInfoCard = ({ name }) => {
    return (
        <Box sx={{ flex: 1, mr: 3 }}>
            <Card sx={{ mb: 3, p: 2, border: 1, borderColor: 'grey.400' }}>
                <Typography variant="h6">
                    {name}
                </Typography>
            </Card>
            <Card sx={{ p: 2, border: 1, borderColor: 'grey.400' }}>
                <List>
                    <ListItem button component={RouterLink} to="#">
                        <ListItemText primary="Membership infor" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/purchase">
                        <ListItemText primary="Purchase history" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/toship">
                        <ListItemText primary="Purchase orders list" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/editAcc">
                        <ListItemText primary="Update account" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/password">
                        <ListItemText primary="Change password" />
                    </ListItem>
                </List>
            </Card>
        </Box>
    );
};

export default UserInfoCard;
