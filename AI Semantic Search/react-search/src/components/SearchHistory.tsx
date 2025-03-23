import React from 'react';
import { motion } from 'framer-motion';

interface SearchHistoryProps {
  history: string[];
  onSelect: (query: string) => void;
}

export function SearchHistory({ history, onSelect }: SearchHistoryProps) {
  if (history.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mt-4"
    >
      <h3 className="text-sm text-gray-400 mb-2">最近搜索:</h3>
      <div className="flex flex-wrap gap-2">
        {history.map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelect(item)}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-gray-300 transition-colors"
          >
            {item}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}