import axiosClient from '../axiosClient';

const authenticationApi = {
    getUsers() {
        const url = '/users';
        return axiosClient.get(url);
    },

    getUserById(id: number) {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
};

export default authenticationApi;
