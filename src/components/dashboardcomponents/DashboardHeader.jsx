import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Search, LogOut, User, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
  };

  return (
    <header className="bg-[#2C6E3E] text-white px-8 py-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          {/* Mobile Sidebar Trigger */}
          <div className="lg:hidden">
            <DashboardSidebar />
          </div>

          <div>
            <h1 className="text-lg sm:text-xl font-semibold">
              <span className="hidden sm:inline font-bold text-3xl">
                Well Come to group mate!!!
              </span>
            </h1>
            <h2 className="mt-2 text-sm">"Get more trip to learn more !!!"</h2>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Notifications */}
          <Link to={"/dashboard/notificatons"}>
            <Button
              variant="ghost"
              size="icon"
              className="text-white bg-white rounded-full relative"
            >
              <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs">
                3
              </span>
            </Button>
          </Link>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-12 w-12 sm:h-10 sm:w-10 rounded-full"
              >
                <Avatar className="h-12 w-12 sm:h-10 sm:w-10">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                  />
                  <AvatarFallback className="bg-black text-white text-xs sm:text-sm">
                    DA
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Dance Admin
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@danceaffair.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-8 w-8" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
