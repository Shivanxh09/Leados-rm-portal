import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { LeadDetail } from '../features/rm/LeadDetail';

export const leadDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rm/leads/$leadId',
  component: LeadDetail,
});