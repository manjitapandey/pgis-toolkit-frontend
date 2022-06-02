import Login from '../views/Login';
import Organizations from '../views/Organizations';
import OrganizationsUsers from '../views/OrganizationUsers';
import IndividualOrganization from '../views/IndividualOrganization';
import IndividualProject from '../views/IndividualProject';
import Landing from '../views/Landing';

const indexRoutes = [
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/organizations/:id/projects/:uniqueId',
    name: 'Individual Project',
    component: IndividualProject,
    // authenticated: true,
  },
  {
    path: '/organizations/:id',
    name: 'Individual Organization',
    component: IndividualOrganization,
    // authenticated: true,
  },

  {
    path: '/new/:id',
    name: 'Individual Organization',
    component: IndividualOrganization,
    // authenticated: true,
  },
  {
    path: '/users',
    name: 'OrganizationsUsers',
    component: OrganizationsUsers,
    // authenticated: true,
  },
  {
    path: '/organizations',
    name: 'Organizations',
    component: Organizations,
    // authenticated: true,
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    // authenticated: true,
  },
];

export default indexRoutes;
