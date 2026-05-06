// import { RouterProvider, createRouter } from '@tanstack/react-router';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import { rootRoute } from './routes/__root';
// import { dashboardRoute } from './routes/rm.dashboard';
// import { leadsRoute } from './routes/rm.leads';
// import { leadDetailRoute } from './routes/rm.leads.$leadId';
// import { hotLeadsRoute } from './routes/rm.hot-leads';
// import { followUpsRoute } from './routes/rm.follow-ups';

// const routeTree = rootRoute.addChildren([
//   dashboardRoute,
//   leadsRoute,
//   leadDetailRoute,
//   hotLeadsRoute,
//   followUpsRoute
// ]);

// const router = createRouter({ routeTree });

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router;
//   }
// }

// const queryClient = new QueryClient();

// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <RouterProvider router={router} />
//     </QueryClientProvider>
//   );
// }
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { rootRoute } from './routes/__root';
import { dashboardRoute } from './routes/rm.dashboard';
import { leadsRoute } from './routes/rm.leads';
import { leadDetailRoute } from './routes/rm.leads.$leadId';
import { hotLeadsRoute } from './routes/rm.hot-leads';
import { followUpsRoute } from './routes/rm.follow-ups';
import { feedbackRoute } from './routes/rm.feedback'; // Added
import { notificationsRoute } from './routes/rm.notifications'; // Added

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  leadsRoute,
  leadDetailRoute,
  hotLeadsRoute,
  followUpsRoute,
  feedbackRoute, // Added
  notificationsRoute // Added
]);

const router = createRouter({ routeTree });



declare module '@tanstack/react-router' {
  interface Register { router: typeof router; }
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}