import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import users from '../../asserts/fake-datas/users';
import Button from '../../components/button/button';
import './user.scss';
import { Delete, Edit, RemoveRedEye, Save } from '@mui/icons-material';

const Users = () => {
    let createTime = new Date(1546108200 * 1000);

    return (
        <div className="user">
            <div className="container">
                <h3>Manage Users</h3>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="left">First Name</TableCell>
                                <TableCell align="left">Last Name</TableCell>
                                <TableCell align="left">Created time</TableCell>
                                <TableCell align="left">Modified time</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {user.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {user.firstName}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {user.lastName}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {new Date(user.createdTime * 1000).toUTCString()}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {new Date(user.modifiedTime * 1000).toUTCString()}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" color="secondary">
                                            <RemoveRedEye />
                                        </IconButton>
                                        <IconButton aria-label="delete" color="primary">
                                            <Edit />
                                        </IconButton>
                                        <IconButton aria-label="delete" color="error">
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Users;
