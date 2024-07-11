import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../shared/logo/Logo';

// components
import { IconBellRinging, IconMenu } from '@tabler/icons';

const HeaderLoggedOut = (props) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.primary.main, // Updated color
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.primary, // Updated text color
  }));

  const ButtonStyled = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary, // Updated button text color
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline',
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton> */}
        <Logo />
        {/* <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === 'object' && {
              color: 'primary.main',
            }),
          }}
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>
        </IconButton> */}
        <Box flexGrow={1} />
        <Stack spacing={2} direction="row" alignItems="center">
          <ButtonStyled component={Link} to="/about">
            About
          </ButtonStyled>
          <ButtonStyled component={Link} to="/contact">
            Contact Us
          </ButtonStyled>
          <ButtonStyled component={Link} to="/auth/login">
            Log In
          </ButtonStyled>
          <ButtonStyled component={Link} to="/auth/register">
            Register
          </ButtonStyled>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

HeaderLoggedOut.propTypes = {
  sx: PropTypes.object,
};

export default HeaderLoggedOut;
