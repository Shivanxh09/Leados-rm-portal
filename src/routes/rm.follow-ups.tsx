import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { FollowUps } from '../features/rm/FollowUps';

export const followUpsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rm/follow-ups',
  component: FollowUps,
});