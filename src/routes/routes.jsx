import { createBrowserRouter } from "react-router-dom";

// Layout
import DashboardLayout from "../layouts/DashboardLayout";

// Auth Pages
import SignInPage from "../pages/auth/SignInPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OTPVerification from "../pages/auth/OTPVerification";
import ResetPassword from "../pages/auth/ResetPassword";

// Dashboard Pages
import DashboardOverview from "../pages/dashboardpages/DashboardOverview/DashboardOverview";
import Profile from "../pages/dashboardpages/personalinformation/Profile";
import EditProfile from "../pages/dashboardpages/personalinformation/EditProfile";
import TermsAndConditions from "../pages/dashboardpages/terms/TermsAndConditions";
import EditTermsAndConditions from "../pages/dashboardpages/terms/EditTermsAndConditions";
import PrivacyPolicy from "../pages/dashboardpages/privacypolicy/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/dashboardpages/privacypolicy/EditPrivacyPolicy";
import AboutUs from "../pages/dashboardpages/about/AboutUs";
import EditAbout from "../pages/dashboardpages/about/EditAbout";
import AllNotifications from "../pages/dashboardpages/notification/AllNotifications";
import AllUsers from "../pages/dashboardpages/user/AllUsers";
import License from "@/pages/dashboardpages/license/License";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/forgotpass",
    element: <ForgotPassword />,
  },
  {
    path: "/otpverification",
    element: <OTPVerification />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: "notificatons", element: <AllNotifications /> },
      { path: "users", element: <AllUsers /> },
      { path: "license", element: <License /> },

      // Settings
      { path: "settings/profile", element: <Profile /> },
      { path: "settings/editpersonal", element: <EditProfile /> },
      { path: "settings/terms", element: <TermsAndConditions /> },
      { path: "settings/editterms", element: <EditTermsAndConditions /> },
      { path: "settings/privacy", element: <PrivacyPolicy /> },
      { path: "settings/editprivacy", element: <EditPrivacyPolicy /> },
      { path: "settings/about", element: <AboutUs /> },
      { path: "settings/editabout", element: <EditAbout /> },
    ],
  },
]);

export default routes;
