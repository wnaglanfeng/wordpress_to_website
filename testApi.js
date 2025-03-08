import { fetchPosts } from './src/utils/api.js';

const testFetchPosts = async () => {
  try {
    const posts = await fetchPosts();
    console.log('Fetched posts:', posts);
  } catch (error) {
    console.error('Error testing fetchPosts:', error);
  }
};

testFetchPosts();