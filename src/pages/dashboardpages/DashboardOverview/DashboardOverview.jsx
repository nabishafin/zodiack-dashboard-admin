import RecentUsers from "../../../components/dashboardcomponents/RecentUsers";
import Stats from "../../../components/dashboardcomponents/Stats";

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#2C6E3E] text-white p-5 rounded-sm">
        <h1 className="text-xl font-semibold">Overview</h1>
      </div>

      {/* Stats Cards */}
      <Stats />
      {/* Recent Users Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Most Recent Users</h2>
        <RecentUsers />
      </div>
    </div>
  );
};

export default DashboardOverview;
