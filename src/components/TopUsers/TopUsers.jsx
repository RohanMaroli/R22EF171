
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../api/client';

function TopUsers() {
  
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users!</p>;


  const topUsers = [...users]
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 5);

  return (
    <Card sx={{
        width: '100%',
        overflow: 'auto',
        maxHeight: { xs: '70vh', sm: '80vh' }
      }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Top Users
        </Typography>
        <List>
          {topUsers.map(user => (
            <ListItem key={user.id}>
              <ListItemText 
                primary={user.username} 
                secondary={`${user.postCount} posts`} 
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default TopUsers;