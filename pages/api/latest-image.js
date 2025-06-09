import { fetchData } from '../../lib/fetchData';

export default async function handler(req, res) {
  const { data, error } = await fetchData(`/api/gallery-images`);
  if (error) {
    res.status(500).json({ error: error });
  }
  
  // Get only the last 10 images from the results array
  const lastTenImages = data.results.slice(0, 10);
  
  res.status(200).json({ 
    data: {
      count: lastTenImages.length,
      next: null,
      previous: null,
      results: lastTenImages
    }
  });
} 