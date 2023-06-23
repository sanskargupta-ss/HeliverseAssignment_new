import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Typography,
  Button,
} from '@mui/material';
import { Snackbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addGroup } from '../Store/groupSlice';
import UserCard from '../UserCard'

const styles = {
  root: {
    margin: 'auto',
    paddingTop: '20px',
  },
  card: {
    background: 'white',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '2px 6px 10px -7px rgba(112,112,112,1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: '50%',
    background: '#dedcdc',
    width: '50px',
    height: '50px',
  },
  intro: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  name: {
    color: '#4287f5',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '25px',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  additionalInfoLabel: {
    fontWeight: '500',
    fontSize: '16px',
    color: '#333333',
  },
  additionalInfo: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#4287f5',
  },
  filterContainer: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '2px 6px 10px -7px rgba(112,112,112,1)',
  },
  filterHeader: {
    marginBottom: '20px',
  },
  filterLabel: {
    marginBottom: '10px',
  },
  filterButtons: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  clearButton: {
    marginBottom: '20px',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
};

const Dashboard = () => {
  const users = useSelector((state) => state.users);
  const groups = useSelector((state)=>state.groups);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [genderFilter, setGenderFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const dispatch = useDispatch()

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };

  const filteredUsers = users.filter((user) => {
    if (
      (genderFilter && user.gender !== genderFilter) ||
      (domainFilter && user.domain !== domainFilter) ||
      (availabilityFilter !== '' && user.available !== (availabilityFilter === 'Available'))
    ) {
      return false;
    }
    return true;
  });

  const displayedUsers = filteredUsers.slice(startIndex, endIndex);

  const handleClearFilters = () => {
    setGenderFilter('');
    setDomainFilter('');
    setAvailabilityFilter('');
  };

  const handleCreateTeam = () => {
    const selectedUser = displayedUsers.map((user) => user);
    const groupName = `Group ${groups.length + 1}`;
    dispatch(addGroup({ groupName, members: selectedUser }));
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };
  

  return (
    <Container sx={styles.root} disableGutters>
      <Box sx={styles.filterContainer}>
        <Box>
          <Typography variant="h6" component="div" sx={styles.filterHeader}>
            Filters:
          </Typography>
          <Box sx={styles.filterButtons}>
            <Select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
              <MenuItem value="">All Genders</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Agender">Agender</MenuItem>
              <MenuItem value="Bigender">Bigender</MenuItem>
              <MenuItem value="Polygender">Polygender</MenuItem>
              <MenuItem value="Non-binary">Non-binary</MenuItem>
              <MenuItem value="Genderfluid">Genderfluid</MenuItem>
              <MenuItem value="Genderqueer">Genderqueer</MenuItem>


            </Select>
            <Select value={domainFilter} onChange={(e) => setDomainFilter(e.target.value)}>
              <MenuItem value="">All Domains</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Management">Management</MenuItem>
              <MenuItem value="UI Designing">UI Designing</MenuItem>
              <MenuItem value="Business Development">Business Development</MenuItem>

            </Select>
            <Select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
            >
              <MenuItem value="">All Availability</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Not Available">Not Available</MenuItem>
            </Select>
          </Box>
        </Box>

          <Box>
            <Button sx={styles.clearButton} variant="outlined" onClick={handleClearFilters}>
              Clear Filters
            </Button>
            <Button variant="outlined" onClick={handleCreateTeam}>
              Create Group
            </Button>
          </Box>
      </Box>
      <Grid container spacing={3}>
        {displayedUsers.map((dataObj) => (
          <Grid key={dataObj.id} item xs={12} sm={6} md={4} lg={3}>
            <Box sx={styles.card}>
              <UserCard
                first_name={dataObj?.first_name}
                last_name={dataObj?.last_name}
                avatar={dataObj?.avatar}
                email={dataObj?.email}
                gender={dataObj?.gender}
                domain={dataObj?.domain}
                available={dataObj?.available}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
        <Box sx={{...styles.paginationContainer, marginBottom: '30px'}}>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
        </Box>
        <Snackbar
        open={isAlertOpen}
        autoHideDuration={3000} // Adjust the duration as per your requirements
        onClose={handleAlertClose}
        message="Groups successfully created."
      />
    </Container>
  );
};

export default Dashboard;
