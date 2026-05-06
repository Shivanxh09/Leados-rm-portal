import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { MyLeads } from '../features/rm/MyLeads';

export const leadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rm/leads',
  component: MyLeads,
});