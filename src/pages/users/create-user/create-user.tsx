import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React from 'react';

import './create-user.scss';
import { useDispatch } from 'react-redux';
import { createUserSagaAction } from '../../../state/users';
import { ICreateUserModal } from '../../../api/users/user.service';
import { createNotificationAction } from '../../../state/notifications';
import { ICreateNotificationModal } from '../../../state/notifications/types';

interface IProps {
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

const CreateUser: React.FC<IProps> = ({ isOpen, handleClose }) => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useDispatch();
    const handleOnSubmit = () => {
        dispatch(
            createUserSagaAction({
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                password: password.trim(),
                address: address.trim(),
            }),
        );
        handleClose();
    };

    return (
        <div className="create-user">
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3>Create User</h3>
                    <div className="create-user-form">
                        <div className="create-user-form-field">
                            <Typography>First Name</Typography>
                            <TextField fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="create-user-form-field">
                            <Typography>Last Name</Typography>
                            <TextField fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="create-user-form-field">
                            <Typography>Email</Typography>
                            <TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="create-user-form-field">
                            <Typography>Password</Typography>
                            <TextField fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="create-user-form-field">
                            <Typography>Address</Typography>
                            <TextField fullWidth value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="create-user-form-button">
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

export default CreateUser;
