import { fetchPosts } from '../../utils/api.js';
import Link from 'next/link';
import { useState } from 'react';

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

  const [searchText, setSearchText] = useState('');
  const placeholder = '搜索文章、标签';

  const recommendedArticles = [
    {
      id: 1,
      title: '深入理解 Vue3 组合式 API 的优势与实践',
      description: '本文详细介绍了 Vue3 组合式 API 的核心概念，包括 setup 函数、响应式系统以及生命周期钩子的使用方法。',
      image: 'https://ai-public.mastergo.com/ai/img_res/c50c8155c9196e170d2357d1025e6007.jpg',
      views: '2,456'
    },
    {
      id: 2,
      title: '大规模分布式系统设计实践：从理论到落地',
      description: '探讨分布式系统在实际业务场景中的设计与实现，包括系统架构、数据一致性、故障恢复等关键话题。',
      image: 'https://ai-public.mastergo.com/ai/img_res/df1dbe59b72b90c5743b80a60a73a787.jpg',
      views: '3,789'
    },
    {
      id: 3,
      title: '人工智能在金融领域的创新应用研究',
      description: '详细分析人工智能技术在金融行业的具体应用案例，包括风险控制、智能投顾、反欺诈等领域的实践经验。',
      image: 'https://ai-public.mastergo.com/ai/img_res/0074975fbc033f4e18b7c3e2bf859b86.jpg',
      views: '1,892'
    }
  ];

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
    }];

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* 左侧全部文章 */}
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-6">全部文章</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <Link href={`/posts/${post.id}`} key={post.id} className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition-all duration-300 flex gap-6 border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
                  
                    <div className="w-80 h-52 flex-shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : ''}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 flex flex-col h-52">
                      <h3 className="text-2xl font-semibold mb-3">{post.title.rendered}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 text-lg leading-relaxed tracking-wide">
                        {post.excerpt.rendered.replace(/<[^>]+>/g, '')}
                      </p>
                      <div className="flex flex-col mt-auto space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="flex items-center px-4 py-1.5 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer">
                            <i className="fas fa-tag mr-1"></i>
                            技术研究
                          </span>
                          <span className="flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors cursor-pointer">
                            <i className="fas fa-fire mr-1"></i>
                            热门
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer">
                            <i className="fas fa-user-circle mr-1"></i>
                            {post._embedded.author[0].name}
                          </span>
                          <span className="flex items-center px-4 py-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors cursor-pointer">
                            <i className="fas fa-clock mr-1"></i>
                            {post.date}
                          </span>
                          <span className="flex items-center px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors cursor-pointer">
                            <i className="fas fa-eye mr-1"></i>
                            {post.views} 阅读
                          </span>
                        </div>
                      </div>
                    </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 右侧推荐和最新 */}
          <div className="w-1/3 space-y-6">
            {/* 搜索区域 */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-12 pl-12 pr-4 text-sm rounded-lg border-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="搜索文章、标签"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <i className="fas fa-search absolute left-4 top-4 text-gray-400"></i>
                <button className="absolute right-4 top-2 px-4 py-2 bg-blue-500 text-white !rounded-button whitespace-nowrap">
                  搜索
                </button>
              </div>
            </div>

            {/* 推荐文章 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">推荐文章</h2>
              <div className="space-y-4">
                {recommendedArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4"
                  >
                    <div className="flex gap-4">
                      <div className="w-1/3 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-eye mr-1"></i>
                          <span>{article.views} 阅读</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 最新文章 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">最新文章</h2>
              <div className="space-y-4">
                {latestArticles.slice(0, 3).map((article) => (
                  <div
                    key={article.id}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <i className="fas fa-user-circle mr-1"></i>
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-eye mr-1"></i>
                        {article.views} 阅读
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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

export default Posts;