import { fetchPosts } from '../../utils/api';
import axios from 'axios';

const WORDPRESS_API_URL = 'http://wordpress.fastobe.com/wp-json/wp/v2';

// 获取所有动态路由
export const getStaticPaths = async () => {
    try {
        const posts = await fetchPosts();
        const paths = posts.map((post) => ({
            params: { id: post.id.toString() },
        }));

        return { paths, fallback: false };
    } catch (error) {
        console.error('Error fetching posts for paths:', error);
        return { paths: [], fallback: false };
    }
};

// 获取静态生成所需要的数据
export const getStaticProps = async ({ params }) => {
    try {
        const response = await axios.get(`${WORDPRESS_API_URL}/posts/${params.id}`);
        const post = response.data;

        return { props: { post } };
    } catch (error) {
        console.error('Error fetching post:', error);
        return {
            props: {
                post: null,
                error: 'Failed to fetch post',
            },
        };
    }
};

const Post = ({ post, error }) => {
    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
};

export default Post;
