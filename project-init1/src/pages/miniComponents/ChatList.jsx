// ChatList.js
import React from 'react';
import { Typography, IconButton, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChatList = () => {
    const navigate = useNavigate();

    const handleChatClick = (user) => {
        // Navigate to the specific chat view with the user
        navigate(`/chat/${user}`);
    };

    return (
        <div style={{ height: '100%', width: '100%', padding:0 }}>
            {/* <Typography variant="h6" style={{ fontSize: 15, fontWeight: 500, color: 'gray', marginBottom: 10 }}>
                Chats
            </Typography> */}
            <List>
                <ListItem button onClick={() => handleChatClick('bhupesh-choudhary')}>
                    <ListItemAvatar>
                        <Avatar alt="Bhupesh Choudhary" src="https://example.com/bhupesh-avatar.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Bhupesh Choudhary" secondary="Hello there!" />
                </ListItem>
                {/* Add more ListItem elements for other chats */}
            </List>
        </div>
    );
};

export default ChatList;
