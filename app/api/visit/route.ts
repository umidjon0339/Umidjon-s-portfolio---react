// Increments the public visit counter via CountAPI.
// Does not reveal the count to callers.
export async function POST() {
  try {
    await fetch("https://api.countapi.xyz/hit/umidjon-portfolio/visits");
    return new Response(null, { status: 204 });
  } catch {
    return Response.json({ error: "failed to increment visit" }, { status: 500 });
  }
}
