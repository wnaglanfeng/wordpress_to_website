// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import 'tailwindcss/tailwind.css'; // 确保引入 TailwindCSS
// import '@fortawesome/fontawesome-free/css/all.min.css'; // 引入 Font Awesome CSS

//1


const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // 仅在客户端环境中执行
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return isMobile;
};

const Home = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const isMobile = useIsMobile();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
            setShowBackToTop(window.scrollY > 300);
        };

        // 仅在客户端环境中执行
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">

            <div className="relative h-[420px] sm:h-[540px] lg:h-[640px] bg-gradient-to-r from-slate-50 to-emerald-50 overflow-hidden pt-16 sm:pt-20 z-0">
                <div className="absolute inset-0 z-0">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="w-full h-full"
                        slidesPerView={2}
                        spaceBetween={0}
                        speed={800}
                        allowTouchMove={true}
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-full">1
                                <img
                                    src="https://ai-public.mastergo.com/ai/img_res/054b1a035ebc6135da2a87cf4e8ed5d5.jpg"
                                    className="w-full h-full object-cover"
                                    alt="背景图1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-50/70 to-emerald-50/65 backdrop-blur-[1px]"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">2
                                <img
                                    src="https://ai-public.mastergo.com/ai/img_res/c0254e83fefec8760d6ce72d994fba90.jpg"
                                    className="w-full h-full object-cover"
                                    alt="背景图2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-50/70 to-emerald-50/65 backdrop-blur-[1px]"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">3
                                <img
                                    src="https://ai-public.mastergo.com/ai/img_res/42c1d52710494298e401afe7f26ef655.jpg"
                                    className="w-full h-full object-cover"
                                    alt="背景图3"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-50/70 to-emerald-50/65 backdrop-blur-[1px]"></div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="relative container mx-auto px-6 h-full flex items-center z-20">
                    <div className="max-w-full sm:max-w-xl lg:max-w-2xl relative z-10">
                        <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-6">领先的应用优化服务商</span>
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">全方位的应用优化服务</h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-600">让您的应用在竞争激烈的市场中脱颖而出，实现持续增长</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors !rounded-button whitespace-nowrap text-sm sm:text-base">
                                免费咨询
                            </button>
                            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors !rounded-button whitespace-nowrap">
                                了解更多
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
                                <div className="text-gray-600">客户满意度</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
                                <div className="text-gray-600">成功案例</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
                                <div className="text-gray-600">平均提升率</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                {/* Our Services Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-4">我们的服务</h2>
                    <p className="text-gray-600 text-center mb-12">专业的一站式应用优化解决方案</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-end">
                        <div className="bg-white rounded-xl hover:shadow-xl transition-all duration-300 group">
                            <div className="h-56 mb-6 overflow-hidden rounded-t-xl">
                                <img src="https://ai-public.mastergo.com/ai/img_res/402f419148867f4b493694391bd53672.jpg"
                                    alt="安卓应用优化"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">安卓应用优化</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">我们提供Google Play、华为、小米、OPPO、VIVO、应用宝、360、百度、豌豆荚、PP助手、91手机助手等国内主流应用商店的优化服务。</p>
                                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-all !rounded-button whitespace-nowrap">
                                    了解详情
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl hover:shadow-xl transition-all duration-300 group">
                            <div className="h-56 mb-6 overflow-hidden rounded-t-xl">
                                <img src="https://ai-public.mastergo.com/ai/img_res/9155773d36a37bec73b9731e14b064da.jpg"
                                    alt="App Store优化"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">App Store优化</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">我们提供苹果App Store的优化服务，帮助您的应用在App Store中的关键词排名，分类榜，总榜、提高可见性，吸引更多的下载量和用户评论。</p>
                                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-all !rounded-button whitespace-nowrap">
                                    了解详情
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl hover:shadow-xl transition-all duration-300 group">
                            <div className="h-56 mb-6 overflow-hidden rounded-t-xl">
                                <img src="https://ai-public.mastergo.com/ai/img_res/24578b36657268f5955ada89878366f1.jpg"
                                    alt="游戏发行服务"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">游戏发行服务</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">我们提供B站，4399，Taptap，九游，好游快爆以及厂商游戏平台等优化服务，帮助您的游戏在游戏商店中排名更高、提高曝光率、吸引更多的下载和玩家。</p>
                                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-all !rounded-button whitespace-nowrap">
                                    了解详情
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl hover:shadow-xl transition-all duration-300 group">
                            <div className="h-56 mb-6 overflow-hidden rounded-t-xl">
                                <img src="https://ai-public.mastergo.com/ai/img_res/3531ba1fb9026e68425286734bed6e59.jpg"
                                    alt="广告服务"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">广告服务</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">我们提供苹果ASA、安卓CPD和其他平台的投放服务，我们定制最佳的创意和媒体策略，同时提供广告效果跟踪和数据分析服务，以评估广告投放的效果和回报。</p>
                                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-all !rounded-button whitespace-nowrap">
                                    了解详情
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl hover:shadow-xl transition-all duration-300 group">
                            <div className="h-56 mb-6 overflow-hidden rounded-t-xl">
                                <img src="https://ai-public.mastergo.com/ai/img_res/e09f929d25a71a38c7c509563a58f4fa.jpg"
                                    alt="推广服务"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">推广服务</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">我们提供CPM、CPA、CPS等多种付费模式的广告渠道推广和社交媒体营销服务，与KOC和KOL合作，助您快速获得更多的用户和下载量，实现业务增长和盈利。</p>
                                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-all !rounded-button whitespace-nowrap">
                                    了解详情
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl hover:shadow-xl transition-all duration-300 group">
                            <div className="h-56 mb-6 overflow-hidden rounded-t-xl">
                                <img src="https://ai-public.mastergo.com/ai/img_res/53aa27aa2257c482d640429fb0161431.jpg"
                                    alt="小程序优化"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">小程序优化</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">我们为微信小程序、公众号和支付宝小程序提供口碑、用户量、交易量和排名优化等服务，提高小程序的商业化运营能力，助您实现业务增长。</p>
                                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-all !rounded-button whitespace-nowrap">
                                    了解详情
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Chart Section */}
                <div className="container relative overflow-hidden rounded-xl shadow-lg mb-16 group">
                    <img
                        src="https://ai-public.mastergo.com/ai/img_res/2cd54c8a542b9cbb5d205a57782fb634.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="价格背景"
                    />
                    <div className="relative p-16 bg-gradient-to-r from-emerald-800/60 to-teal-700/60">
                        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
                            <div className="max-w-xl text-center lg:text-left">
                                <span className="inline-block px-4 py-1 bg-emerald-800/70 text-white rounded-full text-sm font-semibold mb-4 animate-bounce">🎉 限时特惠  优惠进行中 🎉</span>
                                <h3 className="text-5xl font-bold mb-4 text-white leading-tight">新客首次合作<br />特别优惠</h3>
                                <p className="text-emerald-100 text-lg">立即开启您的优化之旅，让应用脱颖而出</p>
                            </div>
                            <div className="flex items-center gap-6 lg:gap-12">
                                <div className="relative">
                                    <div className="absolute -top-3 -right-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12 animate-pulse">
                                        立减 20%
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-end">
                                            <div className="text-lg text-emerald-200/90">原价</div>
                                            <div className="text-4xl font-bold text-white/80 line-through decoration-red-500/80 decoration-4">¥1.5</div>
                                            <div className="text-emerald-200/90">元/CPSA</div>
                                        </div>
                                        <div className="text-white text-5xl font-bold mx-4">→</div>
                                        <div className="relative">
                                            <i className="fas fa-tags text-yellow-400 text-2xl absolute -top-6 -left-2 animate-bounce"></i>
                                            <div className="bg-gradient-to-r from-emerald-400/30 to-teal-400/30 backdrop-blur-sm p-8 rounded-xl border-2 border-emerald-400/50 shadow-lg shadow-emerald-400/20">
                                                <div className="text-lg font-semibold text-emerald-300">优惠特价</div>
                                                <div className="mt-2 flex items-baseline gap-1">
                                                    <span className="text-2xl text-emerald-300">¥</span>
                                                    <span className="text-7xl font-bold text-white">1.2</span>
                                                </div>
                                                <div className="text-emerald-300 mt-2">元/CPSA</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Why Choose Us Section */}
                <div className="mb-16 bg-gray-50 rounded-2xl p-12 mx-auto container">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center">我们的优势</h2>
                        <span className="text-emerald-600 font-semibold mb-2 block text-center">Why Choose Us</span>
                        <p className="text-gray-600 mb-12 leading-relaxed text-lg text-center max-w-3xl mx-auto">我们定制应用推广优化服务，提升应用排名和可见度，吸引更多用户下载和使用应用，助力业务增长和盈利。通过针对性的推广策略，提高应用曝光和认知度，增强市场竞争力和品牌价值。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
                            <div className="p-4 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl flex items-center gap-4 md:gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
                                <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full">
                                    <i className="fas fa-chart-line text-emerald-600 text-2xl hover:animate-spin"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">多渠道推广</h3>
                                    <p className="text-gray-600">覆盖 20+ 主流应用市场和广告平台，确保全方位推广效果</p>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl flex items-center gap-4 md:gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
                                <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full">
                                    <i className="fas fa-users text-emerald-600 text-2xl hover:animate-spin"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">专业的团队</h3>
                                    <p className="text-gray-600">拥有 8 年行业经验的专业运营&技术团队，为您提供最佳解决方案</p>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl flex items-center gap-4 md:gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
                                <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full">
                                    <i className="fas fa-cogs text-emerald-600 text-2xl hover:animate-spin"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">个性化服务</h3>
                                    <p className="text-gray-600">根据您的具体需求和目标，量身定制专属优化方案</p>
                                </div>
                            </div>
                            <div className="p-4 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl flex items-center gap-4 md:gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
                                <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full">
                                    <i className="fas fa-smile text-emerald-600 text-2xl hover:animate-spin"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">客户满意度</h3>
                                    <p className="text-gray-600">98% 的客户对我们的服务表示满意，重复合作率高达 85%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Client Cases Section */}
                <div className="p-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">客户案例应用展示</h2>
                        <p className="text-lg mb-8 text-gray-600 text-center">累计服务超过2000+应用，覆盖各大主流应用市场</p>
                    </div>
                    <div className="mb-4">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={2}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 6,
                                },
                            }}
                            spaceBetween={20}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                direction: 'rtl'
                            }}
                            speed={800}
                            loop={true}
                            className="w-full"
                        >
                            {[
                                { name: "抖音", url: "https://ai-public.mastergo.com/ai/img_res/d229a05b99e5ead1e3e7ebab075b6c19.jpg" },
                                { name: "QQ", url: "https://ai-public.mastergo.com/ai/img_res/3582ef515a45072375cb185bf50696ef.jpg" },
                                { name: "支付宝", url: "https://ai-public.mastergo.com/ai/img_res/a737a334dba4100f6e5893e146382eff.jpg" },
                                { name: "拼多多", url: "https://ai-public.mastergo.com/ai/img_res/9f6a12a1744cf499ef6f7b92afec5fe0.jpg" },
                                { name: "美团", url: "https://ai-public.mastergo.com/ai/img_res/53760f097d8356b96c34ba87df1fa780.jpg" },
                                { name: "钉钉", url: "https://ai-public.mastergo.com/ai/img_res/26f6d003644b6bdea7eda5e3b8f2d409.jpg" },
                                { name: "高德地图", url: "https://ai-public.mastergo.com/ai/img_res/1680d17a021f5419f6c0337aa5c9bcf1.jpg" },
                                { name: "百度", url: "https://ai-public.mastergo.com/ai/img_res/e7c37fa901651d3c5ab74effe759944f.jpg" }
                            ].map((app, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={app.url}
                                            alt={app.name}
                                            className="w-20 h-20 rounded-2xl object-contain p-0 group-hover:scale-105 transition-transform"
                                        />
                                        <h3 className="text-gray-600 text-center text-sm mt-2">{app.name}</h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            direction: 'ltr'
                        }}
                        speed={1000}
                        loop={true}
                        className="w-full"
                    >
                        {[
                            { name: "淘宝", url: "https://ai-public.mastergo.com/ai/img_res/05af9caff0f84c6b80f547cca25effb4.jpg" },
                            { name: "微信", url: "https://ai-public.mastergo.com/ai/img_res/ccc8fe689e671b89089aa919f2434ed0.jpg" },
                            { name: "个人所得税", url: "https://ai-public.mastergo.com/ai/img_res/f948ac096d2c8e7a2041e26c1c20c67a.jpg" },
                            { name: "腾讯视频", url: "https://ai-public.mastergo.com/ai/img_res/842f67cf13e800a8d5fbd1beca5f12be.jpg" },
                            { name: "哔哩哔哩", url: "https://ai-public.mastergo.com/ai/img_res/d32008932993fc53ff123611ca100266.jpg" },
                            { name: "京东", url: "https://ai-public.mastergo.com/ai/img_res/d487bddf83f2ba951bf2b72e3ef00e72.jpg" },
                            { name: "闲鱼", url: "https://ai-public.mastergo.com/ai/img_res/421097d832973a432d4fb750281805fd.jpg" },
                            { name: "快手", url: "https://ai-public.mastergo.com/ai/img_res/c4cc06a6d86b6573f0226beba9d6e393.jpg" }
                        ].map((app, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={app.url}
                                        alt={app.name}
                                        className="w-20 h-20 rounded-2xl object-contain p-0 group-hover:scale-105 transition-transform"
                                    />
                                    <h3 className="text-gray-600 text-center text-sm mt-2">{app.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            direction: 'rtl'
                        }}
                        speed={1200}
                        loop={true}
                        className="w-full mt-4"
                    >
                        {[
                            { name: "优酷", url: "https://ai-public.mastergo.com/ai/img_res/7644a2150d8340f5ffd8f6762847dfcb.jpg" },
                            { name: "云闪付", url: "https://ai-public.mastergo.com/ai/img_res/cac28c92c608f1a68647a7afce5ff3ed.jpg" },
                            { name: "微博", url: "https://ai-public.mastergo.com/ai/img_res/76ce3d261df7d93f8d0e0ed4ddf96f10.jpg" },
                            { name: "学习强国", url: "https://ai-public.mastergo.com/ai/img_res/8f6664fb98cfe1a96b2aa945323883ed.jpg" },
                            { name: "知乎", url: "https://ai-public.mastergo.com/ai/img_res/57aa971b0a995344261f379324e7a16e.jpg" },
                            { name: "小红书", url: "https://ai-public.mastergo.com/ai/img_res/fd6cf98c8905c2ae701796075d044732.jpg" },
                            { name: "爱奇艺", url: "https://ai-public.mastergo.com/ai/img_res/5cbfdf81bfeeb3c39160971d2bb770ee.jpg" },
                            { name: "得物", url: "https://ai-public.mastergo.com/ai/img_res/62ec0a23cf8b8bdf71f9a1c19f09b79f.jpg" }
                        ].map((app, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={app.url}
                                        alt={app.name}
                                        className="w-20 h-20 rounded-2xl object-contain p-0 group-hover:scale-105 transition-transform"
                                    />
                                    <h3 className="text-gray-600 text-center text-sm mt-2">{app.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </div>
    );
};
export default Home
