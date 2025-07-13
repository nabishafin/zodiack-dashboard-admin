import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Crown, Check, X, Edit, Trash2 } from "lucide-react";

const License = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [licensePlans, setLicensePlans] = useState([
    {
      id: 1,
      name: "Basic Plan",
      price: 14,
      duration: "1 Month",
      facilities: [
        { name: "User Management", included: true },
        { name: "Basic Analytics", included: true },
        { name: "Email Support", included: true },
        { name: "Custom Branding", included: false },
        { name: "API Access", included: false },
        { name: "Priority Support", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "White Label", included: false },
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 29,
      duration: "1 Month",
      facilities: [
        { name: "User Management", included: true },
        { name: "Basic Analytics", included: true },
        { name: "Email Support", included: true },
        { name: "Custom Branding", included: true },
        { name: "API Access", included: true },
        { name: "Priority Support", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "White Label", included: false },
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 30,
      duration: "1 Month",
      facilities: [
        { name: "User Management", included: true },
        { name: "Basic Analytics", included: true },
        { name: "Email Support", included: true },
        { name: "Custom Branding", included: true },
        { name: "API Access", included: true },
        { name: "Priority Support", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "White Label", included: true },
      ],
    },
  ]);

  const [newPlan, setNewPlan] = useState({
    name: "Basic Plan",
    price: "",
    duration: "1 Month",
    facilities: [
      { name: "User Management", included: false },
      { name: "Basic Analytics", included: false },
      { name: "Email Support", included: false },
      { name: "Custom Branding", included: false },
      { name: "API Access", included: false },
      { name: "Priority Support", included: false },
      { name: "Advanced Analytics", included: false },
      { name: "White Label", included: false },
    ],
  });

  const handleCreatePlan = () => {
    if (newPlan.name && newPlan.price) {
      const plan = {
        id: Date.now(),
        name: newPlan.name,
        price: Number.parseFloat(newPlan.price),
        duration: newPlan.duration,
        facilities: [...newPlan.facilities],
      };
      setLicensePlans([...licensePlans, plan]);
      setIsCreateModalOpen(false);
      resetNewPlan();
    }
  };

  const handleEditPlan = (plan) => {
    setEditingPlan({
      ...plan,
      price: plan.price.toString(),
      facilities: [...plan.facilities],
    });
    setIsEditModalOpen(true);
  };

  const handleUpdatePlan = () => {
    if (editingPlan.name && editingPlan.price) {
      const updatedPlans = licensePlans.map((plan) =>
        plan.id === editingPlan.id
          ? {
              ...editingPlan,
              price: Number.parseFloat(editingPlan.price),
            }
          : plan
      );
      setLicensePlans(updatedPlans);
      setIsEditModalOpen(false);
      setEditingPlan(null);
    }
  };

  const handleFacilityToggle = (index) => {
    const updatedFacilities = [...newPlan.facilities];
    updatedFacilities[index].included = !updatedFacilities[index].included;
    setNewPlan({ ...newPlan, facilities: updatedFacilities });
  };

  const handleEditFacilityToggle = (index) => {
    const updatedFacilities = [...editingPlan.facilities];
    updatedFacilities[index].included = !updatedFacilities[index].included;
    setEditingPlan({ ...editingPlan, facilities: updatedFacilities });
  };

  const handleDeletePlan = (planId) => {
    setLicensePlans(licensePlans.filter((plan) => plan.id !== planId));
  };

  const handlePlanNameChange = (planName) => {
    let facilities = [...newPlan.facilities];

    if (planName === "Basic Plan") {
      facilities = facilities.map((facility, index) => ({
        ...facility,
        included: index < 3,
      }));
    } else if (planName === "Standard Plan") {
      facilities = facilities.map((facility, index) => ({
        ...facility,
        included: index < 6,
      }));
    } else if (planName === "Premium Plan") {
      facilities = facilities.map((facility) => ({
        ...facility,
        included: true,
      }));
    }

    setNewPlan({ ...newPlan, name: planName, facilities });
  };

  const handleEditPlanNameChange = (planName) => {
    let facilities = [...editingPlan.facilities];

    if (planName === "Basic Plan") {
      facilities = facilities.map((facility, index) => ({
        ...facility,
        included: index < 3,
      }));
    } else if (planName === "Standard Plan") {
      facilities = facilities.map((facility, index) => ({
        ...facility,
        included: index < 6,
      }));
    } else if (planName === "Premium Plan") {
      facilities = facilities.map((facility) => ({
        ...facility,
        included: true,
      }));
    }

    setEditingPlan({ ...editingPlan, name: planName, facilities });
  };

  const resetNewPlan = () => {
    setNewPlan({
      name: "Basic Plan",
      price: "",
      duration: "1 Month",
      facilities: [
        { name: "User Management", included: false },
        { name: "Basic Analytics", included: false },
        { name: "Email Support", included: false },
        { name: "Custom Branding", included: false },
        { name: "API Access", included: false },
        { name: "Priority Support", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "White Label", included: false },
      ],
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#2C6E3E] text-white p-4 rounded-sm">
        <h2 className="text-lg font-semibold">License plan</h2>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Your License Plan</h1>
        <p className="text-gray-600">Growth Your Business (Save 2.5%)</p>

        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-[#2C6E3E] hover:bg-[#245530] text-white px-8 py-2"
        >
          Create Plan
        </Button>
      </div>

      {/* License Plans */}
      {licensePlans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg p-6">
          {licensePlans.map((plan) => (
            <Card key={plan.id} className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="text-2xl font-bold">
                  $ {plan.price}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    /{plan.duration.toLowerCase()}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {facility.included ? (
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                        <X className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <span className="text-sm text-gray-600">
                      {facility.name}
                    </span>
                  </div>
                ))}

                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => handleEditPlan(plan)}
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="flex-1"
                    onClick={() => handleDeletePlan(plan.id)}
                  >
                    <Trash2 className="w-3 h-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <Crown className="w-12 h-12 mx-auto" />
          </div>
          <p className="text-gray-500">No License Plan</p>
        </div>
      )}

      {/* Create Plan Modal */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Plan</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label htmlFor="planName" className="text-sm font-medium">
                Plan Name
              </Label>
              <Select value={newPlan.name} onValueChange={handlePlanNameChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Basic Plan">Basic Plan</SelectItem>
                  <SelectItem value="Standard Plan">Standard Plan</SelectItem>
                  <SelectItem value="Premium Plan">Premium Plan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="planPrice" className="text-sm font-medium">
                  Plan Price
                </Label>
                <Input
                  id="planPrice"
                  type="number"
                  placeholder="€ 20"
                  value={newPlan.price}
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, price: e.target.value })
                  }
                />
              </div>

              <div>
                <Label htmlFor="planExpiry" className="text-sm font-medium">
                  Plan Expiry
                </Label>
                <Select
                  value={newPlan.duration}
                  onValueChange={(value) =>
                    setNewPlan({ ...newPlan, duration: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 Month">1 Month</SelectItem>
                    <SelectItem value="3 Months">3 Months</SelectItem>
                    <SelectItem value="6 Months">6 Months</SelectItem>
                    <SelectItem value="1 Year">1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium">Facilities</Label>
              <div className="space-y-2 mt-2 max-h-48 overflow-y-auto">
                {newPlan.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600">
                      {facility.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={facility.included}
                        onCheckedChange={() => handleFacilityToggle(index)}
                        className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                      />
                      <div
                        className={`w-3 h-3 rounded-full ${
                          facility.included ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleCreatePlan}
              className="w-full bg-[#2C6E3E] hover:bg-[#245530] text-white"
              disabled={!newPlan.name || !newPlan.price}
            >
              Create
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Plan Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Plan</DialogTitle>
          </DialogHeader>

          {editingPlan && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="editPlanName" className="text-sm font-medium">
                  Plan Name
                </Label>
                <Select
                  value={editingPlan.name}
                  onValueChange={handleEditPlanNameChange}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Basic Plan">Basic Plan</SelectItem>
                    <SelectItem value="Standard Plan">Standard Plan</SelectItem>
                    <SelectItem value="Premium Plan">Premium Plan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="editPlanPrice"
                    className="text-sm font-medium"
                  >
                    Plan Price
                  </Label>
                  <Input
                    id="editPlanPrice"
                    type="number"
                    placeholder="€ 20"
                    value={editingPlan.price}
                    onChange={(e) =>
                      setEditingPlan({ ...editingPlan, price: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label
                    htmlFor="editPlanExpiry"
                    className="text-sm font-medium"
                  >
                    Plan Expiry
                  </Label>
                  <Select
                    value={editingPlan.duration}
                    onValueChange={(value) =>
                      setEditingPlan({ ...editingPlan, duration: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1 Month">1 Month</SelectItem>
                      <SelectItem value="3 Months">3 Months</SelectItem>
                      <SelectItem value="6 Months">6 Months</SelectItem>
                      <SelectItem value="1 Year">1 Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Facilities</Label>
                <div className="space-y-2 mt-2 max-h-48 overflow-y-auto">
                  {editingPlan.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-600">
                        {facility.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={facility.included}
                          onCheckedChange={() =>
                            handleEditFacilityToggle(index)
                          }
                          className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                        />
                        <div
                          className={`w-3 h-3 rounded-full ${
                            facility.included ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleUpdatePlan}
                className="w-full bg-[#2C6E3E] hover:bg-[#245530] text-white"
                disabled={!editingPlan.name || !editingPlan.price}
              >
                Update
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default License;
