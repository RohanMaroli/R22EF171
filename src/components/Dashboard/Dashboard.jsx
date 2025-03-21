import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container, Box, Tabs, Tab } from '@mui/material';
import TopUsers from '../TopUsers/TopUsers';
import TrendingPosts from '../TrendingPosts/TrendingPosts';

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{
        padding: { xs: 1, sm: 2, md: 3 },
      }}>
      <Box sx={{ width: '100%', marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          Social Media Analytics
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Trending Posts" />
            <Tab label="Top Users" />
          </Tabs>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          {selectedTab === 0 && <TrendingPosts />}
          {selectedTab === 1 && <TopUsers />}
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;