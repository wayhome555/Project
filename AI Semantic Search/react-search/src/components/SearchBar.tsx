import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { api } from '@/services/api';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // 获取搜索建议
  useEffect(() => {
    const getSuggestions = async () => {
      if (query.length > 1) {
        const data = await api.getSuggestions(query);
        setSuggestions(data);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };
    
    const debounce = setTimeout(() => {
      getSuggestions();
    }, 300);
    
    return () => clearTimeout(debounce);
  }, [query]);
  
  // 处理搜索
  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setShowSuggestions(false);
    }
  };
  
  // 选择建议
  const selectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };
  
  // 处理键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-2 w-full"
      >
        <Input
          type="text"
          placeholder="输入搜索关键词..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 1 && setShowSuggestions(true)}
          className="flex-1 shadow-lg"
        />
        <Button 
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
        >
          {isLoading ? 
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>搜索中</span>
            </div> : '搜索'
          }
        </Button>
      </motion.div>
      
      {/* 搜索建议 */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 shadow-xl rounded-md overflow-hidden"
          >
            <ul className="py-1">
              {suggestions.map((suggestion, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => selectSuggestion(suggestion)}
                >
                  {suggestion}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}