// Public endpoint to read the current visit count from CountAPI.
// WARNING: This endpoint exposes the raw visit count to anyone who calls it.
export default async function handler(req, res) {
  try {
    const r = await fetch("https://api.countapi.xyz/get/umidjon-portfolio/visits");
    const data = await r.json();
    return res.status(200).json({ count: data.value });
  } catch (err) {
    return res.status(500).json({ error: "failed to read count" });
  }
}
