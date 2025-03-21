
import React, { useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button, Box, CircularProgress } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPosts } from '../../api/client';
import useInterval from '../../useInterval';

function TrendingPosts() {
  const [cursor, setCursor] = useState(null);
  
  
  const queryClient = useQueryClient();
  
 
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', cursor],
    queryFn: () => fetchPosts(cursor),
    keepPreviousData: true
  });
  
  
  useInterval(() => {
    queryClient.invalidateQueries(['posts']);
  }, 30000);

  if (isLoading && !data) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
      <CircularProgress />
    </Box>
  );
  
  if (error) return <p>Error loading posts!</p>;

  
  const trendingPosts = [...(data?.data || [])]
    .sort((a, b) => b.commentCount - a.commentCount);

 
  const loadMore = () => {
    if (data?.nextCursor) {
      setCursor(data.nextCursor);
    }
  };

  return (
    <Card sx={{
      width: '100%',
      overflow: 'auto',
      maxHeight: { xs: '70vh', sm: '80vh' }
    }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Trending Posts
        </Typography>
        <List>
          {trendingPosts.map(post => (
            <ListItem key={post.id}>
              <ListItemText 
                primary={post.content} 
                secondary={`${post.commentCount} comments • Posted on ${new Date(post.timestamp).toLocaleDateString()}`} 
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Button 
            variant="contained" 
            onClick={loadMore} 
            disabled={!data?.nextCursor}
          >
            Load More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TrendingPosts;