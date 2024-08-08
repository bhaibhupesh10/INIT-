// import React from 'react'
// import PostsWidget from 'scenes/widgets/PostsWidget';
// import MyPostWidget from 'scenes/widgets/MyPostWidget';

// function Posts() {

//     const containerStyle = {
//         width: '100%',             // 60% of the window width
//         margin: '0 auto',         // Center the container
//         padding: '20px',          // Add some padding for content
//         backgroundColor: '#f0f0f0', // Light gray background
//         border: '1px solid #ccc', // Light border
//         boxSizing: 'border-box',  // Include padding in width/height
//         overflow: 'hidden',       // Ensure content doesn't overflow
//       };

//   return (
//     <div style={containerStyle}>
//         <h1>Posts</h1>

        
      
//   {/* <MyPostWidget picturePath={user.picturePath} /> */}
//           {/* <PostsWidget userId={userId} isProfile /> */}
//         </div>
//   )
// }

// export default Posts



import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import { useSelector } from 'react-redux';

const Posts = () => {
  const user = useSelector((state) => state.user); // Assuming user data is stored in Redux
  const userId = user?.id; // Assuming user has an id property
  const containerRef = useRef(null);

  const containerStyle = {
    width: '100%',
    height: '80vh', // Fixed height for the container
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    overflowY: 'auto', // Enable vertical scrolling
  };

  useEffect(() => {
    // Scroll to the bottom when the component mounts
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  if (!user) return null;

  return (
    <div ref={containerRef} style={containerStyle}>
      <h1>Posts</h1>
      <Box>
        <MyPostWidget picturePath={user.picturePath} />
        <Box m="2rem 0" />
        <PostsWidget userId={userId} isProfile />
      </Box>
    </div>
  );
};

export default Posts;
