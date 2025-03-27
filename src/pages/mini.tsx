// // 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, EffectFlip } from 'swiper/modules';
// import 'swiper/css/effect-flip';
// import 'swiper/css';https://doc.oneway.mobi/OCPX/#/?id=_18-%e8%af%b7%e6%b1%82%e6%88%90%e5%8a%9f%e5%93%8d%e5%ba%94
// import 'swiper/css/pagination';
// const useIsMobile = () => {
//     const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
//     useEffect(() => {
//         if (typeof window === 'undefined') return;
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);
//     return isMobile;
// };
// const App: React.FC = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [showBackToTop, setShowBackToTop] = useState(false);
//     const isMobile = useIsMobile();
//     useEffect(() => {
//         if (typeof window === 'undefined') return;
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 0);
//             setShowBackToTop(window.scrollY > 300);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };
//     return (
//         <div className="bg-slate-50 min-h-screen flex flex-col">
            
//             <div className="relative min-h-[420px] sm:min-h-[540px] lg:min-h-[640px] bg-gradient-to-r from-slate-50 to-emerald-50 overflow-hidden pt-16 sm:pt-20 z-0">
//                 <div className="absolute inset-0 z-0">
//                     <Swiper
//                         modules={[Pagination, Autoplay]}
//                         pagination={{ clickable: true }}
//                         autoplay={{
//                             delay: 5000,
//                             disableOnInteraction: false,
//                         }}
//                         loop={true}
//                         className="w-full h-full"
//                         slidesPerView={isMobile ? 1 : 2}
//                         spaceBetween={0}
//                         speed={800}
//                         allowTouchMove={true}
//                     >
//                         <SwiperSlide>
//                             <div className="relative w-full h-full">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/530ac2077fb9658e9e0cb57e92328fa5.jpg"
//                                     className="w-full h-full object-cover"
//                                     alt="背景图1"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-50/70 to-emerald-50/65 backdrop-blur-[1px]"></div>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className="relative w-full h-full">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/c1300e4a792f72e7c5c4e525a001bae2.jpg"
//                                     className="w-full h-full object-cover"
//                                     alt="背景图2"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-50/70 to-emerald-50/65 backdrop-blur-[1px]"></div>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className="relative w-full h-full">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/956bd554820ddf4bcf58bbc642efa048.jpg"
//                                     className="w-full h-full object-cover"
//                                     alt="背景图3"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-50/70 to-emerald-50/65 backdrop-blur-[1px]"></div>
//                             </div>
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>
//                 <div className="relative container mx-auto px-6 h-full flex items-center z-20">
//                     <div className="max-w-full sm:max-w-xl lg:max-w-2xl relative z-10 pt-12 lg:pt-20">
//                         <span className="inline-block px-4 py-1.5 bg-indigo-100/90 backdrop-blur-sm text-indigo-600 rounded-full text-sm font-semibold mb-8">专业的小程序优化服务商</span>
//                         <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight">让您的小程序<br />快速增长</h1>
//                         <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-xl">提供微信小程序、支付宝小程序全方位优化服务，助力商家获得更高曝光和转化</p>
//                         <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
//                             <button className="w-full sm:w-auto bg-emerald-600 text-white px-8 sm:px-10 py-3.5 sm:py-4.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 !rounded-button whitespace-nowrap text-base">
//                                 免费优化诊断
//                             </button>
//                             <button className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 px-8 sm:px-10 py-3.5 sm:py-4.5 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 !rounded-button whitespace-nowrap text-base">
//                                 定制优化方案
//                             </button>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
//                             <div className="text-center group hover:-translate-y-1 transition-transform">
//                                 <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3">300%</div>
//                                 <div className="text-gray-600 font-medium">平均流量提升</div>
//                             </div>
//                             <div className="text-center">
//                                 <div className="text-xl sm:text-3xl font-bold text-blue-600 mb-2">1500+</div>
//                                 <div className="text-gray-600">优化成功案例</div>
//                             </div>
//                             <div className="text-center">
//                                 <div className="text-xl sm:text-3xl font-bold text-blue-600 mb-2">85%</div>
//                                 <div className="text-gray-600">转化率提升</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Main Content */}
//             <div className="container mx-auto px-6 py-16">
//                 {/* Mini Program Services Section */}
//                 <div className="py-16">
//                     <div className="container mx-auto px-6">
//                         <h2 className="text-3xl font-bold text-center mb-4">小程序全流程服务</h2>
//                         <p className="text-gray-600 text-center mb-16">一站式小程序开发与运营解决方案</p>
//                         {/* Service 1: 定制开发 */}
//                         <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 relative">
//                             <div className="absolute -inset-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl -z-10 opacity-70"></div>
//                             <div className="flex-1">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/6f0c230796c80000ff370960387cd9c1.jpg"
//                                     alt="定制开发"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <h3 className="text-2xl font-bold mb-4">定制开发服务</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     提供专业的小程序定制开发服务，从需求分析到上线运维的全流程服务：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">专业开发团队，平均 5 年以上开发经验</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">涵盖电商、社交、工具等多个领域的开发经验</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">提供源码交付，帮助客户快速迭代更新</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         {/* Service 2: 流量主变现 */}
//                         <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24">
//                             <div className="flex-1">
//                                 <h3 className="text-2xl font-bold mb-4 text-right">流量主认证</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed text-right">
//                                     帮助小程序快速达到流量主认证标准，开通广告变现能力：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3 justify-end">
//                                         <div>
//                                             <p className="text-gray-600 text-right">专业提升日活用户(DAU)，加速达到 1000+ UV 认证标准</p>
//                                         </div>
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3 justify-end">
//                                         <div>
//                                             <p className="text-gray-600 text-right">优化用户留存策略，确保 UV 指标稳定达标</p>
//                                         </div>
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3 justify-end">
//                                         <div>
//                                             <p className="text-gray-600 text-right">全程监控流量数据，确保认证过程合规有效</p>
//                                         </div>
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="flex-1">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/532d44f3b59a6559e4360770bd128906.jpg"
//                                     alt="流量主变现"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                         </div>
//                         {/* Service 3: UV/PV 优化 */}
//                         <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 relative">
//                             <div className="absolute -inset-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl -z-10 opacity-70"></div>
//                             <div className="flex-1">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/4f73c1dd596b01b2ddd42b76cf43205e.jpg"
//                                     alt="UV/PV优化"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <h3 className="text-2xl font-bold mb-4">UV/PV 流量优化</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     专业的用户增长服务，助力提升访问量和活跃度：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">多维度流量分析，精准定位用户群体</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">智能推荐算法，提升用户访问频次</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">活动运营策划，带动流量增长</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         {/* Service 4: 关键词覆盖优化 */}
//                         <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24">
//                             <div className="flex-1">
//                                 <h3 className="text-2xl font-bold mb-4">关键词覆盖优化</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     基于小程序搜索特性，分析并优化关键词覆盖率，实现更好的搜索曝光：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">小程序关键词覆盖率诊断，核心词和行业词覆盖评估</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">基于搜索场景重新编写小程序描述，优化关键词布局</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">定期跟踪关键词覆盖效果，持续优化搜索表现</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="flex-1">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/ccf2a84fffaa08236c27e1434fb7df4f.jpg"
//                                     alt="关键词覆盖优化"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                         </div>
//                         {/* Service 5: 关键词排名优化 */}
//                         <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 relative">
//                             <div className="absolute -inset-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl -z-10 opacity-70"></div>
//                             <div className="flex-1">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/d7c31890ee050f4fc5bae54904f7740f.jpg"
//                                     alt="关键词排名优化"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <h3 className="text-2xl font-bold mb-4">关键词排名优化</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     专业的搜索排名优化服务，提升关键词排名：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">核心词排名提升，增加优质流量</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">搜索算法优化，提高排名稳定性</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">数据监控分析，及时调整优化策略</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         {/* Service 6: 体验/交易评分提升 */}
//                         <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24 relative">
//                             <div className="absolute -inset-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl -z-10 opacity-70"></div>
//                             <div className="flex-1">
//                                 <h3 className="text-2xl font-bold mb-4 text-right">体验/交易评分提升</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed text-right">
//                                     通过专业的口碑管理和用户体验优化服务，全面提升应用评分和市场表现：
//                                 </p>
//                                 <div className="space-y-4">
//                                     <ul className="space-y-4">
//                                         <li className="flex items-start gap-3 justify-end">
//                                             <div>
//                                                 <p className="text-gray-600 text-right">专业用户体验评估与反馈收集</p>
//                                             </div>
//                                             <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                                 <i className="fas fa-check text-sm text-emerald-600"></i>
//                                             </div>
//                                         </li>
//                                         <li className="flex items-start gap-3 justify-end">
//                                             <div>
//                                                 <p className="text-gray-600 text-right">真实用户测评与体验反馈</p>
//                                             </div>
//                                             <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                                 <i className="fas fa-check text-sm text-emerald-600"></i>
//                                             </div>
//                                         </li>
//                                         <li className="flex items-start gap-3 justify-end">
//                                             <div>
//                                                 <p className="text-gray-600 text-right">用户口碑管理与满意度维护</p>
//                                             </div>
//                                             <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                                 <i className="fas fa-check text-sm text-emerald-600"></i>
//                                             </div>
//                                         </li>
//                                         <li className="flex items-start gap-3 justify-end">
//                                             <div>
//                                                 <p className="text-gray-600 text-right">评分数据跟踪与优化分析</p>
//                                             </div>
//                                             <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                                 <i className="fas fa-check text-sm text-emerald-600"></i>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="flex-1">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/37b6f18498387bce9a0729be068aeb12.jpg"
//                                     alt="体验/交易评分优化"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                         </div>
//                         {/* Service 8: 数据分析服务 */}
//                         <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
//                             <div className="flex-1">
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/e11ea3df9e05ed5a80e48950b0efe953.jpg"
//                                     alt="数据分析服务"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <h3 className="text-2xl font-bold mb-4">优化效果跟踪</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     对小程序运营数据进行定期跟踪分析，及时调整优化策略：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">每周访问量和涨幅报告，7 日、30 日趋势分析</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">用户活跃数据监控：访问深度、停留时长、跳出率</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">转化数据跟踪：新增用户数、付费转化率、复购率</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Partner Success Stories */}
//             <div className="container mx-auto px-6">
//                 <h2 className="text-3xl font-bold text-center mb-4">
//                     <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">成功案例</span>
//                 </h2>
//                 <p className="text-gray-600 text-center mb-12">来自我们合作伙伴的真实成长故事</p>
//                 <Swiper
//                     modules={[Pagination, Autoplay]}
//                     pagination={{ clickable: true }}
//                     autoplay={{
//                         delay: 5000,
//                         disableOnInteraction: false,
//                     }}
//                     effect="flip"
//                     speed={800}
//                     loop={true}
//                     className="w-full max-w-6xl mx-auto mb-32"
//                 >
//                     <SwiperSlide>
//                         <div className="flex flex-col lg:flex-row items-center gap-12 px-6 py-8">
//                             <div className="flex-1">
//                                 <img
//                                     src="https://mastergo.com/ai/api/search-image?query=modern wechat mini program interface design showcase with elegant shopping features and promotional elements in professional tech environment with soft ambient lighting&width=600&height=400&orientation=landscape"
//                                     alt="电商小程序案例"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-6">电商小程序</span>
//                                 <h3 className="text-2xl font-bold mb-4">「优选严选」日访问破 100 万</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     通过微信生态流量运营和智能推荐策略，实现快速增长：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">APP 搜索排名提升，关键词覆盖率提升 280%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">客单价提升 45%，复购率提升至 68%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">用户活跃度提升 90%，好评率达到 4.9 分</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="flex flex-col lg:flex-row items-center gap-12 px-6 py-8">
//                             <div className="flex-1">
//                                 <img
//                                     src="https://mastergo.com/ai/api/search-image?query=modern wechat mini game interface design showcase featuring casual gameplay elements and social features in professional gaming environment with soft gradient lighting&width=600&height=400&orientation=landscape"
//                                     alt="小游戏案例"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">小游戏</span>
//                                 <h3 className="text-2xl font-bold mb-4">「欢乐冒险岛」月活跃破 800 万</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     通过微信社交裂变和游戏内容优化策略，实现显著增长：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">首日用户留存提升至 45%，7日留存达 28%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">付费率提升 150%，ARPU 值提升 85%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">获得 App Store 编辑推荐，带来 50 万新增</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="flex flex-col lg:flex-row items-center gap-12 px-6 py-8">
//                             <div className="flex-1">
//                                 <img
//                                     src="https://mastergo.com/ai/api/search-image?query=modern wechat mini program productivity tool interface design with clean workflow and efficiency features in professional tech environment with soft lighting&width=600&height=400&orientation=landscape"
//                                     alt="工具小程序案例"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <span className="inline-block px-4 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-6">工具小程序</span>
//                                 <h3 className="text-2xl font-bold mb-4">「效率助手」用户数破 500 万</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     通过微信场景接入和用户体验优化，实现用户规模快速增长：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">应用启动速度提升 60%，崩溃率降至 0.1%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">用户日均使用时长提升至 45 分钟</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">会员转化率提升 200%，续订率达 85%</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//                 {/* Supported Platforms */}
//                 <div className="mb-24">
//                     <h2 className="text-3xl font-bold text-center mb-4">
//                         <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">支持的平台</span>
//                     </h2>
//                     <p className="text-gray-600 text-center mb-12">我们提供全面的小程序优化服务，覆盖主流平台</p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//                         <div className="group flex items-center gap-8 p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
//                             <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <div className="w-40 h-40 flex-shrink-0 relative">
//                                 <div className="absolute inset-0 bg-emerald-100/20 rounded-2xl transform -rotate-6 group-hover:rotate-3 transition-transform"></div>
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/39705c7a723ea36c9d59c178dfaba034.jpg"
//                                     alt="微信小程序"
//                                     className="w-full h-full object-cover rounded-2xl relative z-10 group-hover:scale-105 transition-transform"
//                                 />
//                             </div>
//                             <div className="relative z-10">
//                                 <h3 className="text-2xl font-bold mb-3 text-gray-800">微信小程序</h3>
//                                 <p className="text-gray-600 mb-4 text-base">覆盖超过 10 亿用户的微信生态，提供完整的小程序增长解决方案</p>
//                                 <div className="flex gap-2 flex-wrap">
//                                     <span className="px-4 py-1.5 text-sm bg-emerald-50 text-emerald-600 rounded-full font-medium">搜索优化</span>
//                                     <span className="px-4 py-1.5 text-sm bg-emerald-50 text-emerald-600 rounded-full font-medium">广告投放</span>
//                                     <span className="px-4 py-1.5 text-sm bg-emerald-50 text-emerald-600 rounded-full font-medium">流量分析</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="group flex items-center gap-8 p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
//                             <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <div className="w-40 h-40 flex-shrink-0 relative">
//                                 <div className="absolute inset-0 bg-blue-100/20 rounded-2xl transform -rotate-6 group-hover:rotate-3 transition-transform"></div>
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/2ced582aa583bb7908affce77657ae87.jpg"
//                                     alt="支付宝小程序"
//                                     className="w-full h-full object-cover rounded-2xl relative z-10 group-hover:scale-105 transition-transform"
//                                 />
//                             </div>
//                             <div className="relative z-10">
//                                 <h3 className="text-2xl font-bold mb-3 text-gray-800">支付宝小程序</h3>
//                                 <p className="text-gray-600 mb-4 text-base">接入超过 8 亿用户的支付宝平台，助力商家获得更多商机</p>
//                                 <div className="flex gap-2 flex-wrap">
//                                     <span className="px-4 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-full font-medium">搜索优化</span>
//                                     <span className="px-4 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-full font-medium">交易转化</span>
//                                     <span className="px-4 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-full font-medium">用户分析</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="group flex items-center gap-8 p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
//                             <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <div className="w-40 h-40 flex-shrink-0 relative">
//                                 <div className="absolute inset-0 bg-red-100/20 rounded-2xl transform -rotate-6 group-hover:rotate-3 transition-transform"></div>
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/e5530e0a1577fdf74bf8e401dd5f54f3.jpg"
//                                     alt="字节小程序"
//                                     className="w-full h-full object-cover rounded-2xl relative z-10 group-hover:scale-105 transition-transform"
//                                 />
//                             </div>
//                             <div className="relative z-10 text-right">
//                                 <h3 className="text-2xl font-bold mb-3 text-gray-800">字节小程序</h3>
//                                 <p className="text-gray-600 mb-4 text-base">对接抖音、今日头条等平台，打造爆款小程序</p>
//                                 <div className="flex gap-2 flex-wrap justify-end">
//                                     <span className="px-4 py-1.5 text-sm bg-red-50 text-red-600 rounded-full font-medium">内容分发</span>
//                                     <span className="px-4 py-1.5 text-sm bg-red-50 text-red-600 rounded-full font-medium">流量变现</span>
//                                     <span className="px-4 py-1.5 text-sm bg-red-50 text-red-600 rounded-full font-medium">数据监测</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="group flex items-center gap-8 p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
//                             <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <div className="w-40 h-40 flex-shrink-0 relative">
//                                 <div className="absolute inset-0 bg-purple-100/20 rounded-2xl transform -rotate-6 group-hover:rotate-3 transition-transform"></div>
//                                 <img
//                                     src="https://ai-public.mastergo.com/ai/img_res/49ba32d0ba825f847643c8e67dab0dbf.jpg"
//                                     alt="快应用"
//                                     className="w-full h-full object-cover rounded-2xl relative z-10 group-hover:scale-105 transition-transform"
//                                 />
//                             </div>
//                             <div className="relative z-10">
//                                 <h3 className="text-2xl font-bold mb-3 text-gray-800">快应用</h3>
//                                 <p className="text-gray-600 mb-4 text-base">覆盖主流安卓手机厂商，实现快速触达用户</p>
//                                 <div className="flex gap-2 flex-wrap">
//                                     <span className="px-4 py-1.5 text-sm bg-purple-50 text-purple-600 rounded-full font-medium">性能优化</span>
//                                     <span className="px-4 py-1.5 text-sm bg-purple-50 text-purple-600 rounded-full font-medium">运营分析</span>
//                                     <span className="px-4 py-1.5 text-sm bg-purple-50 text-purple-600 rounded-full font-medium">转化提升</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <h2 className="text-3xl font-bold text-center mb-4">
//                     <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">成功案例</span>
//                 </h2>
//                 <p className="text-gray-600 text-center mb-12">来自我们合作伙伴的真实成长故事</p>
//                 <Swiper
//                     modules={[Pagination, Autoplay]}
//                     pagination={{ clickable: true }}
//                     autoplay={{
//                         delay: 5000,
//                         disableOnInteraction: false,
//                     }}
//                     effect="flip"
//                     speed={800}
//                     loop={true}
//                     className="w-full max-w-6xl mx-auto"
//                 >
//                     <SwiperSlide>
//                         <div className="flex flex-col lg:flex-row items-center gap-12 px-6 py-8">
//                             <div className="flex-1">
//                                 <img
//                                     src="https://mastergo.com/ai/api/search-image?query=modern wechat mini program interface design showcase with elegant shopping features and promotional elements in professional tech environment with soft ambient lighting&width=600&height=400&orientation=landscape"
//                                     alt="电商小程序案例"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-6">电商小程序</span>
//                                 <h3 className="text-2xl font-bold mb-4">「优选严选」日访问破 100 万</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     通过微信生态流量运营和智能推荐策略，实现快速增长：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">APP 搜索排名提升，关键词覆盖率提升 280%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">客单价提升 45%，复购率提升至 68%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">用户活跃度提升 90%，好评率达到 4.9 分</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="flex flex-col lg:flex-row items-center gap-12 px-6 py-8">
//                             <div className="flex-1">
//                                 <img
//                                     src="https://mastergo.com/ai/api/search-image?query=modern wechat mini game interface design showcase featuring casual gameplay elements and social features in professional gaming environment with soft gradient lighting&width=600&height=400&orientation=landscape"
//                                     alt="小游戏案例"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">小游戏</span>
//                                 <h3 className="text-2xl font-bold mb-4">「欢乐冒险岛」月活跃破 800 万</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     通过微信社交裂变和游戏内容优化策略，实现显著增长：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">首日用户留存提升至 45%，7日留存达 28%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">付费率提升 150%，ARPU 值提升 85%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">获得 App Store 编辑推荐，带来 50 万新增</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="flex flex-col lg:flex-row items-center gap-12 px-6 py-8">
//                             <div className="flex-1">
//                                 <img
//                                     src="https://mastergo.com/ai/api/search-image?query=modern wechat mini program productivity tool interface design with clean workflow and efficiency features in professional tech environment with soft lighting&width=600&height=400&orientation=landscape"
//                                     alt="工具小程序案例"
//                                     className="w-full rounded-2xl shadow-lg"
//                                 />
//                             </div>
//                             <div className="flex-1">
//                                 <span className="inline-block px-4 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-6">工具小程序</span>
//                                 <h3 className="text-2xl font-bold mb-4">「效率助手」用户数破 500 万</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     通过微信场景接入和用户体验优化，实现用户规模快速增长：
//                                 </p>
//                                 <ul className="space-y-4">
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">应用启动速度提升 60%，崩溃率降至 0.1%</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">用户日均使用时长提升至 45 分钟</p>
//                                         </div>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
//                                             <i className="fas fa-check text-sm text-emerald-600"></i>
//                                         </div>
//                                         <div>
//                                             <p className="text-gray-600">会员转化率提升 200%，续订率达 85%</p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
            
           
//         </div>
//     );
// };
// export default App
