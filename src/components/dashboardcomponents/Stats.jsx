import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin } from "lucide-react";

const Stats = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Users Card */}
        <Card className="border border-gray-200 shadow-md rounded-2xl p-4">
          <CardHeader className="flex items-center justify-between p-0">
            <div>
              <CardTitle className="text-lg font-medium text-gray-500">
                Total Users
              </CardTitle>
              <div className="text-4xl font-bold text-gray-800 mt-2">2030</div>
            </div>
            <div className="bg-[#E6F4EC] p-3 rounded-full">
              <Users className="h-6 w-6 text-[#2C6E3E]" />
            </div>
          </CardHeader>
        </Card>

        {/* Total Trips Card */}
        <Card className="border border-gray-200 shadow-md rounded-2xl p-4">
          <CardHeader className="flex items-center justify-between p-0">
            <div>
              <CardTitle className="text-lg font-medium text-gray-500">
                Total Trips
              </CardTitle>
              <div className="text-4xl font-bold text-gray-800 mt-2">98</div>
            </div>
            <div className="bg-[#E6F4EC] p-3 rounded-full">
              <MapPin className="h-6 w-6 text-[#2C6E3E]" />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Stats;
