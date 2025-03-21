
import axios from 'axios';


const API_URL = 'https://jsonplaceholder.typicode.com';


const MOCK_USERS = [
  { id: '1', username: 'user1', postCount: 15 },
  { id: '2', username: 'user2', postCount: 20 },
  { id: '3', username: 'user3', postCount: 5 },
  { id: '4', username: 'user4', postCount: 12 },
  { id: '5', username: 'user5', postCount: 8 },
  { id: '6', username: 'user6', postCount: 7 },
];

const MOCK_POSTS = [
  { id: '1', userId: '1', content: 'This is post 1', timestamp: '2023-01-01', commentCount: 5 },
  { id: '2', userId: '2', content: 'This is post 2', timestamp: '2023-01-02', commentCount: 10 },
  { id: '3', userId: '3', content: 'This is post 3', timestamp: '2023-01-03', commentCount: 3 },
  { id: '4', userId: '1', content: 'This is post 4', timestamp: '2023-01-04', commentCount: 7 },
  { id: '5', userId: '2', content: 'This is post 5', timestamp: '2023-01-05', commentCount: 12 },
  { id: '6', userId: '4', content: 'This is post 6', timestamp: '2023-01-06', commentCount: 2 },
];


export const fetchUsers = async () => {
  
  return MOCK_USERS;
  
 
};


export const fetchPosts = async (cursor = null, limit = 10) => {
  
  const startIndex = cursor ? parseInt(cursor) : 0;
  const endIndex = startIndex + limit;
  const posts = MOCK_POSTS.slice(startIndex, endIndex);
  const nextCursor = endIndex < MOCK_POSTS.length ? endIndex.toString() : null;
  
  return {
    data: posts,
    nextCursor: nextCursor
  };
  
};