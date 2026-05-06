import { createRoute, useNavigate } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { HotLeads } from '../features/rm/HotLeads';

export const hotLeadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rm/hot-leads',
  component: () => {
    const navigate = useNavigate();
    return <HotLeads onSelectLead={(id) => navigate({ to: '/rm/leads/$leadId', params: { leadId: id } })} />;
  },
});