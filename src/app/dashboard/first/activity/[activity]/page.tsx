import { getDashData,getActivityById } from "@/lib/sitelib/DashData"
import { waitFor } from "@/lib/helpers/timehelper"
import { Suspense } from "react"
async function ActivityView({ activityId } : {activityId: number})
 {
    
    if (typeof activityId !== "number") {
        activityId = parseInt(activityId, 10)
    }
    console.log("ActivityView() called with activity: " + activityId)
    const waitTime = 3000
    console.log("Waiting for " + waitTime + "ms")
    await waitFor(waitTime)
    const data = await getActivityById(activityId)
    if (!data) {
        return (  
            <p className="font-bold">
                Activity: ID:{activityId} not found
            </p>
        )
    }
    return (
        <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex flex-col space-x-4 p-4 bg-gray-50 rounded-md">
                 <p className="font-medium">
                  User: {data.user}  Action:{data.action} 
                </p>
                 <p className="font-medium">
                    Description: This is a random description for activity {data.id}
                </p>
        </div>
        </div>
    )
}

export default async function Page({
    params,
}: {
    params: Promise<{ activity: number }>
}) {
    let {activity} = await params
    return (
        <Suspense fallback={<p className="font-bold">Loading...</p>}>
            <ActivityView activityId={activity} />
        </Suspense>
    )
}