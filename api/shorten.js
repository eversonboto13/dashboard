// Simple serverless endpoint to create a short URL using TinyURL API
// Deploy this folder to Vercel or Netlify (Vercel: this file will be available at /api/shorten)
module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    const { url } = req.body || {};
    if (!url) return res.status(400).json({ error: 'Missing url' });

    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`;
    const r = await fetch(apiUrl);
    if (!r.ok) return res.status(502).json({ error: 'TinyURL service error' });
    const short = await r.text();
    return res.status(200).json({ shortUrl: short });
  } catch (err) {
    console.error('shorten error', err);
    return res.status(500).json({ error: 'internal_error' });
  }
};
