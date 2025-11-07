import Logout from "@/componentz/Logout";
import { AuthGetCurrentUserServer } from "@/lib/utils/amplifyServerUtils";
import { cookies } from "next/headers";


async function getCookieData() {
  const cookieStore = await cookies()
  const cookieData = cookieStore.getAll()
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData)
    }, 1000)
  )
}
 

export default async function TopBar() {
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