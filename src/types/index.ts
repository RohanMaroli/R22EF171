
export interface Post {
    id: string;
    userId: string;
    content: string;
    timestamp: string;
    commentCount: number;
  }
  
  export interface User {
    id: string;
    username: string;
    postCount: number;
  }