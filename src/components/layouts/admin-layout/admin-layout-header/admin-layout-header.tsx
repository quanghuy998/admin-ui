import { AppBar, Button, ClickAwayListener, Grow, Link, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import './admin-layout-header.scss';

import Typography from '@mui/material/Typography/Typography';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import IconButton from '@mui/material/IconButton/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar/Avatar';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { SyntheticEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

const AdminLayoutHeader = () => {
    const [open, setOpen] = useState(false);

    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <header className={`admin-layout-header is-sticky`}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <div className="logo">Orange</div>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <div className="admin-layout-header-section border-right">
                        <IconButton size="large" color="secondary" aria-label="notification">
                            <NotificationsActiveIcon />
                        </IconButton>
                    </div>
                    <div className="admin-layout-header-section admin-layout-header-user-information border-right">
                        <Avatar className="admin-layout-header-user-information__avatar">N</Avatar>
                        <div>
                            <div>Guillaume Musso</div>
                            <span>Director</span>
                        </div>
                    </div>
                    <div className="admin-layout-header-section">
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="menu"
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                <Link href="/login">
                                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                </Link>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default AdminLayoutHeader;
