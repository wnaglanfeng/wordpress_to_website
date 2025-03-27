import React, { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : 1024);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
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


const Footer: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const isMobile = useIsMobile();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-gradient-to-br from-gray-100 via-gray-50 to-white text-gray-600 py-8 mt-auto">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 text-center sm:text-left">
                    <span className="text-gray-700 font-medium whitespace-nowrap">友情链接：</span>
                    <div className="flex flex-wrap gap-3">
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">移动开发者联盟</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">ASO100</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">七麦数据</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">TalkingData</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">AppAnnie</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">极光推送</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">神策数据</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">广点通</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">巨量引擎</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">快手营销</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">小红书广告</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">知乎广告</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">微博广告</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">优量汇</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">开发者社区</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center sm:text-left">
                    <div className="space-y-4">
                        <div className="flex sm:block justify-center">
                            <img src="http://www.fastobe.com/static/picture/logo-cornflower-blue.png" alt="方糖ASO" className="h-18" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-base font-semibold mb-3 text-gray-700">关于我们</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">专注于移动应用优化服务，助力开发者实现业务增长</p>
                        </div>
                        <div className="flex gap-3 mt-6 justify-center sm:justify-start">
                            <div className="group relative">
                                <div className="w-8 h-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer">
                                    <i className="fab fa-zhihu text-sm text-emerald-600"></i>
                                </div>
                                <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 bottom-full mb-2">
                                    <div className="bg-white p-2 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                                        <i className="fas fa-qrcode text-4xl text-emerald-600"></i>
                                    </div>
                                    <div className="w-3 h-3 bg-white absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="w-8 h-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer">
                                    <i className="fab fa-weixin text-sm text-emerald-600"></i>
                                </div>
                                <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 bottom-full mb-2">
                                    <div className="bg-white p-2 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                                        <i className="fas fa-qrcode text-4xl text-emerald-600"></i>
                                    </div>
                                    <div className="w-3 h-3 bg-white absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="w-8 h-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer">
                                    <i className="fab fa-weibo text-sm text-emerald-600"></i>
                                </div>
                                <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 bottom-full mb-2">
                                    <div className="bg-white p-2 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                                        <i className="fas fa-qrcode text-4xl text-emerald-600"></i>
                                    </div>
                                    <div className="w-3 h-3 bg-white absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="w-8 h-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer">
                                    <i className="fab fa-discord text-sm text-emerald-600"></i>
                                </div>
                                <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 bottom-full mb-2">
                                    <div className="bg-white p-2 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                                        <i className="fas fa-qrcode text-4xl text-emerald-600"></i>
                                    </div>
                                    <div className="w-3 h-3 bg-white absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="w-8 h-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer">
                                    <i className="fas fa-heart text-sm text-emerald-600"></i>
                                </div>
                                <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 bottom-full mb-2">
                                    <div className="bg-white p-2 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                                        <i className="fas fa-qrcode text-4xl text-emerald-600"></i>
                                    </div>
                                    <div className="w-3 h-3 bg-white absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="w-8 h-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer">
                                    <i className="fab fa-tiktok text-sm text-emerald-600"></i>
                                </div>
                                <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 bottom-full mb-2">
                                    <div className="bg-white p-2 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                                        <i className="fas fa-qrcode text-4xl text-emerald-600"></i>
                                    </div>
                                    <div className="w-3 h-3 bg-white absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold mb-3 text-gray-700">站点地图</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <ul className="text-gray-500 text-sm space-y-2">
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">首页</li>
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">应用商店优化</li>
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">游戏发行服务</li>
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">广告投放</li>
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">小程序优化</li>
                            </ul>
                            <ul className="text-gray-500 text-sm space-y-2">
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">解决方案</li>
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">客户案例</li>
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">技术支持</li>
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">新闻中心</li>
                                <li className="hover:text-emerald-600 cursor-pointer transition-colors">联系我们</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold mb-3 text-gray-700">合作伙伴</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                            {[
                                { name: "Apple", prompt: "modern minimal apple company logo in gradient style against clean white background" },
                                { name: "Google Play", prompt: "modern minimal google play store logo in gradient style against clean white background" },
                                { name: "Huawei", prompt: "modern minimal huawei company logo in gradient style against clean white background" },
                                { name: "OPPO", prompt: "modern minimal oppo company logo in gradient style against clean white background" },
                                { name: "VIVO", prompt: "modern minimal vivo company logo in gradient style against clean white background" },
                                { name: "Xiaomi", prompt: "modern minimal xiaomi company logo in gradient style against clean white background" },
                                { name: "WeChat", prompt: "modern minimal wechat company logo in gradient style against clean white background" },
                                { name: "Alibaba", prompt: "modern minimal alibaba company logo in gradient style against clean white background" },
                                { name: "Tencent", prompt: "modern minimal tencent company logo in gradient style against clean white background" },
                                { name: "ByteDance", prompt: "modern minimal bytedance company logo in gradient style against clean white background" },
                                { name: "Bilibili", prompt: "modern minimal bilibili company logo in gradient style against clean white background" },
                                { name: "Unity", prompt: "modern minimal unity company logo in gradient style against clean white background" }
                            ].map((partner, index) => (
                                <div key={index} className="relative w-12 h-12 mx-auto">
                                    <div className="w-full h-full p-2 rounded-full bg-gray-100 flex items-center justify-center group hover:bg-gray-50 transition-all">
                                        <img
                                            src={`https://mastergo.com/ai/api/search-image?query=${partner.prompt}&width=80&height=80&orientation=squarish`}
                                            alt={partner.name}
                                            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <div className="absolute -inset-0.5 bg-emerald-100/30 rounded-full -z-10 group-hover:bg-emerald-100/50 transition-colors"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold mb-3 text-gray-700">联系方式</h3>
                        <ul className="text-gray-500 text-sm space-y-2 flex flex-col sm:block items-center">
                            <li className="flex items-center gap-2">
                                <i className="fas fa-phone-alt text-emerald-600"></i>
                                电话：+86 132-6985-2067
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-envelope text-emerald-600"></i>
                                邮箱：service@fastobe.com
                            </li>
                        </ul>
                        <div className="mt-4 flex gap-4 justify-center sm:justify-start">
                            <div className="flex flex-col items-center">
                                <img src="https://ai-public.mastergo.com/ai/img_res/38e950c601a16ab35dd78dba223a3794.jpg" alt="商务微信1" className="w-24 h-24 rounded-lg shadow-md" />
                                <p className="text-xs text-gray-500 mt-2">商务经理</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="https://ai-public.mastergo.com/ai/img_res/580d026f6fdefe45cfb2424a9887b16b.jpg" alt="商务微信2" className="w-24 h-24 rounded-lg shadow-md" />
                                <p className="text-xs text-gray-500 mt-2">技术支持</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-6 pt-6">
                    <div className="text-center text-gray-500">
                        <p className="text-xs">© 2024 河北亘元网络科技有限公司 版权所有. 冀 ICP 备 2022012649号-1</p>
                        <div className="mt-2 space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">隐私政策</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">服务条款</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">免责声明</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">用户协议</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">支持中心</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;