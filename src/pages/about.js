import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>关于我们 - My Blog</title>
        <meta name="description" content="这是关于我们页面，介绍我们的博客和团队。" />
        <meta name="keywords" content="关于我们, 博客, 团队" />
        <meta property="og:title" content="关于我们 - My Blog" />
        <meta property="og:description" content="这是关于我们页面，介绍我们的博客和团队。" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-4">关于我们</h1>
          <p className="mb-4">
            欢迎来到我们的博客！我们致力于分享最新的技术文章和前端开发经验。
          </p>
          <p className="mb-4">
            我们的团队由一群热爱技术和编程的开发者组成，致力于为读者提供高质量的内容。
          </p>
          <p className="mb-4">
            如果您有任何问题或建议，请随时与我们联系。感谢您的支持！
          </p>
        </div>
      </div>
    </>
  );
};

export default About;