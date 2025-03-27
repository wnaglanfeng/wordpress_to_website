// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果

import React, { useState } from 'react';
import { search } from '../../utils/appstore.js';

const SearchApp = () => {
  const [selectedCountry, setSelectedCountry] = useState(1);
  const [selectedStore, setSelectedStore] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showStoreDropdown, setShowStoreDropdown] = useState(false);

  const countries = [
    { id: 1, name: '中国', icon: 'fa-flag-china' },
    { id: 2, name: '美国', icon: 'fa-flag-usa' },
    { id: 3, name: '日本', icon: 'fa-flag-japan' },
    { id: 4, name: '韩国', icon: 'fa-flag-south-korea' },
    { id: 5, name: '英国', icon: 'fa-flag-uk' },
  ];

  const stores = [
    { id: 1, name: 'App Store', icon: 'fa-apple' },
    { id: 2, name: 'Google Play', icon: 'fa-google-play' },
    { id: 3, name: '华为应用市场', icon: 'fa-mobile-screen' },
    { id: 4, name: '小米应用商店', icon: 'fa-mobile' },
    { id: 5, name: 'OPPO 软件商店', icon: 'fa-mobile-button' },
  ];

  const handleSearch = () => {
    // 处理搜索逻辑
    console.log('Search:', { selectedCountry, selectedStore, searchText });
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">全球应用搜索</h1>
          <p className="text-center text-gray-600 mb-12">快速查找全球各大应用商店的应用</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* 国家选择 */}
            <div className="relative">
              <button
                className="!rounded-button whitespace-nowrap w-full md:w-48 h-12 px-4 bg-white border border-gray-200 hover:border-blue-500 flex items-center justify-between text-gray-700 focus:outline-none"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              >
                <div className="flex items-center">
                  <i className={`fas ${countries.find(c => c.id === selectedCountry)?.icon} mr-2`}></i>
                  <span>{countries.find(c => c.id === selectedCountry)?.name}</span>
                </div>
                <i className="fas fa-chevron-down ml-2"></i>
              </button>
              
              {showCountryDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {countries.map((country) => (
                    <div
                      key={country.id}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
                      onClick={() => {
                        setSelectedCountry(country.id);
                        setShowCountryDropdown(false);
                      }}
                    >
                      <i className={`fas ${country.icon} mr-2`}></i>
                      <span>{country.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 应用商店选择 */}
            <div className="relative">
              <button
                className="!rounded-button whitespace-nowrap w-full md:w-48 h-12 px-4 bg-white border border-gray-200 hover:border-blue-500 flex items-center justify-between text-gray-700 focus:outline-none"
                onClick={() => setShowStoreDropdown(!showStoreDropdown)}
              >
                <div className="flex items-center">
                  <i className={`fas ${stores.find(s => s.id === selectedStore)?.icon} mr-2`}></i>
                  <span>{stores.find(s => s.id === selectedStore)?.name}</span>
                </div>
                <i className="fas fa-chevron-down ml-2"></i>
              </button>
              
              {showStoreDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {stores.map((store) => (
                    <div
                      key={store.id}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
                      onClick={() => {
                        setSelectedStore(store.id);
                        setShowStoreDropdown(false);
                      }}
                    >
                      <i className={`fas ${store.icon} mr-2`}></i>
                      <span>{store.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 搜索框 */}
            <div className="flex-1 relative">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-12 pl-12 pr-10 border border-gray-200 !rounded-button bg-white focus:border-blue-500 focus:outline-none text-gray-700"
                  placeholder="请输入应用关键词"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                {searchText && (
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchText('')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>

            {/* 搜索按钮 */}
            <button
              className="!rounded-button whitespace-nowrap h-12 px-8 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none flex items-center justify-center"
              onClick={handleSearch}
            >
              <i className="fas fa-search mr-2"></i>
              搜索
            </button>
          </div>

          {/* 热门搜索 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">热门搜索</h2>
            <div className="flex flex-wrap gap-2">
              {[
                '抖音', 'ChatGPT', '微信', 'Spotify',
                '今日头条', 'Instagram', 'TikTok', 'YouTube',
                '淘宝', '微博', 'Netflix', '知乎'
              ].map((keyword, index) => (
                <button
                  key={index}
                  className="!rounded-button whitespace-nowrap px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
                  onClick={() => setSearchText(keyword)}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* 搜索历史 */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">最近搜索</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-trash-alt"></i>
                <span className="ml-2">清空历史</span>
              </button>
            </div>
            <div className="space-y-3">
              {[
                { keyword: 'Midjourney', store: 'App Store', time: '2024-01-15 14:30' },
                { keyword: 'Notion', store: 'Google Play', time: '2024-01-15 10:20' },
                { keyword: 'Discord', store: '华为应用市场', time: '2024-01-14 18:45' },
                { keyword: 'Telegram', store: 'App Store', time: '2024-01-14 15:15' },
                { keyword: 'Microsoft Office', store: '小米应用商店', time: '2024-01-14 09:30' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center">
                    <i className="fas fa-history text-gray-400 mr-3"></i>
                    <div>
                      <div className="text-gray-700">{item.keyword}</div>
                      <div className="text-sm text-gray-500">{item.store}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchApp;

