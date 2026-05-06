
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { RMDashboard } from '../features/rm/Dashboard';

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rm/dashboard',
  component: RMDashboard, 
});