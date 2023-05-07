import { Divider, MenuItem, MenuList, ListItemIcon, Link } from '@mui/material';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import BusinessIcon from '@mui/icons-material/Business';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import RttIcon from '@mui/icons-material/Rtt';

import './admin-layout-menu.scss';

const AdminLayoutMenu = () => {
    return (
        <div className="admin-layout-menu">
            <div className="admin-layout-menu-container">
                <MenuList>
                    <Link href="/dashboard">
                        <MenuItem>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        <ListItemIcon>
                            <AppsIcon />
                        </ListItemIcon>
                        <ListItemText>Apps</ListItemText>
                    </MenuItem>
                    <Divider />
                    <div className="admin-layout-menu-item__heading">Identity</div>
                    <Link href="/users">
                        <MenuItem>
                            <ListItemIcon>
                                <EmojiPeopleIcon />
                            </ListItemIcon>
                            <ListItemText>Users</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/roles">
                        <MenuItem>
                            <ListItemIcon>
                                <BusinessIcon />
                            </ListItemIcon>
                            <ListItemText>Roles</ListItemText>
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        <ListItemIcon>
                            <RttIcon />
                        </ListItemIcon>
                        <ListItemText>Claims</ListItemText>
                    </MenuItem>
                    <Divider />
                    <div className="admin-layout-menu-item__heading">Components</div>
                    <MenuItem>
                        <ListItemIcon>
                            <QuestionMarkIcon />
                        </ListItemIcon>
                        <ListItemText>Questions</ListItemText>
                    </MenuItem>
                </MenuList>
            </div>
        </div>
    );
};

export default AdminLayoutMenu;
