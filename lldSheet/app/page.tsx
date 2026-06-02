'use client';

import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import Roadmap from '../src/components/Roadmap';
import LldTable from '../src/components/LldTable';
import ProgressBar from '../src/components/ProgressBar';
import { PRACTICE } from '../src/data/lld';

export default function Home() {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [progressMap, setProgressMap] = useState<Record<string, string>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem('sdt-p');
      if (stored) {
        const parsed = JSON.parse(stored);
        
        // Migrate old HTML values ('not-started', 'active', 'completed') to new values ('ns', 'ac', 'dn')
        const migrated: Record<string, string> = {};
        for(const key in parsed) {
          let val = parsed[key];
          if(val === 'not-started') val = 'ns';
          if(val === 'active') val = 'ac';
          if(val === 'completed') val = 'dn';
          migrated[key] = val;
        }
        setProgressMap(migrated);
      }
    } catch(e) {}
  }, []);

  const updateProgress = (id: string, status: string) => {
    setProgressMap(prev => {
      const next = { ...prev, [id]: status };
      try {
        localStorage.setItem('sdt-p', JSON.stringify(next));
      } catch(e) {}
      return next;
    });
  };

  const totalTasks = PRACTICE.length;
  const doneTasks = PRACTICE.filter(p => progressMap[p.id] === 'dn').length;
  const progressPercent = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-bg font-sans text-text-main">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProgressBar progress={isClient ? progressPercent : 0} />
      <main className="pb-16">
        {activeTab === 'roadmap' && <Roadmap />}
        {activeTab === 'lld' && (
          <LldTable 
            progressMap={progressMap} 
            updateProgress={updateProgress} 
          />
        )}
      </main>
    </div>
  );
}
