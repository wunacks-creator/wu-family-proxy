export default async function handler(req, res) {
  // 1. 填入你之前的 Google GAS URL (以 /exec 结尾那个)
  const GAS_URL = 'https://script.google.com/macros/s/AKfycbxExat1kFxo8FKacPDaMilaC_t8BDCo56C7ap_JZTqTRJOGF5hJJPm4xqnHsqkQKZQe9g/exec';

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch(GAS_URL, { redirect: 'follow' });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
