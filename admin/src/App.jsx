import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Moderation from "./Pages/Moderation";
import Billing from "./Pages/Billing";
import Infrastructure from "./Pages/Infrastructure";
import Support from "./Pages/Support";
import AuditLogs from "./Pages/AuditLogs";
import SubscriptionPackages from "./pages/SubscriptionPackages";

function AdminLayout() {
  return (
    <div className="h-screen bg-[#F8FAFC] flex font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/moderation" element={<Moderation />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/support" element={<Support />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/subscription-packages" element={<SubscriptionPackages />} />
      </Route>
    </Routes>
  );
}

export default App;