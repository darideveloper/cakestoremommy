const API_HOST = process.env.API_HOST;
const API_TOKEN = process.env.API_TOKEN;

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_HOST}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${API_TOKEN}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
};

// Example usage:
// const { data, error } = await fetchData('/api/gallery'); 