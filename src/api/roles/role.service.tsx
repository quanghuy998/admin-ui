import config from '../../config/config';
import { IRole } from '../../state/roles/types';
import { getAsync } from '../common/api-service';

export const getRolesAsync = async (): Promise<IRole[] | undefined> => {
    const response = await getAsync(`${config.identityServiceUrl}api/roles`);
    if (response.error || !response.data) return;
    return response.data;
};
