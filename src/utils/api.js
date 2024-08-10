import axios from 'axios';

// Set up the base URL for all requests
const API_BASE_URL = 'https://your-api-url.com'; // Replace with your actual API base URL

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  // Optional: Add any headers required by your API
  // headers: {
  //   'Authorization': `Bearer ${yourAuthToken}`, // Replace with your actual token
  // },
});

// Fetch the list of threads
export const getThreads = async () => {
  try {
    const response = await api.get('/onebox/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching threads:', error);
    throw error;
  }
};

// Delete a specific thread
export const deleteThread = async (thread_id) => {
  try {
    const response = await api.delete(`/onebox/${thread_id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting thread ${thread_id}:`, error);
    throw error;
  }
};

// Send a reply to a specific thread
export const sendReply = async (thread_id, data) => {
  try {
    const response = await api.post(`/reply/${thread_id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error sending reply to thread ${thread_id}:`, error);
    throw error;
  }
};
