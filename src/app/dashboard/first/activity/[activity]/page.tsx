import { getDashData,getActivityById } from "@/app/sitelib/DashData"
export default async function ActivityView({
    params,
}: {
    params: Promise<{activity: number}>
}) {
    let { activity } = await params
    
    if (typeof activity !== "number") {
        activity = parseInt(activity, 10)
    }
    console.log("ActivityView() called with activity: " + activity)
    const data = await getActivityById(activity)
    if (!data) {
        return (  
            <p className="font-bold">
                Activity: ID:{activity} not found
            </p>
        )
    }
    return (
        <div className="flex flex-col">
                 <p className="font-medium">
                  User: {data.user}  Action:{data.action} 
                </p>
                 <p className="font-medium">
                    Description: This is a random description for activity {data.id}
                </p>
        </div>
    )
}