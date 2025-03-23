import React from 'react';
import { motion } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  score?: number;
  category?: string;
  url?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
}

export function SearchResults({ results, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 border-t-4 border-b-4 border-purple-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-300">搜索数据中...</p>
        </motion.div>
      </div>
    );
  }
  
  if (results.length === 0) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-2xl mx-auto mt-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-white">搜索结果</h2>
      
      <div className="space-y-4">
        {results.map((result, index) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/15 transition-all border border-white/10 shadow-xl"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {result.title}
              </h3>
              {result.score && (
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                  匹配度: {Math.round(result.score * 100)}%
                </span>
              )}
            </div>
            
            {result.category && (
              <div className="mb-2">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                  {result.category}
                </span>
              </div>
            )}
            
            <p className="text-gray-300 mb-3">{result.content}</p>
            
            {result.url && (
              <a 
                href={result.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center"
              >
                查看详情
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}