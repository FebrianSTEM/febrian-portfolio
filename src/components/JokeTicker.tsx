import React from 'react';
import { JOKES_AND_WISDOM } from '../data/jokes';
import { Sparkles } from 'lucide-react';

export const JokeTicker: React.FC = () => {
  return (
    <div className="w-full bg-slate-900/90 border-b border-blue-500/20 py-2.5 overflow-hidden backdrop-blur-md relative z-50">
      <div className="flex items-center">
        {/* Left Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold rounded-r-md shrink-0 ml-2 z-10">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>TECH HUMOR & WISDOM</span>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-marquee flex items-center gap-8 text-sm font-medium text-slate-300">
            {JOKES_AND_WISDOM.concat(JOKES_AND_WISDOM).map((joke, index) => (
              <div key={`${joke.id}-${index}`} className="inline-flex items-center gap-2 px-2">
                <span className={joke.category === 'wisdom' ? 'text-cyan-400 font-semibold' : 'text-blue-300'}>
                  {joke.text}
                </span>
                <span className="text-blue-500/40 font-mono">///</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
