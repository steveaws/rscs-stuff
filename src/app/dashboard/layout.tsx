
import Logout from "@/componentz/Logout";
import Sidebar from "@/componentz/Sidebar";
import { AuthGetCurrentUserServer } from "@/lib/utils/amplifyServerUtils";

 async function TopBar() {

  const user = await AuthGetCurrentUserServer();
  const userId = user?.signInDetails?.loginId
  const defUserId = (!userId) ? "": userId

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-4">
          {user && <Logout userId={defUserId}/> }
        </div>
      </div>
    </div>
  );
}



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
