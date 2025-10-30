import path from "path";
import fs from "fs/promises";

// Interface for consent data structure
interface ConsentEntry {
  formId: string;
  description: string;
  consentDate: Date;
  patientId: string;
  status: string;
}

interface ConsentData {
    consents: Array<ConsentEntry>;
}

    //  "formId": "CF-001",
    //   "description": "General Medical Treatment Consent",
    //   "consentDate": "2024-01-15",
    //   "patientId": "P12345",
    //   "status": "SIGNED"

// Function to read and return consent entries
export async function getConsentEntries(): Promise<ConsentData> {
  const data: ConsentData = JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), "data", "consent.json"),
      "utf-8"
    )
  );
  return data;
}
