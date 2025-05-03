
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ pompe: "OFF" });
  } else if (req.method === 'POST') {
    res.status(200).send("État modifié");
  }
}
