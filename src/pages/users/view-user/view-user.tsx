import React from 'react';
import { IUser } from '../../../state/users/types';

import './view-user.scss';
import { Box, Modal } from '@mui/material';

interface IProps {
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

const ViewUser: React.FC<IProps> = ({ user, isOpen, handleClose }) => {
    return (
        <div className="view-user">
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3 id="modal-modal-title">User details</h3>
                    <div className="view-user-form">
                        <div className="view-user-form-field">
                            <p>ID</p>
                            <p>{user.id}</p>
                        </div>
                        <div className="view-user-form-field">
                            <p>First Name</p>
                            <p>{user.firstName}</p>
                        </div>
                        <div className="view-user-form-field">
                            <p>Last Name</p>
                            <p>{user.lastName}</p>
                        </div>
                        <div className="view-user-form-field">
                            <p>Email</p>
                            <p>{user.email}</p>
                        </div>
                        <div className="view-user-form-field">
                            <p>Address</p>
                            <p>{user.address}</p>
                        </div>
                        <div className="view-user-form-field">
                            <p>Created Time</p>
                            <p>{user.createdTime}</p>
                        </div>
                        <div className="view-user-form-field">
                            <p>Modified Time</p>
                            <p>{user.modifiedTime}</p>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ViewUser;
