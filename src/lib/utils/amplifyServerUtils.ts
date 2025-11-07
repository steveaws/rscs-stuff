// utils/amplify-utils.ts
import { cookies } from "next/headers";

import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { getCurrentUser } from "aws-amplify/auth/server";

import { type Schema } from "@/../amplify/data/resource";
import outputs from "@/../amplify_outputs.json";
import { AuthUser } from "aws-amplify/auth";
import { resolve } from "path";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

export async function AuthGetCurrentUserServer(): Promise<AuthUser | undefined> {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    console.log("Start - retrieve user")
    return new Promise((resolve) => setTimeout(() => {
      console.log("End - retrieve user");
      resolve(currentUser)}, 1000)
  );
  } catch (error) {
    console.error(error);
  }
}

