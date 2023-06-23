import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const styles = {
    root: {
      margin: 'auto',
      paddingTop: '20px',
    },
    card: {
      background: 'white',
      borderRadius: '8px',
      padding: '1rem',
    //   boxShadow: '2px 6px 10px -7px rgba(112,112,112,1)',
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

const index = ({
    first_name,
    last_name,
    avatar,
    email,
    gender,
    domain,
    available
}) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.intro}>
        <Typography
          sx={styles.name}
        >{`${first_name} ${last_name}`}</Typography>
        <Avatar
          sx={{ ...styles.avatar, ...styles.flexContainer }}
          src={avatar}
        />
      </Box>
      <Box sx={styles.infoContainer}>
        <Typography sx={styles.additionalInfoLabel}>Email:</Typography>
        <Typography sx={styles.additionalInfo}>{email}</Typography>
      </Box>
      <Box sx={styles.infoContainer}>
        <Typography sx={styles.additionalInfoLabel}>Gender:</Typography>
        <Typography sx={styles.additionalInfo}>{gender}</Typography>
      </Box>
      <Box sx={styles.infoContainer}>
        <Typography sx={styles.additionalInfoLabel}>Domain:</Typography>
        <Typography sx={styles.additionalInfo}>{domain}</Typography>
      </Box>
      <Box sx={styles.infoContainer}>
        <Typography sx={styles.additionalInfoLabel}>Availability:</Typography>
        <Typography sx={styles.additionalInfo}>
          {available ? "Available" : "Not Available"}
        </Typography>
      </Box>
    </Box>
  );
};

export default index;
