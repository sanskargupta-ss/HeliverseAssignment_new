import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Box, Grid } from '@mui/material';
import UserCard from '../UserCard'

const Groups = () => {
  const groups = useSelector((state) => state.groups);

  return (
    <Container>
      {groups.map((group) => (
        <Box key={group.groupName} mt={4}>
          <Typography variant="h4" mb={2}>{group.groupName}</Typography>
          <Grid container spacing={2}>
            {group.members.map((dataObj) => (
              <Grid key={dataObj.id} item xs={12} sm={6} md={4} lg={3}>
               <UserCard
                  first_name={dataObj?.first_name}
                  last_name={dataObj?.last_name}
                  avatar={dataObj?.avatar}
                  email={dataObj?.email}
                  gender={dataObj?.gender}
                  domain={dataObj?.domain}
                  available={dataObj?.available}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Groups;
