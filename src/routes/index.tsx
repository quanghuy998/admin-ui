import AdminLayout from '../components/layouts/admin-layout/admin-layout';
import EmptyLayout from '../components/layouts/empty-layout/empty-layout';
import DashBoard from '../pages/dash-board/dash-board';
import ManageRoles from '../pages/roles/roles';
import Login from '../pages/login/login';
import Users from '../pages/users/users';
import Home from '../pages/home/home';

interface IRoute {
    path: string;
    component: any;
    layout: any;
}

export const publicRoutes: IRoute[] = [
    { path: '/login', component: Login, layout: EmptyLayout },
    { path: '/', component: Home, layout: null },
];

export const privateRoutes: IRoute[] = [
    { path: '/dashboard', component: DashBoard, layout: AdminLayout },
    { path: '/users', component: Users, layout: AdminLayout },
    { path: '/roles', component: ManageRoles, layout: AdminLayout },
];
