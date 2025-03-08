import { fetchPosts } from '../../utils/api.js';
import Link from 'next/link';

export const getStaticProps = async () => {
    try {
        const posts = await fetchPosts();
        console.log(posts)
        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        return {
            props: {
                posts: [],
                error: 'Failed to fetch posts',
            },
        };
    }
};

const Posts = ({ posts, error }) => {
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {<Link href={`/posts/${post.id}`}>
                            {post.title.rendered}
                        </Link>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;