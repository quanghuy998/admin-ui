import { Box, Button, Input, Modal, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateUserSagaAction } from '../../../state/users';
import { IUser } from '../../../state/users/types';
import './edit-user.scss';

interface Props {
    user: IUser;
    isOpen: boolean;
    handleClose: any;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const EditUser: React.FC<Props> = ({ user, isOpen, handleClose }) => {
    const [firstName, setFirstName] = React.useState(user.firstName || '');
    const [lastName, setLastName] = React.useState(user.lastName || '');
    const [email, setEmail] = React.useState(user.email || '');
    const [address, setAddress] = React.useState(user.address || '');

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setAddress(user.address);
        }
    }, [user]);

    const dispatch = useDispatch();
    const handleOnSubmit = () => {
        dispatch(
            updateUserSagaAction({
                id: user.id,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                address: address.trim(),
                createdTime: user.createdTime,
                modifiedTime: user.modifiedTime,
            }),
        );
        handleClose();
    };

    return (
        <div className="edit-user">
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3>Edit user</h3>
                    <div id="modal-modal-description" className="edit-user-form">
                        <div className="edit-user-form-field">
                            <Typography>ID</Typography>
                            <TextField
                                value={user!.id}
                                disabled
                                fullWidth
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="edit-user-form-field">
                            <Typography>First Name</Typography>
                            <TextField fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="edit-user-form-field">
                            <Typography>Last Name</Typography>
                            <TextField fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="edit-user-form-field">
                            <Typography>Email</Typography>
                            <TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="edit-user-form-field">
                            <Typography>Address</Typography>
                            <TextField fullWidth value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="edit-user-form-button">
                            <Button color="success" variant="outlined" onClick={handleOnSubmit}>
                                Submit
                            </Button>
                            <Button color="error" variant="outlined" onClick={handleClose}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default EditUser;
