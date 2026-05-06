import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Feedback } from '../features/rm/Feedback';

export const feedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rm/feedback',
  component: Feedback,
});