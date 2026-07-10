import type { NextRequest } from "next/server";

// Admin endpoint to fetch the current visit count from CountAPI.
// Requires the environment variable VISIT_SECRET to be set and the caller
// must send header: Authorization: Bearer <VISIT_SECRET>
export async function GET(req: NextRequest) {
  const secret = process.env.VISIT_SECRET;
  const auth = req.headers.get("authorization") ?? "";

  if (!secret || auth !== `Bearer ${secret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const r = await fetch("https://api.countapi.xyz/get/umidjon-portfolio/visits", {
      cache: "no-store",
    });
    const data = await r.json();
    return Response.json({ count: data.value });
  } catch {
    return Response.json({ error: "failed to read count" }, { status: 500 });
  }
}
