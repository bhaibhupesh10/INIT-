import React from 'react';
import { IconButton, TextField, Button, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachmentSharpIcon from '@mui/icons-material/AttachmentSharp';
import GifSharpIcon from '@mui/icons-material/GifSharp';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import '../miniComponents/styles/Messaging.css';
import Navbar from 'scenes/navbar';
import Contact from './Contact';
import ChatList from './ChatList';
import Footer from './Footer';

const Messaging = () => {
    const containerStyle = {
        width: '100%',             // 60% of the window width
        margin: '0 auto',         // Center the container
        padding: '20px',          // Add some padding for content
        backgroundColor: '#f0f0f0', // Light gray background
        border: '1px solid #ccc', // Light border
        boxSizing: 'border-box',  // Include padding in width/height
        overflow: 'hidden',       // Ensure content doesn't overflow
      };
    return (
    <>
        <Navbar/>
        <div style={containerStyle}>
        <div className='messaging'>
            <div className='messaging__left'>
                <div className='messagingLeftSidebar__left'>
                    <div className='sidebarTop__option'>
                        <Typography variant="h6" style={{ fontSize: 15, fontWeight: 500, color: 'gray' }}>
                            Messaging
                        </Typography>
                        <div className='sidebarTopIcon__option'>
                            <IconButton style={{ color: 'gray', cursor: 'pointer', marginRight: 5 }}>
                                <EditIcon />
                            </IconButton>
                            <IconButton style={{ color: 'gray', cursor: 'pointer', marginLeft: 5 }}>
                                <MoreHorizIcon />
                            </IconButton>
                        </div>
                    </div>
                    <TextField 
                        placeholder='Search messages'
                        variant="outlined"
                        fullWidth
                        style={{ margin: 0 }}
                    />
                    <div className='sidebarBottom__option'>
                        <Typography variant="h6" style={{ color: 'black', fontSize: 14, fontWeight: 500, alignSelf: 'left' }}>

                            <ChatList />
                            
                        </Typography>
                        <Typography variant="body1" style={{ color: 'gray', fontSize: 14, fontWeight: 300, alignSelf: 'center', marginTop: 50, textAlign: 'center' }}>
                            Reach out and start a conversation.
                        </Typography>
                        <Typography className='start__message' variant="body1" style={{ color: '#C2A3E6', fontSize: 14, fontWeight: 500, alignSelf: 'center', marginTop: 40 }}>
                            Start a new message
                        </Typography>
                        <Typography className='load__conversation' variant="body1" style={{ color: 'gray', fontSize: 14, fontWeight: 500, alignSelf: 'center', marginTop: 20 }}>
                            Load more conversations
                        </Typography>
                    </div>
                </div>

                <div className='messagingLeftSidebar__right'>
                    <div className='messagingRight__top'>
                        <Typography variant="h6" style={{ fontSize: 15, fontWeight: 500, color: 'gray' }}>
                            New message
                        </Typography>
                    </div>
                    <Contact/>
                    {/* <div className='messagingRight__middle'>
                        <TextField 
                            placeholder='Type a number or multiple names'
                            variant="outlined"
                            fullWidth
                        />
                    </div> */}
                    <div className='messagingRight__bottom'>
                        {/* <div className='messagingRightBottom__top'>
                            <TextField 
                                placeholder='Write a message...'
                                variant="outlined"
                                fullWidth
                                style={{ outline: 'none', border: 'none', padding: 5 }}
                            />
                            <IconButton style={{ color: 'gray', marginLeft: 'auto', cursor: 'pointer' }}>
                                <ExpandLessIcon />
                            </IconButton>
                        </div> */}
                        <div className='messagingRightBottom__bottom'>
                            <div className='messagingRightBottomBottom__left'>
                                <IconButton>
                                    <ImageOutlinedIcon />
                                </IconButton>
                                <IconButton>
                                    <AttachmentSharpIcon />
                                </IconButton>
                                <IconButton>
                                    <GifSharpIcon />
                                </IconButton>
                                <IconButton>
                                    <SentimentSatisfiedSharpIcon />
                                </IconButton>
                                <IconButton>
                                    <VideoCallSharpIcon />
                                </IconButton>
                            </div>
                            <div className='messagingRightBottomBottom__right'>
                                <Button 
                                    style={{ cursor: 'not-allowed', backgroundColor: 'lightgray', color: 'gray', height: 20, borderRadius: 10 }}
                                    disabled
                                >
                                    Send
                                </Button>
                                <IconButton>
                                    <MoreHorizIcon style={{ cursor: 'pointer', color: 'gray' }} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='messaging__right'>
                <div className='messageRightImage__container'>
                    <img
                        style={{ height: 300, width: 300, cursor: 'pointer' }}
                        src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
                        alt="Advertisement"
                    />
                </div>
                <div className='messageRight__bottom'>
                    
                   
                   
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>         );
};

export default Messaging;



// // Messaging.js
// import React from 'react';
// import { IconButton, TextField, Button, Box, Typography } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
// import AttachmentSharpIcon from '@mui/icons-material/AttachmentSharp';
// import GifSharpIcon from '@mui/icons-material/GifSharp';
// import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
// import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
// import Navbar from 'scenes/navbar';
// import ChatList from './ChatList';  // Import the ChatList component

// const Messaging = () => {
//     const containerStyle = {
//         width: '60%',
//         margin: '0 auto',
//         padding: '20px',
//         backgroundColor: '#f0f0f0',
//         border: '1px solid #ccc',
//         boxSizing: 'border-box',
//         overflow: 'hidden',
//         display: 'flex',  // Use flex to arrange the layout
//     };

//     return (
//         <>
//             <Navbar />
//             <div style={containerStyle}>
//                 <div className='messaging' style={{ display: 'flex', width: '100%' }}>
//                     <div className='messaging__left' style={{ flex: 1 }}>
//                         <ChatList />  {/* Include the ChatList component */}
//                     </div>
//                     <div className='messaging__right' style={{ flex: 2 }}>
//                         {/* Existing content for messaging */}
//                         <div className='messageRightImage__container'>
//                             <img
//                                 style={{ height: 300, width: 300, cursor: 'pointer' }}
//                                 src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
//                                 alt="Advertisement"
//                             />
//                         </div>
//                         <div className='messageRight__bottom'>
//                             <div className='messageRightBottom__option'>
//                                 <Typography variant="body2" style={{ fontSize: 13, fontWeight: 300, margin: 8, color: 'gray' }}>
//                                     About
//                                 </Typography>
//                                 <Typography variant="body2" style={{ fontSize: 13, fontWeight: 300, margin: 8, color: 'gray' }}>
//                                     Accessibility
//                                 </Typography>
//                                 <Typography variant="body2" style={{ fontSize: 13, fontWeight: 300, margin: 8, color: 'gray' }}>
//                                     Help center
//                                 </Typography>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Messaging;
