// Serverless function to increment public visit counter via CountAPI
// This endpoint does not reveal the count to callers.
export default async function handler(req, res) {
  try {
    // Increment the counter on CountAPI
    await fetch("https://api.countapi.xyz/hit/umidjon-portfolio/visits");
    // Return a minimal success response so nothing sensitive is exposed
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "failed to increment visit" });
  }
}
