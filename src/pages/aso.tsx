// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768);
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    return isMobile;
};
const AsoPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrolled(window.scrollY > 0);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            
            <div className="relative h-[420px] sm:h-[540px] lg:h-[640px] bg-gradient-to-r from-slate-50 via-emerald-50 to-teal-50 overflow-hidden pt-16 sm:pt-20 z-0">
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
                        slidesPerView={isMobile ? 1 : 2}
                        spaceBetween={0}
                        speed={800}
                        allowTouchMove={true}
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img
                                    src="https://ai-public.mastergo.com/ai/img_res/42e378d71bbc074e5e1c4827c65ed704.jpg"
                                    className="w-full h-full object-cover"
                                    alt="背景图1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-50/70 to-emerald-50/65 backdrop-blur-[1px]"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img
                                    src="https://ai-public.mastergo.com/ai/img_res/922c4acde451a344ee0aefb055bcace3.jpg"
                                    className="w-full h-full object-cover"
                                    alt="背景图2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-50/70 to-emerald-50/65 backdrop-blur-[1px]"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img
                                    src="https://ai-public.mastergo.com/ai/img_res/8f17238b0f8e6241d5ffa29dcfa26510.jpg"
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
                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 text-emerald-600 rounded-full text-sm font-semibold mb-6 animate-pulse hover:animate-none cursor-default">领先的应用优化服务商</span>
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 text-center">专业的应用推广专家</h1>
                        <div></div>
                        <div className="flex flex-col gap-6 sm:max-w-md w-full animate-fade-in-up mx-auto">
                            <button className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 !rounded-button whitespace-nowrap flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                <i className="fas fa-paper-plane"></i>
                                立即开始
                            </button>
                            <button className="w-full py-4 px-6 bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 !rounded-button whitespace-nowrap flex items-center justify-center gap-2">
                                <i className="fas fa-phone"></i>
                                联系我们
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                {/* Service Strategy Section */}
                <div className="mb-24">
                    <h2 className="text-4xl font-bold mb-6 text-center">优化服务策略</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">我们提供全方位的应用优化策略，助力您的应用在各大应用商店脱颖而出</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            {
                                title: "元数据优化",
                                desc: "优化应用名称、副标题、图标、截图、描述等，提高吸引力和可见度，增加下载量",
                                icon: "fa-pencil-alt",
                                color: "from-emerald-500 to-teal-400",
                                image: "https://ai-public.mastergo.com/ai/img_res/3b2254353968fa1bafa15540e8182dc7.jpg"
                            },
                            {
                                title: "关键词优化",
                                desc: "分析用户搜索行为和竞品关键词，优化应用关键词，提高搜索排名和曝光率",
                                icon: "fa-search",
                                color: "from-blue-500 to-cyan-400",
                                image: "https://ai-public.mastergo.com/ai/img_res/370e68e8a4c9b3a1bc6c6f51f850f798.jpg"
                            },
                            {
                                title: "评论评分优化",
                                desc: "提高用户满意度，增加留存率和口碑传播，提升应用商店评分",
                                icon: "fa-star",
                                color: "from-yellow-500 to-orange-400",
                                image: "https://ai-public.mastergo.com/ai/img_res/e8fcb98e7951a9fb5fb5724cae1764b4.jpg"
                            },
                            {
                                title: "下载量优化",
                                desc: "增加下载量提高信任度和转化率，进而提高排名和曝光率",
                                icon: "fa-download",
                                color: "from-purple-500 to-pink-400",
                                image: "https://ai-public.mastergo.com/ai/img_res/b5d6862ecc36d2816eefcd7202e031c7.jpg"
                            },
                            {
                                title: "榜单优化",
                                desc: "优化各类榜单排名，提高应用曝光度，增强品牌价值",
                                icon: "fa-chart-line",
                                color: "from-red-500 to-pink-400",
                                image: "https://ai-public.mastergo.com/ai/img_res/0bcf4aa8f0021cc934f0f3b0a90b17d3.jpg"
                            },
                            {
                                title: "定制化优化",
                                desc: "针对应用特点定制优化方案，提升用户转化率和留存率",
                                icon: "fa-cogs",
                                color: "from-indigo-500 to-blue-400",
                                image: "https://ai-public.mastergo.com/ai/img_res/3c97af40eba28a7a7111e8ed6f3ad6ee.jpg"
                            }
                        ].map((service, index) => (
                            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
                                </div>
                                <div className="relative p-8">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                            <i className={`fas ${service.icon} text-2xl text-white`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-600">
                                        <span>了解更多</span>
                                        <i className="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* App Store Support Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-6 text-center">支持的应用市场</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">覆盖全球主流应用商店，为您的应用开启全球市场</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 container mx-auto px-6">
                        {[
                            {
                                name: "App Store",
                                image: "https://ai-public.mastergo.com/ai/img_res/5b4434534f6796a0f4d67907812c470f.jpg"
                            },
                            {
                                name: "Google Play",
                                image: "https://ai-public.mastergo.com/ai/img_res/567e0a00051a82a9a3dbc44913340006.jpg"
                            },
                            {
                                name: "华为应用市场",
                                image: "http://www.fastobe.com/static/store/icon-%E5%8D%8E%E4%B8%BA@2x.b908cfb.webp"
                            },
                            {
                                name: "小米应用商店",
                                image: "http://www.fastobe.com/static/store/icon-%E5%B0%8F%E7%B1%B3@2x.8bba102.webp"
                            },
                            {
                                name: "OPPO 软件商店",
                                image: "http://www.fastobe.com/static/store/icon-oppo@2x.daaaa5f.webp"
                            },
                            {
                                name: "vivo 应用商店",
                                image: "http://www.fastobe.com/static/store/icon-vivo@2x.2dc65c0.webp"
                            },
                            {
                                name: "应用宝",
                                image: "http://www.fastobe.com/static/store/icon-%E5%BA%94%E7%94%A8%E5%AE%9D@2x.b39a010.webp"
                            },
                            {
                                name: "360 手机助手",
                                image: "http://www.fastobe.com/static/store/icon-360@2x.6c5ee0e.webp"
                            },
                            {
                                name: "魅族应用商店",
                                image: "https://ai-public.mastergo.com/ai/img_res/0af4f1ec0f86f7bebbce03bdbcc911d1.jpg"
                            },
                            {
                                name: "一加商店",
                                image: "https://ai-public.mastergo.com/ai/img_res/343a2456798f15d6385ca278864c6d9c.jpg"
                            },
                            {
                                name: "联想应用商店",
                                image: "https://ai-public.mastergo.com/ai/img_res/a8d3b0516c259bbea46518a59bb3c385.jpg"
                            },
                            {
                                name: "酷安",
                                image: "https://ai-public.mastergo.com/ai/img_res/af001c5940c07022c1fdae5a394dd3d7.jpg"
                            }
                        ].map((store, index) => (
                            <div key={index} className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src={store.image}
                                    alt={store.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-semibold text-center">{store.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Work Process Section */}
                <div className="mb-16 container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6 text-center">服务流程</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">我们采用科学的方法论和专业的工作流程，为您提供全方位的应用优化服务</p>
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 -translate-y-1/2"></div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            <div className="relative group">
                                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-emerald-500/20 via-emerald-500 to-emerald-500"></div>
                                <div className="hidden md:flex absolute top-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-emerald-500 items-center justify-center text-xl font-bold text-emerald-600 shadow-lg">1</div>
                                <div className="relative mt-16 md:mt-32 p-4 sm:p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <div className="mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-comments text-2xl text-emerald-600"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">需求沟通</h3>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>明确优化目标</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>了解产品定位</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>确定合作方式</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-emerald-500/20 via-emerald-500 to-emerald-500"></div>
                                <div className="hidden md:flex absolute top-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-emerald-500 items-center justify-center text-xl font-bold text-emerald-600 shadow-lg">2</div>
                                <div className="relative mt-16 md:mt-32 p-4 sm:p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <div className="mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-search-plus text-2xl text-emerald-600"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">竞品分析</h3>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>分析竞品策略</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>找出差异化点</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>制定优化方向</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-emerald-500/20 via-emerald-500 to-emerald-500"></div>
                                <div className="hidden md:flex absolute top-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-emerald-500 items-center justify-center text-xl font-bold text-emerald-600 shadow-lg">3</div>
                                <div className="relative mt-16 md:mt-32 p-4 sm:p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <div className="mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-tasks text-2xl text-emerald-600"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">方案制定</h3>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>制定优化方案</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>设定关键指标</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>规划实施步骤</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-emerald-500/20 via-emerald-500 to-emerald-500"></div>
                                <div className="hidden md:flex absolute top-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-emerald-500 items-center justify-center text-xl font-bold text-emerald-600 shadow-lg">4</div>
                                <div className="relative mt-16 md:mt-32 p-4 sm:p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <div className="mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-chart-line text-2xl text-emerald-600"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">执行优化</h3>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>实施优化方案</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>监控关键数据</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>动态调整策略</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-emerald-500/20 via-emerald-500 to-emerald-500"></div>
                                <div className="hidden md:flex absolute top-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-emerald-500 items-center justify-center text-xl font-bold text-emerald-600 shadow-lg">5</div>
                                <div className="relative mt-16 md:mt-32 p-4 sm:p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <div className="mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                        <i className="fas fa-file-alt text-2xl text-emerald-600"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">效果汇报</h3>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>数据效果分析</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>优化成果展示</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-emerald-500"></i>后续方案建议</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default AsoPage
