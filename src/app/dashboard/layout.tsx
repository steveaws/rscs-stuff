
import Sidebar from "@/componentz/Sidebar";
import TopBar from "@/componentz/TopBar";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
        <Suspense fallback={<p className="font-bold">Loading...</p>}>
        <TopBar />
      </Suspense>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
