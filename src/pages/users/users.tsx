import { CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import React from 'react';

import ModalConfirm from '../../components/modal-confirm/modal-confirm';
import { deleteUserSagaAction, useUsers } from '../../state/users';
import UserDetails from './user-details/user-details';
import CreateUser from './create-user/create-user';
import EditUser from './edit-user/edit-user';
import ViewUser from './view-user/view-user';

export enum ICRUDFeature {
    None,
    View,
    Create,
    Update,
    Delete,
}

const Users: React.FC = () => {
    const [feature, setFeature] = React.useState({ feature: ICRUDFeature.None, userId: 0 });
    const { users, isFetching } = useUsers();

    const dispatch = useDispatch();
    var user = users.find((_) => _.id === feature.userId);

    const handleSelectUser = (userId: number, feature: ICRUDFeature) => {
        setFeature({ feature, userId });
    };

    const handleCloseModal = () => {
        setFeature({ feature: ICRUDFeature.None, userId: 0 });
    };

    const handleDeleteUser = () => {
        dispatch(deleteUserSagaAction(feature.userId));
    };

    return (
        <div className="user">
            <h3>Manage Users</h3>
            {isFetching && <CircularProgress />}
            <UserDetails users={users} onSelected={handleSelectUser} />
            {user && (
                <ViewUser user={user} isOpen={feature.feature === ICRUDFeature.View} handleClose={handleCloseModal} />
            )}
            {user && (
                <EditUser user={user} isOpen={feature.feature === ICRUDFeature.Update} handleClose={handleCloseModal} />
            )}
            <CreateUser isOpen={feature.feature === ICRUDFeature.Create} handleClose={handleCloseModal} />
            {user && (
                <ModalConfirm
                    open={feature.feature === ICRUDFeature.Delete}
                    onClose={handleCloseModal}
                    onConfirm={handleDeleteUser}
                    message="Do you want to delete?"
                    header="Confirm"
                />
            )}
        </div>
    );
};

export default Users;
