import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const notificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rm/notifications',
  component: () => (
    <div className="p-10 bg-white rounded-2xl border border-slate-200 text-slate-400 font-bold italic text-center">
      No new notifications today.
    </div>
  ),
});