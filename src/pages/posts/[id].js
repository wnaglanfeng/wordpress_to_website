// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import { useState, useEffect } from 'react';
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

    // 获取缩略图链接
    const mediaResponse = await axios.get(post._links['wp:featuredmedia'][0].href);
    const featuredImage = mediaResponse.data.source_url;

    return { props: { post, featuredImage } };
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

const Post = ({ post, featuredImage, error }) => {
  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const latestArticles = [
    {
      id: 1,
      title: '微服务架构下的性能优化策略',
      description: '本文深入探讨了微服务架构中常见的性能瓶颈，并提供了实用的优化方案，包括缓存策略、服务通信优化等多个维度的最佳实践。',
      image: 'https://ai-public.mastergo.com/ai/img_res/fbdc1cde228175065faee4426b604eec.jpg',
      author: '张志远',
      date: '2024-02-15',
      views: '1,234',
      tags: ['技术研究', '热门']
    },
    {
      id: 2,
      title: '大数据时代的用户隐私保护',
      description: '探讨在大数据应用场景下，如何平衡数据利用与用户隐私保护，包括数据脱敏、加密存储等技术方案的详细介绍。',
      image: 'https://ai-public.mastergo.com/ai/img_res/dfbeacade96096f46f8c8d66f4ecc22b.jpg',
      author: '李思琪',
      date: '2024-02-14',
      views: '2,567',
      tags: ['技术研究', '热门']
    },
    {
      id: 3,
      title: '云原生应用开发指南',
      description: '详细讲解云原生应用的设计理念、开发流程和最佳实践，帮助开发者更好地理解和应用云原生技术。',
      image: 'https://ai-public.mastergo.com/ai/img_res/70f857d35548c7ea4935659c3b34dcb9.jpg',
      author: '王明浩',
      date: '2024-02-13',
      views: '3,891',
      tags: ['技术研究', '热门']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col">
          {/* Banner */}
          <div className="w-full relative pb-[33.14%] mb-8 rounded-xl overflow-hidden">
            <img
              src={featuredImage}
              alt="Article Banner"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full aspect-[175/58] mb-8 rounded-xl overflow-hidden">
            <img
              src={featuredImage}
              alt="Article Banner"
              className="w-full object-cover"
            />
          </div>
          {/* 文章内容 */}
          <div className="w-full">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h1 className="text-3xl font-bold mb-4 text-center">{post.title.rendered}</h1>
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="flex items-center text-gray-600">
                  <i className="fas fa-user-circle mr-1.5"></i>
                  {/* {post._embedded.author[0].name} */}
                </span>
                <span className="flex items-center text-gray-600">
                  <i className="fas fa-clock mr-1.5"></i>
                  {post.date}
                </span>
                <span className="flex items-center text-gray-600">
                  <i className="fas fa-eye mr-1.5"></i>
                  {post.views} 阅读
                </span>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Vue3</span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">前端开发</span>
                </div>
              </div>
              <div className="prose max-w-none">
                <div  className="content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              </div>
              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-blue-500 text-white !rounded-button whitespace-nowrap hover:bg-blue-600 transition-colors">
                    <i className="fas fa-thumbs-up mr-2"></i>
                    点赞文章
                  </button>
                  <button className="px-6 py-2 bg-gray-100 text-gray-700 !rounded-button whitespace-nowrap hover:bg-gray-200 transition-colors">
                    <i className="fas fa-share mr-2"></i>
                    分享文章
                  </button>
                </div>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 !rounded-button whitespace-nowrap hover:bg-gray-200 transition-colors">
                  <i className="fas fa-bookmark mr-2"></i>
                  收藏文章
                </button>
              </div>
            </div>
          </div>
          {/* 最新文章 */}
          <div className="mt-8 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">最新文章</h2>
            <div className="grid grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <div
                  key={article.id}
                  className="group cursor-pointer"
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <i className="fas fa-user-circle mr-1.5"></i>
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-1.5"></i>
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-eye mr-1.5"></i>
                      {article.views} 阅读
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Post;