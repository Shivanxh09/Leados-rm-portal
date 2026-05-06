import { createRoute, useNavigate } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { RMDashboard } from '../features/rm/Dashboard';

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rm/dashboard',
  component: () => {
    const navigate = useNavigate();
    return <RMDashboard onViewLead={(id) => navigate({ to: '/rm/leads/$leadId', params: { leadId: id } })} />;
  },
});