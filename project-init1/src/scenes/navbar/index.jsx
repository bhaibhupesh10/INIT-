import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Typography, FormControl, Select, MenuItem, InputBase, Stack } from '@mui/material';
import { Home, Message, Work, Notifications, DarkMode, LightMode, Search } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setLogout } from '../../state';
import FlexBetween from 'components/FlexBetween';
import { useTheme } from '@mui/material';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const mode = theme.palette.mode;
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={theme.palette.background.alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="red"
          onClick={() => navigate('/home')}
          sx={{ '&:hover': { color: theme.palette.primary.light, cursor: 'pointer' } }}
        >
          INIT
        </Typography>
        <FlexBetween
          backgroundColor={theme.palette.neutral.light}
          borderRadius="9px"
          gap="3rem"
          padding="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Stack alignItems="center">
          <IconButton onClick={() => navigate('/home')}>
            <Home />
          </IconButton>
          <Typography variant="caption">Home</Typography>
        </Stack>
        <Stack alignItems="center">
          <IconButton onClick={() => navigate('/messaging')}>
            <Message />
          </IconButton>
          <Typography variant="caption">Message</Typography>
        </Stack>
        <Stack alignItems="center">
          <IconButton onClick={() => navigate('/jobs')}>
            <Work />
          </IconButton>
          <Typography variant="caption">Jobs</Typography>
        </Stack>
        <Stack alignItems="center">
          <IconButton onClick={() => navigate('/notifications')}>
            <Notifications />
          </IconButton>
          <Typography variant="caption">Notifications</Typography>
         
        </Stack>
        <FormControl variant="standard" value={fullName}>
          <Select
            value={fullName}
            sx={{
              backgroundColor: theme.palette.neutral.light,
              width: '150px',
              borderRadius: '0.25rem',
              p: '0.25rem 1rem',
              '& .MuiSvgIcon-root': {
                pr: '0.25rem',
                width: '3rem',
              },
              '& .MuiSelect-select:focus': {
                backgroundColor: theme.palette.neutral.light,
              },
            }}
            input={<InputBase />}
          >
            <MenuItem value={fullName}>
              <Typography>{fullName}</Typography>
            </MenuItem>
            <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
          </Select>
        </FormControl>
        <IconButton onClick={() => dispatch(setMode())}>
          {mode === 'dark' ? <DarkMode /> : <LightMode sx={{ color: theme.palette.neutral.dark }} />}
        </IconButton>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
