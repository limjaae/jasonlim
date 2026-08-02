import { NextResponse } from "next/server";
import { getGitHubData } from "@/lib/github";

export async function GET() {
  try {
    const data = await getGitHubData();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { repos: [], events: [], fetchedAt: new Date().toISOString() },
      { status: 200 }
    );
  }
}
