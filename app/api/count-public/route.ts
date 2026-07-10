// Public endpoint to read the current visit count from CountAPI.
// WARNING: exposes the raw visit count to anyone who calls it.
export async function GET() {
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
