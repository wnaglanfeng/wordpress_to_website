import axios from 'axios';

const WORDPRESS_API_URL = 'http://wordpress.fastobe.com/wp-json/wp/v2';

const api = axios.create({
    baseURL: WORDPRESS_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//获取WordPress文章列表
export const fetchPosts = async () => {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export default api;