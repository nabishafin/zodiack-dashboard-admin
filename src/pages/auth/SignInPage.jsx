import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // 👈 Initialize navigate

  // 👇 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add authentication logic here (e.g., API call)
    // For now, just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 ">
      <div className="w-full max-w-5xl flex items-center justify-center gap-20">
        {/* Logo Section */}
        <div className="hidden lg:flex items-center justify-center flex-1 pr-5">
          <img src={logo} alt="" />
        </div>

        {/* Sign In Form */}
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Sign In
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {" "}
                {/* 👈 Add onSubmit */}
                {/* Username/Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="username"
                    className="text-sm font-medium text-gray-700"
                  >
                    User name
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="h-11 border-gray-300 focus:border-red-900 focus:ring-red-900"
                  />
                </div>
                {/* Password Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-11 pr-10 border-gray-300 focus:border-[#2C6E3E] focus:ring-[#2C6E3E]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                {/* Remember Me and Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={setRememberMe}
                      className="border-gray-300 data-[state=checked]:bg-[#2C6E3E] data-[state=checked]:border-[#2C6E3E]"
                    />
                    <Label
                      htmlFor="remember"
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      Remember me
                    </Label>
                  </div>
                  <Link to={"/forgotpass"}>
                    <button
                      type="button"
                      className="text-sm text-[#2C6E3E] hover:text-[#2C6E3E] font-medium"
                    >
                      Forgot password?
                    </button>
                  </Link>
                </div>
                {/* Sign In Button */}
                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-b from-[#2C6E3E] to-[#2C6E3E] hover:bg-red-800 text-white font-medium"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
