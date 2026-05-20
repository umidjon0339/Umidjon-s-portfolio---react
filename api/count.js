// Admin endpoint to fetch the current visit count from CountAPI.
// Requires the environment variable VISIT_SECRET to be set in Vercel
// and the caller must send header: Authorization: Bearer <VISIT_SECRET>
export default async function handler(req, res) {
  const secret = process.env.VISIT_SECRET;
  const auth = req.headers.authorization || "";
  if (!secret || auth !== `Bearer ${secret}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const r = await fetch("https://api.countapi.xyz/get/umidjon-portfolio/visits");
    const data = await r.json();
    return res.status(200).json({ count: data.value });
  } catch (err) {
    return res.status(500).json({ error: "failed to read count" });
  }
}
