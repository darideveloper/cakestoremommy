import { fetchData } from '../../lib/fetchData';

export default async function handler(req, res) {
  const params = req.query;
  
  const { data, error } = await fetchData(`/api/categories?${new URLSearchParams(params).toString()}`);
  if (error) {
    res.status(500).json({ error: error });
  }
  res.status(200).json({ data: data });
} 