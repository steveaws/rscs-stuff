import fs from "fs/promises";
import path from "path";

interface DashboardData {
  metrics: {
    users: { total: number; change: number };
    revenue: { total: number; change: number };
    projects: { total: number; change: number };
  };
  recentActivity: Array<{
    id: number;
    user: string;
    action: string;
    time: string;
  }>;
}

export async function getDashData():Promise<DashboardData> {

  const data: DashboardData = JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), "data", "first-data.json"),
      "utf-8"
    )
  );
  return data;
}

export async function getActivityById(id: number):Promise<DashboardData["recentActivity"][0] | undefined> {
  const data = await getDashData()
  return data.recentActivity.find((activity) => {
     return activity.id === id}
    );
}