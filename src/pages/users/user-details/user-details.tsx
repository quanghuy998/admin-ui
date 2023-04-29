import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Delete, Edit, RemoveRedEye } from '@mui/icons-material';
import { IUser } from '../../../state/users/types';
import React, { useState } from 'react';
import { ICRUDFeature } from '../users';
import { deleteUserSagaAction } from '../../../state/users';
import { useDispatch } from 'react-redux';

interface IProps {
    users: IUser[];
    onSelected: any;
}

const UserDetails: React.FC<IProps> = ({ users, onSelected }) => {
    const dispatch = useDispatch();

    const handleOnSubmit = (user: IUser) => {
        dispatch(deleteUserSagaAction(user.id));
    };

    return (
        <div className="user-details">
            <Button variant="contained" color="success" onClick={() => onSelected(0, ICRUDFeature.Create)}>
                Create User
            </Button>
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
                                    {new Date(user.createdTime).toUTCString()}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {new Date(user.modifiedTime).toUTCString()}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        aria-label="delete"
                                        color="secondary"
                                        onClick={() => onSelected(user.id, ICRUDFeature.View)}
                                    >
                                        <RemoveRedEye />
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        color="primary"
                                        onClick={() => onSelected(user.id, ICRUDFeature.Update)}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        color="error"
                                        onClick={() => onSelected(user.id, ICRUDFeature.Delete)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserDetails;
