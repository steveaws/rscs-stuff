import {getConsentEntries} from "@/app/sitelib/Consent"
import { cookies } from "next/headers"

export async function GET(request: Request) {
    const allCookies = await cookies()
    console.log("Getting Consents")
    console.log(allCookies)
    const data = await getConsentEntries()
    return Response.json(data)
}