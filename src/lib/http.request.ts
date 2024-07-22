import axios from "axios"

const base_url = 'https://api.themoviedb.org/3';
const api_key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDE0MDUyYzkyYjA1YzlmNGYwZWFmZmVjZTI2NGIyNSIsIm5iZiI6MTcyMTA3OTM5My4yODY0MzIsInN1YiI6IjY2OTU5MzQ1YWZiODk5ZDgwMGU0ZjJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOxqFrK9X13NESM8laD0Oq9SMnvLe2P66uRPZszbGJY'; // Your API key

export async function getData(endpoint:any) {
  try {
    const res = await axios.get(base_url + endpoint, {
      headers: {
        Authorization: `Bearer ${api_key}` 
      }
    });
    return res;
  } catch (error) {
    return { status: 500, error };
  }
}