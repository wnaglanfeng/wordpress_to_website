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


const Header: React.FC = () => {
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
        <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center justify-between w-full">
                        <img src="http://www.fastobe.com/static/picture/logo-cornflower-blue.png" alt="方糖ASO" className="h-14" />
                        {/* <div className="text-xl font-bold text-gray-800">方糖ASO</div> */}
                        <div className="flex items-center">
                            <div className="hidden md:flex items-center space-x-8 whitespace-nowrap justify-end">
                                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">首页</a>
                                <a href="/aso" className="text-gray-600 hover:text-blue-600 transition-colors">应用商店优化</a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">游戏发行服务</a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">广告投放</a>
                                <a href="/mini" className="text-gray-600 hover:text-blue-600 transition-colors">小程序优化</a>
                                <a href="/posts" className="text-gray-600 hover:text-blue-600 transition-colors">行业资讯</a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">客户案例</a>
                            </div>
                            <div className="flex items-center">
                                <button
                                    className="md:hidden text-gray-600 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
                            <div className="flex flex-col space-y-4 px-6">
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">首页</a>
                                <a href="/aso" className="text-gray-600 hover:text-blue-600 transition-colors">应用商店优化</a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">游戏发行服务</a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">广告投放</a>
                                <a href="/mini" className="text-gray-600 hover:text-blue-600 transition-colors">小程序优化</a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">行业资讯</a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">客户案例</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;