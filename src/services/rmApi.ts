import { MOCK_RM_DATA } from "../mocks/rm.mock";

export const rmApi = {
  // Section 8: Dashboard Data
  getRMDashboardOverview: async () => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate latency
    return MOCK_RM_DATA.dashboard;
  },

  // Section 9: Hot Leads
  getRMHotLeads: async () => {
    return MOCK_RM_DATA.dashboard.hotLeads;
  },

  // Section 11: Lead Detail (The most important screen)
  getRMLeadDetail: async (_id: string) => {
    return MOCK_RM_DATA.leadDetail;
  }
};