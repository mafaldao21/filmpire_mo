/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// eslint-disable-next-line import/no-cycle
import { Search, Sidebar } from '../index';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 600px');
  const isAuthenticated = true;

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ ml: 1 }}
            onClick={() => {}}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                // eslint-disable-next-line react/jsx-curly-brace-presence, quotes
                to={`/profile/:id`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  // eslint-disable-next-line max-len
                  src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mtsolar.us%2Fwp-content%2Fuploads%2F2020%2F04%2Favatar-placeholder.png&tbnid=gxtQQ6HgDoJ9OM&vet=12ahUKEwiTvpv6r7P-AhXwsCcCHb-zC7wQMygCegUIARDsAQ..i&imgrefurl=https%3A%2F%2Fwww.mtsolar.us%2Fabout-us%2Favatar-placeholder%2F&docid=EoEIg7ItqyQCCM&w=840&h=859&q=avatar%20placeholder%20image&ved=2ahUKEwiTvpv6r7P-AhXwsCcCHb-zC7wQMygCegUIARDsAQ"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.drawerBackground}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
