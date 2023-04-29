import { useRoles } from '../../state/roles';

const ManageRoles = () => {
    const { roles, isFetching } = useRoles();

    return (
        <div>
            <div className="container">
                <h3>Manage Roles</h3>
            </div>
        </div>
    );
};

export default ManageRoles;
