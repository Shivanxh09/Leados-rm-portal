import { createRootRoute, Outlet } from '@tanstack/react-router';
import { RMLayout } from '../components/rm/RMLayout';
import { useAuthStore } from '../store/authStore';
import { Login } from '../features/rm/Login';

// NOTICE: We are exporting "rootRoute" here now
export const rootRoute = createRootRoute({
  component: () => {
    const { isAuthenticated } = useAuthStore();
    if (!isAuthenticated) return <Login />;
    return <RMLayout title="LeadOS Portal"><Outlet /></RMLayout>;
  },
});