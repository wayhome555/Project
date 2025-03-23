import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { SearchHistory } from './components/SearchHistory';
import { ThemeToggle } from './components/ThemeToggle';
import { api } from './services/api';
import { motion } from 'framer-motion';

export default function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // 获取最近搜索记录
  useEffect(() => {
    const fetchRecentSearches = async () => {
      try {
        const recentSearches = await api.getRecentSearches();
        setSearchHistory(recentSearches);
      } catch (error) {
        console.error('Failed to fetch recent searches:', error);
      }
    };

    fetchRecentSearches();
  }, []);

  // 处理搜索
  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      const data = await api.search(query);
      setResults(data);
      
      // 更新搜索历史
      if (!searchHistory.includes(query)) {
        const newHistory = [query, ...searchHistory].slice(0, 5);
        setSearchHistory(newHistory);
      }
    } catch (error) {
      console.error('Search failed:', error);
      // 添加错误处理UI
    } finally {
      setIsLoading(false);
    }
  };

  // 切换主题
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkTheme 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800'
    } p-8`}>
      <ThemeToggle isDark={isDarkTheme} toggleTheme={toggleTheme} />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className={`text-5xl font-bold mb-4 ${
          isDarkTheme 
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400' 
            : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600'
        }`}>
          AI 智能搜索
        </h1>
        <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-600'}>
          输入关键词，探索智能搜索体验
        </p>
      </motion.div>

      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      
      <SearchHistory history={searchHistory} onSelect={handleSearch} />
      
      <SearchResults results={results} isLoading={isLoading} />
      
      {/* 页脚 */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center text-sm text-gray-400"
      >
        <p>© 2023 AI 智能搜索 | 基于先进的语义匹配技术</p>
      </motion.footer>
    </div>
  );
}