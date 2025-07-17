export default async function handler(req, res) {
  const { target, type } = req.query;
  if (!target || !type) return res.status(400).json({ success: false, error: "Missing params" });

  const url = `http://46.101.32.52:2004/evolution?type=${type}&chatId=${target}@s.whatsapp.net`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    return res.status(200).json({ success: true, response: text });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
